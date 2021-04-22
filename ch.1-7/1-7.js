// 1-intro

// const amount = 12

// if(amount < 10){
//     console.log('small number');
// }else{
//     console.log('large number');
// }

// console.log('hey its my first node app');

// 2-global :: no window

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules ((CommonJS)) 
// module     - info about current module (file)
// process    - info about env where the program is being ececuted
// to run file in vsc, savesave.... not save pre file is run

console.log(__dirname);

// 작성하면 1초에 한번씩 찍어줌 반복1000번
// setInterval(()=>{
//     console.log('hello world')
// },1000)

// 3-Modules (name)
// '' 말고 `` 쓸 것

// const john = 'john'
// const peter = 'peter'
// const sayHi = (name) =>{
//     console.log(`hello there ${name}`);
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// 4-name and 5-utils
// 어차피 변수든 함수든 const로 설정하고 exports로 불러오기 떄문에 상관없음.
// 대신 불러올 파일에서 무엇을 밖으로 공유할 것인지 지정해주고 지정해야하지 않아야할 것을 분명히 하기
// 불러올때는 require을 통해서 불러오고 각각은 .을 통해서 불러온다.
// const names = require('./names')
// console.log(names)

// names.sayHi('susan')
// names.sayHi(names.john)
// names.sayHi(names.peter)

// 6-alternative
// const data = require('./alternative')
// console.log(data)

// 7-mind-grenade 함수는 따로 exports를 안해줘도 호출이 간단히 된다.
// const num1 = 5;
// const num2 = 10;

// function addValues(){
//     console.log(`the sum is : ${num1 + num2}`);
// }
// addValues()
require('./mindgrenade')