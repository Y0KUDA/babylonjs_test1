# get root directory
$root = (git rev-parse --show-toplevel)
cd $root

# run tsc
echo 'transpile typescript to javascript'
tsc

# copy resource files
echo 'copying resource files'
cp ./src/rsc ./out/rsc -Recurse

# transpile CommonJS to ES6(for browser)
echo 'compaction and transpile CommonJS'
browserify ./out/render.js -o ./out/render.js

# webpack