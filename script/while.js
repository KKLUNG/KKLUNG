//for 迴圈
// let i;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

//費氏數列練習

let i = 4;

function factorial(i) {
    if (i == 0) {
        return 1;
    } else {
        return i + factorial(i - 1);
    }
}

//while迴圈