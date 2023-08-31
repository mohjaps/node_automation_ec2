FROM node:17

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# RUN npm ci --only=production
COPY . .
EXPOSE 8080
RUN npm run build
CMD [ "npm", "start" ]
