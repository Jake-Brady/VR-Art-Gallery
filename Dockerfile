FROM node:10-alpine

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

RUN apk del .gyp

COPY --chown=node:node . .

EXPOSE 5000

CMD ["node", "server/server.js"]
