# Build stage
FROM node:22 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:22
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY server.js .
RUN npm install express
EXPOSE 8080
CMD ["node", "server.js"]
