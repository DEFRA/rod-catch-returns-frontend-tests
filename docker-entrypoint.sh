#!/bin/bash
# Init script used when running in a docker container, ensures Xvfb running

# Start Xvfb
echo "Starting Xvfb"
Xvfb :99 -screen 0 1024x768x24 -nolisten tcp &

status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start Xvfb: $status"
  exit $status
fi

export DISPLAY=:99

npm run $1
