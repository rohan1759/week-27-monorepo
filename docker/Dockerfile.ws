FROM oven/bun:alpine

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./apps/ws ./apps/ws
COPY ./bun.lock ./bun.lock
COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

RUN bun install
RUN bun run db:generate

EXPOSE 8081

CMD ["bun", "run", "start:ws"]