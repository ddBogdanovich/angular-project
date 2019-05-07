##### Stage 1
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

##### Stage 2
FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/dist/* /usr/share/nginx/html
