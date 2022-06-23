FROM node:16.15.1-alpine3.15

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY ./ ./

CMD ["npm", "run", "dockerStart"]