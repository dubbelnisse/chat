FROM node:12.16-alpine as base

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY /lib ./lib

COPY tsconfig.json ./

RUN npm run build

FROM node:12.16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=base /app/build ./build

CMD npm start