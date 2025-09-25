# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:stable-alpine-slim AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/out ./
# Config nginx si besoin
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
