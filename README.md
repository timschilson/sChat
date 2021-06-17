## sChat

sChat is a simple web chat application based on node.js [express, socket.io] and mongodb.

## Features

- Simplistic user interface
- View the 50 oldest messages even after reconnecting
- Selecting a username
- Insanely fast chat experience (realtime)

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

## Connecting to the web-application

When your docker container is running, connect to it via any up-to-date web browser via port 3000 (or as specified in docker-compose.yml) for the chat interface.

http://127.0.0.1:3000 | http://domain.tld:3000