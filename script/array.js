//陣列教學

let classA = ['小白', '小明', '小黃', '小黑', '小紅'];
console.log('轉學前', classA);
classA.push('小藍');
console.log('轉學後', classA);

let igPhotos = [
    'https://124.image',
    'https://125.image'
]

console.log('第一筆', igPhotos[1]);

console.log('igPhotos', igPhotos);

//長度 length 判斷陣列長度
console.log(classA.length);

const Card1 = {
    name: 'kkl',
    address: '美國',
    age: '30',
}
console.log(Card1.name); //.=中文的xx的


console.log(Card1)

const post = {
    image: 'https://124.image',
    desc: 'it is a image',
    date: '2021/05/20',
    comment: '我想你了'
}
const post1 = {
    image: 'https://124.image',
    desc: 'it is a image',
    date: '2021/05/20',
    comment: '我想你了'
}

const wall = {
    post,
    post1
}

// console.log('wall', wall)