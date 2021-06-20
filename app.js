const express = require("express");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Message = require("./models/message");
const initMessages = 50;

const users = {};

const dbURI = "mongodb://mongo:27017/schat";
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connected to db"))
    .catch((err) => console.log(err));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    Message.find()
        .limit(initMessages)
        .then((result) => {
            socket.emit("init", result);
        })
        .catch((err) => {
            console.log(err);
        });

    socket.on("new-user", (name) => {
        users[socket.id] = name;
        socket.broadcast.emit("user-connected", name);
    });

    socket.on("send-chat-message", (message) => {
        socket.broadcast.emit("chat-message", {
            message: message,
            name: users[socket.id],
        });

        const msg = new Message({
            username: users[socket.id],
            message: message,
        });

        msg.save()
            .then((result) => console.log("send data"))
            .catch((err) => console.log(err));
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("user-disconnected", users[socket.id]);
        delete users[socket.id];
    });
});

http.listen(port, () => {
    console.log(`sChat server running at http://localhost:${port}/`);
});
