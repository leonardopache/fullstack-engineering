FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]