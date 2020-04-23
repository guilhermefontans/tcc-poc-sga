FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install react-scripts@3.3.1 -g --silent

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]