FROM node:20-alpine AS dev

WORKDIR /server

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE ${SERVER_PORT}

CMD [ "npm", "run", "dev" ]

FROM node:20-alpine AS prod

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${SERVER_PORT}

CMD [ "npm", "start" ]
