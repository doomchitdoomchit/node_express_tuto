// 12-http

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if (req.url === '/'){
//         res.end('Welcome Home Page')
//     }
//     if (req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Ooops!</h1>
//     <p> We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
// })

// server.listen(5000)

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageNmae>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// pakage.json - manifest file (stores important info about project/package)
// manual approach (creat package.json in the root, create propertues etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);