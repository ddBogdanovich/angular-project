##### Stage 1
FROM node:8 as node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
EXPOSE 80
COPY --from=node /app/dist/* /usr/share/nginx/html
