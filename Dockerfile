FROM node:10.15.3-alpine AS base

WORKDIR /build/wc-angular
COPY ["wc-angular/package.json", "wc-angular/package-lock.json", "./"]
RUN npm ci
COPY wc-angular .
RUN npm run el-build

WORKDIR /build/wc-vue
COPY ["wc-vue/package.json", "wc-vue/package-lock.json", "./"]
RUN npm ci
COPY wc-vue .
RUN npm run build

WORKDIR /build/wc-react
COPY ["wc-react/package.json", "wc-react/package-lock.json", "./"]
RUN npm ci
COPY wc-react .
RUN npm run build

WORKDIR /build/wc-apps
COPY ["wc-apps/package.json", "wc-apps/package-lock.json", "./"]
RUN npm ci
COPY wc-apps .
RUN npm run build

FROM nginx:1.13.9-alpine
COPY --from=base /build/wc-apps/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]