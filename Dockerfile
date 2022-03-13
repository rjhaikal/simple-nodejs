# Build an image starting with the node:alpine
FROM node:alpine

# Make a directory called /app
RUN mkdir /app

# Add the current directory . into the path /app in the image
ADD . /app

# Set the working directory to /app
WORKDIR /app

# Update and Start
RUN npm update
CMD npm start
