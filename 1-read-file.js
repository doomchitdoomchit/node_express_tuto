const { readFile } = require('fs')

console.log('start a first task');
// Check file path!!
readFile('./ch.8-11/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');