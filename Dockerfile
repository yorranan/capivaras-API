FROM node:20.17.0


WORKDIR /usr/src/api

COPY ./.env.prod ./.env

RUN npm install --quiet --no-optional --no-fund --log-level=error
RUN npm install -g prisma
RUN npm run build
RUN cd client && npm install && npm run build
# Gere o cliente Prisma
RUN npx prisma generate

COPY . .
EXPOSE 3000

CMD ["npm", "run", "start:prod"]