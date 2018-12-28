FROM node:10.14.2

WORKDIR /src
COPY . .

RUN npm install
RUN mkdir tmp

EXPOSE 8080
CMD npm run start
