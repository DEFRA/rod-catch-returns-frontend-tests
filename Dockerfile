FROM ubuntu:bionic
ENV TEST_CONFIG ./src/conf/docker.conf.js

ENV DEBIAN_FRONTEND="noninteractive"
ENV TZ=Europe/London

# Install packages required by this script
RUN set -ex; \
    apt-get update; \
    apt-get upgrade -y; \
    apt-get install -y --no-install-recommends wget curl gnupg git default-jdk g++ build-essential xvfb

# Install google-chrome repo
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN /bin/sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

# Install browsers
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get update; \
    apt-get install -y ./google-chrome-stable_current_amd64.deb firefox

# Cleanup after install
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install nvm with node and npm
RUN mkdir -p /usr/local/nvm \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Create app directory
RUN mkdir -p /app/logs
WORKDIR /app
VOLUME /app/logs

# Install packages
COPY ./package*.json /app/
RUN npm install

# Copy source
COPY ./src /app/src
COPY ./*.js /app/

CMD ["node_modules/.bin/wdio", "src/conf/docker.conf.js"]