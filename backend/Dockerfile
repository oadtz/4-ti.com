FROM strapi/strapi

# Setting working directorFROM node:alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying source files
COPY . .
RUN npm install

# Building app
RUN strapi start