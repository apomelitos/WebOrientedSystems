FROM node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY . /usr/src/app

RUN npm install

EXPOSE 8080

CMD ["node", "index.js"]