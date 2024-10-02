# Use the Node base image
FROM node:alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the source code to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the container port
EXPOSE 8000

# Start the Next.js application
CMD ["npm", "start"]
