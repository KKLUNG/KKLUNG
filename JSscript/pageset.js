alert("hello world");
// alertGame(); 小遊戲 視窗回傳 受到傷害...87%
// alertGame2();小遊戲 回傳 建構式練習...87%

// // 提示語
// // prompt("請輸入數值", 123);
// //外部程式碼不能使用內部變數]\
// //內部程式碼可以使用外部變數
// //function內之變數不能用於外部
// //function


// // function add(n1, n2) {
// //     alert(n1 + n2);
// //     return n1 + n2;
// // }
// // 等同於下方
// // var add = function(n1, n2) {
// //     alert(n1 + n2);
// //     return n1 + n2;
// // }

// // var result = add(3, 4) * add(10, 20);
// // alert(result);

// var obj = new Object();
// obj.x = 3;
// obj.y = 4;
// obj.getPosition = function() {
//     alert(obj.x + "" + obj.y);
// }
// alert(obj.x);
// obj.getPosition();

//小遊戲製作
// var player = new Object();
// player.name = "kkl";
// player.hp = 100;
// player.fight = function() {
//     this.hp = this.hp - 2;
// };

// player.rest = function() {
//     this.hp++;
// }

// player.report = function() {
//     alert(this.name + this.hp);
// }

// player.fight();
// player.rest();
// player.report();




function alertGame1() {
    function getRandom(x) {
        return Math.floor(Math.random() * x);
    };

    var player = new Object();
    player.name = "kkl";
    player.hp = 100;
    player.fight = function() {
        var random = getRandom(9);
        this.hp = this.hp - random;
        alert("您受到了" + random + "點傷害");
    };

    player.rest = function() {
        if (this.hp < 100) {
            this.hp++;
        }
        alert("生命已達上限");
    }

    player.report = function() {
        alert(this.name + "\n" + this.hp);
    }
    while (player.hp != 0) {
        var a = prompt("1.戰鬥 2.休息 3.離開此遊戲", "");
        a = Number(a);
        if (a === 1) {
            player.fight();
        } else if (a === 2) {
            player.rest();
        } else if (a === 3) {
            break;
        }
        player.report();
    }
}

//建構式
function alertGame2() {
    function Player(name, hp) {
        this.name = name;
        this.hp = hp;
        this.fight = function() {
            this.hp -= 2;
        };
        this.rest = function() {
            this.hp++;
        };
        this.report = function() {
            alert(this.name + "\n" + this.hp);
        };
    }

    var player = new Player("kkl", 100);
    player.fight();
    player.rest();
    player.report();
    // 延伸學習
    // 物件小遊戲 碰碰小運氣
    var player2 = new Player("oth", 100);
    player2.report();
}