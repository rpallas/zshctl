#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
	fs = require('fs')
    pjson = require('./package.json');

program
	.version(pjson.version)
	.option('-n, --nocorrect [command]', 'Add a nocorrect alias to the .zshrc file to prevent auto correction of a command')
	.parse(process.argv);

if (program.nocorrect) {
	fs.appendFile('~/.zshrc', 'data to append', function (err) {
	  if (err) throw err;
	  console.log('The "data to append" was appended to file!');
	});
};

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineappe');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
