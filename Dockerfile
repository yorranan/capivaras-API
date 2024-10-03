FROM node:20.17.0

WORKDIR /usr/src/api

COPY ./.env.prod ./.env
COPY . .

RUN npm install --quiet --no-optional --no-fund --log-level=error
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]