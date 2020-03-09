FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY /public ./public
COPY /src ./src
COPY rollup.config.js ./

RUN npm install -g serve

CMD ["sh -c", "npm run build && serve public"]