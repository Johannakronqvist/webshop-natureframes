FROM node:latest

WORKDIR /natureproject

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]

