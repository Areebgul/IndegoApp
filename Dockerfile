# Dockerfile

# Use the official Node.js LTS image as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port your application will run on (replace 3000 with your actual port)
EXPOSE 3000

# Start the application
CMD [ "node", "dist/main" ]
