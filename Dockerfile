FROM ubuntu:latest
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

# Install Chrome
RUN	apt-get update; \
    apt-get install -y google-chrome-stable

# Install Firefox using apt-get and configure to avoid incompatible Snap version
RUN apt-get update; \
    apt-get install -y software-properties-common
RUN add-apt-repository ppa:mozillateam/ppa
RUN printf 'Package: firefox\nPin: release o=LP-PPA-mozillateam\nPin-Priority: 1500\n' | tee /etc/apt/preferences.d/mozilla-firefox
RUN apt-get install -y firefox

# Cleanup after install
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18.17.0

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install nvm with node and npm
RUN mkdir -p /usr/local/nvm \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash \
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
