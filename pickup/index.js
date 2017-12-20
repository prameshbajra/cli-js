#!/usr/bin/env node

const request = require('request');
const Ora = require('ora');
const chalk = require('chalk');

const url = 'https://mixedapi.herokuapp.com/pickup';
const spinner = new Ora();
spinner.text = 'Gathering data ... Please wait';
spinner.color = 'yellow';
spinner.start();

request.get(url, (err, res) => {
    if (err) {
        spinner.fail(chalk.red('Some wild error appeared'));
        console.log(chalk.red('Are you sure you are connected to internet?'));
    } else {
        spinner.succeed('Enjoy the pickup');
        console.log('\n');
        console.log(chalk.yellow(res.body.substring(53, res.body.length - 10)));
        console.log('\n');
    }
});
