# get root directory
$root = (git rev-parse --show-toplevel)

cd $root
rmdir out -Recurse