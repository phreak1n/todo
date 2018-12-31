FROM node:alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 8080
ENV NODE_ENV=production
RUN npm build
CMD [ "node", "app.js" ]
