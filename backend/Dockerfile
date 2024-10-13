# Use the official Node.js 18.12.1 image as the base image
FROM node:18.12.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the port the backend will run on
EXPOSE 5000

# Start the backend server
CMD ["npm", "run", "dev"]
