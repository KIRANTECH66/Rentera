# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application from a lightweight Nginx server
FROM nginx:1.23-alpine

# Copy the build output from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Add a custom nginx configuration to handle single-page application routing
# This ensures that refreshing the page on a route like /login doesn't result in a 404
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
