//基本let var const對照比較


let Count1 = "我是kkl"; //字串 string
let age = "我的年齡:86歲"
let myName = Count1 + age;
console.log(myName);

let score = 101; //數字

console.log(Count1 + '今天得到' + score + '分'); //number類型

// let isFake = false; //true false 布林值
// console.log(isFake);

// let bag = undefined
// console.log(bag);

// let bag2 = null;
// console.log(bag2);

//+-x\測試
console.log(score % 3);

//let var const差異
//let 用來取代var所有應用場景
//const 並不會被修改
let a1 = "aaaa";
console.log(a1);
//修改a1內容
a1 = "bbbb";
console.log(a1);

const b1 = "kkkk";
console.log(b1);