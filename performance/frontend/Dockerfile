
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
    if [ -f local.properties ]; then \
        echo "Using local.properties"; \
        JMETER_ARGS="-q local.properties"; \
    else \
        echo "Using environment variables"; \
        JMETER_ARGS="-JserverName=${SERVER_NAME} -JapiUrl=${API_URL} -JloginDataFile=${LOGIN_DATA_FILE}"; \
    fi && \
    jmeter -n -t "Frontend Tests.jmx" \
        -l /dev/stdout \
        -e -o results/html-report \
        $JMETER_ARGS'
