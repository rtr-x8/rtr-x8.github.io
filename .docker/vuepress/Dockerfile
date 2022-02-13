FROM node:14.17-alpine
ENV NODE_PATH /opt/node_modules

RUN apk update && apk add git

WORKDIR /app

RUN yarn install
