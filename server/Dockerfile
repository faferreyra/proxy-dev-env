FROM node:16.14.2-alpine

WORKDIR /usr/src/app

COPY index.js ./

RUN apk add --no-cache tini

EXPOSE 8000

ENTRYPOINT ["/sbin/tini", "--", "node", "index.js"]