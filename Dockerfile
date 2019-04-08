# start from base
FROM node:8-alpine
MAINTAINER Jonathan Becker <jonathan@becker-clan.org>

# install system-wide deps
RUN mkdir -p /usr/src/app

# copy our application code
WORKDIR /usr/src/app
COPY . .

# fetch app specific deps
RUN npm install

# expose port
EXPOSE 3000

# start app
CMD [ "npm", "run", "start" ]
