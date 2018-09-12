/*
 * Simple script for use with intellij to debug inside the IDE only
 */
process.stdin.isTTY = true;
require('./node_modules/webdriverio/build/lib/cli');
