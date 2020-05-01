FROM node:12.14 as build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM sebp/lighttpd
COPY --from=build /usr/src/app/build /var/www/localhost/htdocs/
RUN chmod 440 /var/www/localhost/htdocs/

EXPOSE 80