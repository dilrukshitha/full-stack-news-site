# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend for production
RUN npm run build

# Expose port 3000 (matching the one in docker-compose)
EXPOSE 3000

# Use a simple server like serve or Vite's preview for static hosting
# Install the `serve` package
RUN npm install -g serve

# Start the frontend server using serve or vite preview
CMD ["serve", "-s", "dist"]

# Alternatively, you can use Vite's built-in preview server:
# CMD ["npm", "run", "preview"]
