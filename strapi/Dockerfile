FROM node:18-alpine as base
EXPOSE 1337
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

FROM base as install
WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn install
ENV PATH /opt/node_modules/.bin:$PATH

FROM install as run
WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["yarn", "build"]
CMD ["yarn", "develop"]