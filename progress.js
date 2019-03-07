#!/usr/bin/env node

const ProgressBar = require('progress');

const bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    total: 40,
});
const timer = setInterval(function() {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);
