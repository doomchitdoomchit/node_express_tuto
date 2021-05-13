const {readFile, writeFile } = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// // const getText = (path) => {
// //     return new Promise((resolve, reject)=>{
// //         readFile(path, 'utf-8', (err, data)=>{
// //             if(err){
// //                 reject(err)
// //             } else {
// //                 resolve(data);
// //             }
// //         })
// //     })
// // }

// // getText('./ch.8-11/content/first.txt')
// //     .then(result => console.log(result))
// //     .catch(err => console.log(err))

const start = async () => {
    try {
        const first = await readFile('./ch.8-11/content/first.txt', 'utf8')
        const second = await readFile('./ch.8-11/content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt',
        `THIS IS AWESOME : ${first} ${second}`,
        {flag : 'a'}
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start()