//if else教學


// let count1 = 100;
// let count2 = 300;

// if (count1 > count2) {
//     console.log('正確');
// } else {
//     console.log('錯誤');
// }


// &&兩邊都正確 結果為true
//這邊輸出false

// let condition = true && false;

// console.log('condition', condition);

// // || or 其中一邊對 就會都正確
// //這邊輸出true

// let conditionOr = true || false;
// console.log('conditionOr', conditionOr);

// // ! 把結果反向
// //這邊輸出true

// let conditioNon = !(true && false);
// console.log('conditionNon', conditioNon);

// //這邊輸出false
// let conditioNon1 = !(true || false);
// console.log('conditionNon1', conditioNon1);

///三個等於=== 會去判斷兩邊是否相等。

//ifelse用法
// let score = 1000;
// let score1 = 100000;
// let condition2 = score !== score1;
// console.log('condition', condition2);
// if (score > score1) {
//     console.log('甲高');
// } else if (score === score1) {
//     console.log('一樣高');
// } else {
//     console.log('乙高');
// }

//switch case 範例

let key = 50;
switch (key) {
    case 100:
        console.log('考了一百分');
        break;

    case 300:
        console.log('考了三百分');
        break;

    case 500:
        console.log('考了五百分');
        break;

    default:
        console.log('不想考試~');
        break;
}


//費氏數列練習
// 遞迴解
// let i = 4;

// function factorial(i) {
//     if (i == 0) {
//         return 1;
//     } else {
//         return i + factorial(i - 1);
//     }
// }
// alert(factorial(i));