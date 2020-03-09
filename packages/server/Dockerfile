FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY /lib ./lib
COPY tsconfig.json ./

CMD npm run prod