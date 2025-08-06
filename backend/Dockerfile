# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
# This step is separated to take advantage of Docker's layer caching.
# It will only re-run if the package files have changed.
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 3001, so you need to expose it
EXPOSE 3001

# Define the command to run your app
CMD [ "npm", "start" ]
