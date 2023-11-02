# Build Phase
FROM node:18-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
ENV NODE_HTTP_TIMEOUT=600000
RUN npm install 

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Run Phase
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy built files from the builder stage
COPY --from=builder /usr/src/app/build /usr/src/app/build

# Install dependencies for the custom server
RUN npm install express

# Copy the custom server script
COPY server.js .

# Set the command to run the server
CMD ["node", "server.js"]

# Expose the necessary port
EXPOSE 3000
