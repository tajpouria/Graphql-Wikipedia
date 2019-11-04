FROM node:alpine
WORKDIR /usr/app
COPY . .
COPY ./package.json .
RUN yarn
RUN yarn bootstrap