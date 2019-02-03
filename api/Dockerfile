FROM node:10-alpine

LABEL name="transaction api"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]