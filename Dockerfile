FROM ubuntu:bionic

ENV RUN_SCRIPT=docker-local-browser

# Install packages required by this script
RUN set -ex; \
	apt-get update; \
	apt-get upgrade -y; \
	apt-get install -y --no-install-recommends wget curl gnupg git xvfb openjdk-8-jdk

# Install google-chrome repo
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN /bin/sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

# Install browsers
RUN	apt-get update; \
    apt-get install -y firefox google-chrome-stable

# Cleanup after install
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.12.0

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Create app directory
RUN mkdir -p /app
RUN mkdir -p /app/log
WORKDIR /app
VOLUME /app/log

# Install packages
COPY ./package*.json /app/
RUN npm install

# Copy source
COPY ./src /app/src
COPY ./docker-entrypoint.sh /app/docker-entrypoint.sh

RUN echo "Installation folder:" && ls -lah
ENV DISPLAY :99

CMD [ "bash", "-c", "./docker-entrypoint.sh ${RUN_SCRIPT}" ]
