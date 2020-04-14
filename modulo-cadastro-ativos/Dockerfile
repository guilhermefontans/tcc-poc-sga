FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3334

CMD [ "yarn", "nodemon", "src/index.js" ]