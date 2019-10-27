FROM node:8

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet
RUN npm run setup-dbs && npm run seed
COPY . .