# Base builder image
FROM bitnami/node:14 AS build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

RUN NODE_ENV=production yarn run build

# Production ready image
FROM bitnami/node:14-prod AS prod
WORKDIR /app

COPY --from=build /app/ .

EXPOSE 1337

CMD ["yarn", "run", "start"]
