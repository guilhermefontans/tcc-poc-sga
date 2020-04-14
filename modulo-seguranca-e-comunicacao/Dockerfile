FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3339

CMD [ "yarn", "nodemon", "index.js" ]