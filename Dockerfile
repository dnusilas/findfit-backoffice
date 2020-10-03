FROM node:12-stretch

WORKDIR /usr/src/app

COPY .npmrc package.json yarn.lock ./

RUN yarn

COPY . /usr/src/app

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 3000
