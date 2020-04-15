FROM node:alpine

LABEL MAINTAINER LeonardoGuilen

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 15520

CMD ["npm", "run", "start"]


