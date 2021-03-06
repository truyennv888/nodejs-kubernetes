FROM node:14-alpine
RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /home/app
COPY package*.json .
USER node
RUN npm i
COPY --chown=node:node . .
EXPOSE 8080
CMD ["npm", "start"]
