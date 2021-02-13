FROM node:14.15-alpine

WORKDIR /usr/src/website

COPY . /usr/src/website

RUN npm install --silent --no-progress --ignore-optional
