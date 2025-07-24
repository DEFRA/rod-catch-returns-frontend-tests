
FROM alpine:3.19

# Install dependencies
RUN apk add --no-cache openjdk17 curl unzip bash

# Set JMeter version
ENV JMETER_VERSION=5.6.3 \
    JMETER_HOME=/opt/jmeter \
    PATH=$PATH:/opt/jmeter/bin

# Install JMeter
RUN mkdir -p $JMETER_HOME && \
    curl -L https://downloads.apache.org/jmeter/binaries/apache-jmeter-${JMETER_VERSION}.zip -o /tmp/jmeter.zip && \
    unzip /tmp/jmeter.zip -d /opt && \
    mv /opt/apache-jmeter-${JMETER_VERSION}/* $JMETER_HOME && \
    rm -rf /tmp/jmeter.zip

WORKDIR /tests

COPY . /tests

CMD bash -c '\
    mkdir -p /tests/results/html-report && \
    chmod -R a+w /tests/results && \
    jmeter -n -t "Frontend Tests.jmx" \
           -l results/result.jtl \
           -e -o results/html-report \
           -q local.properties'