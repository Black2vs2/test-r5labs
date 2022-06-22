FROM node:16.15.1-alpine3.15

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm i
COPY ./ ./


CMD ["npm", "run", "start"]