const fs = require('fs');

let argumentsCmd = process.argv;
argumentsCmd.shift();
argumentsCmd.shift();

const readFileFromUser = (fileName) => {
    const filePath = `${__dirname}/${fileName}`;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        const resultData = data.replace(/console\.log\(([^)]+)\);/g, '');
        fs.writeFile(filePath, resultData, (err, result) => {
        });
    })
}

argumentsCmd.map((file) => {
    readFileFromUser(file);
});

