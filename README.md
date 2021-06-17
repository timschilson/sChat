### sChat is a simple web chat application based on node.js [express, socket.io] and mongodb.

📢 Note: This project was not created with the intention to be secure or to protect the privacy of the users. Use at your own risk!

https://drive.google.com/file/d/1moGwK_IgTZId4myUHfDixDta_nMH2HqA/preview" width="640" height="480" allow="autoplay

<p align="center">
    <img src="https://doc-0k-78-docs.googleusercontent.com/docs/securesc/fojpir2g3gi83qauuiee0ekv63al8inv/o7cefve85s057bnklkjb9g4k2c5198q7/1623958575000/03404707661045936168/06155198458613751007/1moGwK_IgTZId4myUHfDixDta_nMH2HqA?e=view&authuser=0" height="100" alt="sChat">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="GitHub Release">
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="Last Commit">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Docker Pulls">
</p>

---

## Features

- Simplistic user interface
- View the 50 oldest messages even after reconnecting
- Selecting a username
- Insanely fast chat experience (realtime)
- Persistent database data

---

## Installation

1. Install Docker and Docker-Compose

- [Docker Install documentation](https://docs.docker.com/install/)
- [Docker-Compose Install documentation](https://docs.docker.com/compose/install/)

2. Create a docker-compose.yml file similar to this:

```yml
version: '3'
services: 
    app:
        image: timschilson/schat
        container_name: schat-app
        restart: always
        ports: 
            - '3000:3000'
        links:
            - mongo
    mongo:
        image: mongo
        container_name: schat-mongo
        ports: 
            - '27017:27017'
        volumes:
            - mongodb:/data/db
            - mongodb_config:/data/configdb
            
volumes:
    mongodb:
    mongodb_config:
```

3. Bring up your sChat-stack

```bash
docker-compose up -d
```

---

## Connecting to the web-application

When your docker container is running, connect to it via any up-to-date web browser via port 3000 (or as specified in docker-compose.yml) for the chat interface.

http://127.0.0.1:3000 | http://domain.tld:3000