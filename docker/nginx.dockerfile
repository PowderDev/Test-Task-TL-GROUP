FROM node:18.0.0-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM nginx:1.21.6

RUN mkdir /etc/nginx/ssl

RUN openssl req -x509 -days 10 -nodes \
  -newkey rsa:2048 -keyout /etc/nginx/ssl/self.key \
  -out /etc/nginx/ssl/self.crt \
  -subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=example.com"

RUN openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048

WORKDIR /etc/nginx
RUN rm nginx.conf

COPY nginx/nginx.conf .

COPY --from=builder /app/dist /var/www/html
