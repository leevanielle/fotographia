#!/usr/bin/env node

'use strict'

const clc = require('cli-color')
const exec = require('child_process').exec
const program = require('commander')
const util = require('util')

let userArgs = process.argv.slice(2)

program
  .version(1.0)
  .option('-c, --convert', "Convert file(s) from .r2 to .jpg")
  .parse(process.argv)

const command = (command) => {
    exec(command, (error, stdout, stderr) => {
    console.log(clc.blue.bold(stdout))
    //console.log('stderr: ' + stderr);
    if (error !== null)  console.log('exec error: ' + error)
  })
}

if (program.convert) {
  command('for i in *.CR2; do sips -s format jpeg $i --out "${i%.*}.jpg"; done')
}
