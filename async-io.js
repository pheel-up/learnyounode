/*
asynchronous means to execute at a later time -- things that have to talk to
to hard drives or networks -- this is because I/O is currently 100,000 times
slower than talking to RAM https://github.com/maxogden/art-of-node#callbacks
*/

var fs = require('fs')
// var file or path = process.argv[2] can also be declared

fs.readFile(process.argv[2], 'utf8', function callback (err, contents) {
  if (err){
    throw err
  };
  var lines = contents.split('\n').length-1;
  console.log(lines);
})
