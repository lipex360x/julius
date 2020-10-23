FROM node:12

WORKDIR /usr/src/app

#VOLUME /usr/src/app

RUN apt-get update && apt-get install -y yarn 

#COPY package.json ./

COPY . .

RUN yarn

RUN ls -laF && more package.json

CMD ["yarn", "dev"]

EXPOSE 3000