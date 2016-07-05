#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var path = require('path');
var appDir;
function test(argument) {
	console.log(argument);
}

function copyFile(src, dist) {
  fs.writeFileSync(appDir+'/'+dist, fs.readFileSync('myapp/'+src));
}

program
  .version('0.0.1')
  // .usage('[options] <file ...>')
  .parse(process.argv);

// if (program.test) console.log('run test!!');
// if(program.args){
// 	appDir = program.args[0];
// 	fs.mkdirSync(appDir);
// 	copyFile('app.js','app.js');
// }


var txt = fs.readFileSync('myapp/app.js','utf8');
txt = txt.replace(/{{app}}/g,'cain');
fs.writeFileSync('myapp/cain.js',txt);
 console.log('run me end..',program.args[0]);
 // console.log('run me end..',program);
