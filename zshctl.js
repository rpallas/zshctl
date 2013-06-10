//#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    fs = require('fs');

program
    .version('0.0.1')
    .option('-n, --nocorrect [command]', 'Add a nocorrect alias to the .zshrc file to prevent auto correction of a command')
    .parse(process.argv);

var zshrc_file = '~/.zshrc',
    nocorrect_file = '~/.zsh_nocorrect',
    nocorrect_fn = "### Stop zsh auto correcting (~/.zsh_nocorrect)" +
                 "\nif [ -f ~/.zsh_nocorrect ]; then" +
                 "\n    while read -r COMMAND; do" +
                 "\n        alias $COMMAND=\"nocorrect $COMMAND\"" +
                 "\n    done < ~/.zsh_nocorrect" +
                 "\nfi";

if (program.nocorrect) {
    fs.exists(nocorrect_file, function (exists) {
        if(!exists){
            debugger;
//            fs.readFile(zshrc_file, function (err, data) {
//                if (err) throw err;
//                // If the zshrc file does not contain the no_correct function
//                if(data.indexOf("zsh_nocorrect") !== -1){
//                    fs.appendFile(zshrc_file, nocorrect_fn, function (err) {
//                        if (err) throw err;
//                        console.log('%s was modified. Reference to %s added', zshrc_file, nocorrect_file);
//                    });
//                }
//            });
        } else {
//            fs.appendFile(nocorrect_file, program.nocorrect, function (err) {
//                if (err) throw err;
//                console.log("%s was modified. '%s' will no longer be corrected", nocorrect_file, nocorrect_file);
//            });
        }
    });
}
