FROM node:alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "node", "app.js" ]
