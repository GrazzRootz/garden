FROM node:8

# WORKDIR /app

# COPY package.json /app
# RUN npm install
# COPY . /app

# CMD node index.js

# EXPOSE 8081

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .