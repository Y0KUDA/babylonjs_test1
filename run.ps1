# get root directory
$root = (git rev-parse --show-toplevel)

cd $root
cd out
node index.js

cd $root