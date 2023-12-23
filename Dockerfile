FROM node:latest AS build
WORKDIR /usr/src/build
COPY . .
RUN npm install
RUN npm run build


FROM node:latest AS app
WORKDIR /usr/src/app
RUN npm install -g http-server
COPY --from=build /usr/src/build/build .

ENV PORT=3000
EXPOSE 3000


CMD ["http-server"]