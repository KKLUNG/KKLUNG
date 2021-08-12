//for 迴圈
//i++ = i+1
//i+=2 = i+2
// let i;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// 測試
//這邊a最後會=13
// let a = 10;
// a += 3;
// console.log(a);

// let classA = [100, 70, 50];
// for (let i = 0; i < 3; i++) {
//     console.log(classA[i]);
// }

//費事數列
// let classB;
// for (let j = 0; j <= 10; j++) {
//     if (j === 0) {
//         classB[j] = 0;
//     } else if (j === 1) {
//         classB[j] = 0;
//     } else if (j === 2) {
//         classB[j] = 1;
//     } else {
//         classB[j] = classB[j] + classB[j - 1];
//     }
// }
// for (let j = 0; j < 10; j++) {
//     console.log(classB[j]);
// }

//push 長度測試
// let classB = [50, 70, 90];
// classB.push(30);
// for (let i = 0; i < classB.length; i++) {
//     if (i === 2) {
//         classB[i] = "修正"
//     }
// }
// for (i = 0; i < classB.length; i++) {
//     console.log(classB[i]);
// }

const a1 = {
    name: 'OTH',
    desc: '很強'
}
console.log(a1.name);
console.log(a1.desc);

const posts = [{
        name: 'OTH',
        desc: '很強'
    },
    {
        name: 'kkl',
        desc: '修行中'
    }
]

for (let i = 0; i < posts.length; i++) {
    if (i === 0) {
        let post = posts[i]
        console.log(post);
    }
}

//while迴圈
let condiction = true
while (condiction) {

}