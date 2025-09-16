# Rod Catch Returns frontend performance tests

Performance tests for the Rod Catch Returns (RCR) frontend service.

## Create local.properties
Create a local.properties in the performance/frontend directory, use local.properties.example as a guide. The proxy settings are optional and are only used in pre-prod

| Name          | Description                                                                            |
| --------------| -------------------------------------------------------------------------------------- |
| serverName    | the domain of the RCR public frontend (do not include https://)                        |
| apiUrl        | the full url of the Java API                                                           |
| loginDataFile | which login file to use, can be logins-dev.csv, logins-test.csv or logins-pre-prod.csv |
| no_proxy      | comma separated list of domain names for proxy settings should be bypassed
| HTTP_PROXY    | the proxy server to use for HTTP requests
| HTTPS_PROXY   | the proxy server to use for HTTPS requests

## Running using JMeter

The performance tests use JMeter to run. To make modifications locally, it is advised to install Java and [JMeter](https://jmeter.apache.org/). Run JMeter from this directory i.e.

```
cd performance/frontend
```

### GUI

To bring up the JMeter GUI, if installed in the home directory in linux, it will be
```
~/apache-jmeter-5.6.3/bin/jmeter -q local.properties
```

Once the GUI is loaded, File > Open > Frontend Tests.jmx

To run, just press the green triangle (start button).

### Command line

Make sure you have created the local.properties above and create a folder called `results`. To run using the command line run (modify the location of where your JMeter is installed):

```
~/apache-jmeter-5.6.3/bin/jmeter -n -t Frontend\ Tests.jmx -l results/result.jtl -e -o results/html-report -q local.properties
```

This will run the tests and produce a report.

## Running Using Docker

To run using docker, make sure you have created the local.properties. Then in `performance/frontend` run:
```
docker build -t jmeter-with-report .
```
To build the image, then the following to run it
```
docker run --rm -v "$PWD:/tests" jmeter-with-report
```
