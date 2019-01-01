FROM node:alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 80
CMD [ "node", "app.js" ]
