const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let query = " what is your name"

rl.question(query, (answer) => {
    console.log(`hello ${answer}`);

    rl.close();
})
console.log(process.argv);