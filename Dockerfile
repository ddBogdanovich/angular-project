##### Stage 1
FROM node:8 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/* /usr/share/nginx/html
EXPOSE 80