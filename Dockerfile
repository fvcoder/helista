FROM node:16-alpine
WORKDIR /usr/server/app

COPY ./package.json ./
ENV NODE_ENV=production

RUN npm install

COPY ./ .
RUN npm run build

CMD ["npm", "run" ,"start"]