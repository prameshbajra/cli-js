const request = require("request");
const chalk = require("chalk");
const optimist = require("optimist");
const ora = require("ora");

const url = "https://mixedapi.herokuapp.com/quotes";
const spinner = new ora();
spinner.text = "Gathering data ... Please wait";
spinner.color = "yellow";
spinner.start();

request.get(url, (err, res) => {
    if (err) {
        spinner.fail("Some wild error appears");
        throw err;
    }
    else {
        spinner.succeed("Done \n Thank you for using cli-js");
        console.log("\n");
        console.log(chalk.yellow(res.body.substring(51, res.body.length - 10)));
        console.log("\n");
    }
});

