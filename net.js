#!/usr/bin/env node

const argv = require('yargs')
    .command('ping [host]')
    .command('traceroute [host]')
    .alias('verbose', 'v')
    .describe('v', 'verbose output').argv;

if (argv._.includes('ping')) {
    console.log(`PING ${argv.host}`);
}

if (argv._.includes('traceroute')) {
    console.log(`TRACEROUTE ${argv.host}`);
}
