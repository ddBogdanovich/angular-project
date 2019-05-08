##### Stage 1
FROM node:10 as builder
WORKDIR '/app'
COPY package.json .
RUN npm install -g node-gyp
RUN npm install
COPY . .
RUN npm run build

##### Stage 2
FROM nginx
EXPOSE 80
COPY --from=builder /app/dist/* /usr/share/nginx/html
