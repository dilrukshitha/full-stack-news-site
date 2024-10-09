# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install --production

# Copy the rest of the backend code
COPY . .

# Expose port 5000 (matching the one in docker-compose)
EXPOSE 5000

# Set the environment variable for production
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "server.js"]
