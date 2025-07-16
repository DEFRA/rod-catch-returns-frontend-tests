# Rod Catch Returns frontend performance tests

Performance tests for the Rod Catch Returns (RCR) frontend service.

## Create local.properties
Create a local.properties in the performance/frontend directory use local.properties.example as a guide.

| Name          | Description                                                                            |
| --------------| -------------------------------------------------------------------------------------- |
| serverName    | the domain the RCR public frontend                                                     |
| apiUrl        | the full url of the Java API                                                           |
| loginDataFile | which login file to use, can be logins-dev.csv, logins-test.csv or logins-pre-prod.csv |

## Running using JMeter

The performance tests use JMeter to run. You can run them using Docker (see Docker section below), but to make modifications locally, it is advised to install Java and [JMeter](https://jmeter.apache.org/). Run JMeter from this directory i.e.

```
cd performance/frontend
```

### GUI

To bring up the JMeter GUI, if installed in the home directory in linux, it will be
```
~/apache-jmeter-5.6.3/bin/jmeter -q local.properties
```

Once the GUI is loaded, File > Open > Frontend Tests.jmx

![Screenshot of GUI](readme-images/gui.png)

You will need to change the following
- Server Name or IP - the RCR public frontend url
- 

To run, just press the green triangle (start button).

### Command line

Make sure you have created the local.properties above. To run using the command line run (modify the location of where your JMeter is installed):

```
~/apache-jmeter-5.6.3/bin/jmeter -n -t Frontend\ Tests.jmx -l results/result.jtl -e -o results/html-report -q local.properties
```

This will run the tests and produce a report.

## Docker

To run using docker, make sure you have created the local.properties. Then in `performance/frontend` run:
```
docker build -t jmeter-with-report .
```
To build the image, then the following to run it
```
docker run --rm -v "$PWD:/tests" jmeter-with-report
```