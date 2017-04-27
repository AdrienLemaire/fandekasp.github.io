#!/usr/bin/env node

import {createDirectory, readdir} from async-file;


var exec = require('child_process').exec,
    child,
    filetypes = ['py', 'md', 'vim'];

await createDirectory('/tmp/vim_times');

function run_vim(ft) {
    child = exec('vim test.'+ft+' --startuptime /tmp/vim_times/'+ft+'.txt');
}


async function() {
    var list = await readdir('/tmp/vim_times/');
}


for 






apple   =red
grass+=green
sky-=   blue
