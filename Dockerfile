FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ARG CONFIG=production
RUN npm run build -- --configuration=$CONFIG

FROM nginx:1.27-alpine
COPY --from=build /app/dist/client-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://localhost:80/ > /dev/null || exit 1
