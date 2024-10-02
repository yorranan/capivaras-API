FROM node:20.17.0


WORKDIR /usr/src/api

COPY . .
COPY ./.env.prod ./.env

RUN npm install -g prisma
RUN npm install --quiet --no-optional --no-fund --log-level=error
RUN npm run build

RUN npx prisma generate

EXPOSE 80

CMD ["npm", "run", "start:prod"]