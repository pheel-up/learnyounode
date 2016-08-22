var fs = require('fs'),
    path = require('path');

var dir = process.argv[2]
var ext = process.argv[3]
// console.log(dir, ext)

fs.readdir(dir, function callback (err, list) {
  if (err) return console.error(err);
  for(i = 0; i < list.length; i++) {
    // console.log(path.extname(list[i]));
    var dotExt = path.extname(list[i]);
    // or add "'.' +" before process.argv[3]
    var extStr = dotExt.slice(1);
    // console.log(extStr);
    if(ext === extStr) {
      console.log(list[i]);
    }
  }
  // console.log(path.extname(list));
  // console.log(list);
})

/*
Official Solution

var fs = require('fs')
     var path = require('path')

     var folder = process.argv[2]
     var ext = '.' + process.argv[3]

     fs.readdir(folder, function (err, files) {
       if (err) return console.error(err)
       files.forEach(function(file) {
           if (path.extname(file) === ext) {
               console.log(file)
           }
       })
     })
*/
