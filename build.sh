#!/bin/sh

rm -r out &> /dev/null
mkdir out

tsc

esbuild --bundle out/index.js --outfile=dist/user.js --banner:js="$(cat meta.txt)"
esbuild --bundle out/index.js --outfile=dist/mini.js --banner:js="$(cat meta.txt)" --minify
