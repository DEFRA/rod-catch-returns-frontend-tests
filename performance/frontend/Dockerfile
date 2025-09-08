FROM alpine:3.22

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
    PROXY_ARGS="" && \
    if [ -n "$HTTP_PROXY" ]; then \
        hostport=$(echo $HTTP_PROXY | sed -E "s#^https?://##") && \
        host=$(echo $hostport | cut -d: -f1) && \
        port=$(echo $hostport | cut -d: -f2) && \
        PROXY_ARGS="$PROXY_ARGS -Dhttp.proxyHost=$host -Dhttp.proxyPort=$port" && \
        echo "Configured HTTP proxy: $host:$port"; \
    fi && \
    if [ -n "$HTTPS_PROXY" ]; then \
        hostport=$(echo $HTTPS_PROXY | sed -E "s#^https?://##") && \
        host=$(echo $hostport | cut -d: -f1) && \
        port=$(echo $hostport | cut -d: -f2) && \
        PROXY_ARGS="$PROXY_ARGS -Dhttps.proxyHost=$host -Dhttps.proxyPort=$port" && \
        echo "Configured HTTPS proxy: $host:$port"; \
    fi && \
    if [ -n "$no_proxy" ]; then \
        PROXY_ARGS="$PROXY_ARGS -Dhttp.nonProxyHosts=$(echo $no_proxy | sed "s/,/|/g")" && \
        echo "Configured no_proxy: $no_proxy"; \
    fi && \
    jmeter -n -t "Frontend Tests.jmx" \
        -l results/result.jtl \
        -j /dev/stdout \
        -e -o results/html-report \
        $JMETER_ARGS $PROXY_ARGS'
       