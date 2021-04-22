// 8-os-modules

const os = require('os')

// info about current user
const user = os.userInfo()
// console.log(user);

// method returns the system uptime in seconds
console.log(`THe System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    toralMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);

// 9-path-modules

const path = require('path')

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

10-fs-modules

const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);
// // file 을 읽고 쓰는 모듈, 
// // write에서 flag의 속성이 있음 그 중 'a'는 add임 바로 뒤에 붙임
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag : 'a'}
)

// 11-fs-async

const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    console.log('first');
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log('second');
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
                console.log('done with this task');
            }
        )
    })
})
console.log('starting next task');

