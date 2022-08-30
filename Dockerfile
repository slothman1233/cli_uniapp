# 安装npm 依赖
FROM node:16 as build

RUN npm config set registry https://registry.npmmirror.com/

#sass 源切换 
RUN npm config set sass_binary_site https://registry.npmmirror.com/mirrors/node-sass

WORKDIR /webapp

COPY package-lock.json ./

COPY package.json ./

# RUN npm cache clear --force

# RUN npm cache verify

RUN npm install --force


#获取生产文件
FROM node:16 as builddist
ARG env

WORKDIR /web

COPY --from=build /webapp/node_modules  ./node_modules

COPY . .

RUN npm run build:h5:${env}


# 启动nginx服务
FROM nginx
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
RUN echo "server {  \
                      listen       80; \
                      server_name  localhost; \
                      location / { \
                      root   /var/www/html/; \
			          index /index.html; \
                      proxy_set_header        X-Real-IP \$remote_addr; \
                      proxy_set_header        X-Forwarded-For \$proxy_add_x_forwarded_for; \
                  } \
                 }" > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

COPY --from=builddist /web/dist/build/h5 ./var/www/html/

EXPOSE 80
EXPOSE 443
