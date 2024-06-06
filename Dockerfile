FROM node:16 

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["npm","start"]

EXPOSE 3000
