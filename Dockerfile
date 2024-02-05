FROM node:16-slim
LABEL authors="duy.maid"

# Update apk and install some dependencies
RUN apt-get update
RUN apt-get install -y bash vim curl
RUN apt-get install ca-certificates

# Create app directory, this is in our container/in our image
WORKDIR /app

COPY tsconfig.json ./
COPY package.json ./
COPY src /app/src


RUN npm install
RUN npm install typescript -g

RUN npm run build

EXPOSE 7891
ENTRYPOINT ["npm", "start"]
