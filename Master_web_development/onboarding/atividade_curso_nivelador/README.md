# Simple Node server with Cowsay

---
## 1. Running the example app locally

#### 1.1. Clone the repo
```bash
git clone https://github.com/leonardopache/atividade_curso_nivelador
```

#### 1.2. Download the needed packages from npm
```bash
npm install
```
If all went well, you now have a new folder named `node_modules/`.

#### 1.3. Start the app by running:
```bash
node index.js
```
or...
```bash
npm run start
```

You should see in your terminal:
```bash
Running on http://0.0.0.0:8080
```

#### 1.4. Open http://127.0.0.1:8080/ in your browser.

- You should see a beautifully cow saying some message 

#### 1.5. Stop the app and clean the project
- First, we will stop the server by hitting `CTRL`+`C`.

- Secondly, we will delete the `node_modules/`. We will later generate it from inside of our Docker container.

---
## 2. Docker
#### 2.1 `Dockerfile`
```
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Bind your app to port 8080
EXPOSE 8080

CMD [ "node", "index.js" ]
```

#### 2.2. Build the project into a `Docker` image
```
docker build -t cowsay-nodejs .
```

#### 2.3. Start a container from the image we just built
```
docker run -p 10080:8080 -d cowsay-nodejs
```

#### 2.4. Open http://127.0.0.1:10080/ in your browser.

#### 2.5. Other useful commands:

- docker images —> lists all images on system
- docker ps —> lists running containers on system
- docker ps -a —> lists all containers
- docker stop <container id> -> stop a container
- docker rm <container id> -> remove a container
- docker image rm <image name> -> remove an image
