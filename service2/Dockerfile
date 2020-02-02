FROM node:alpine3.10

WORKDIR /app
COPY . /app
RUN npm install --silent

EXPOSE 8080
CMD [ "node", "/app/index.js" ]