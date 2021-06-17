FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
<<<<<<< HEAD
CMD [ "node", "app.js" ]
=======
CMD [ "node", "app.js" ]
>>>>>>> 23aa8d8aa58e5a0169a81f40fb5bd39c5a0b9708
