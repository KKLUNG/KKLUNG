//window.alert("")
// document

window.addEventListener('load', function(params) {
    const p1 = document.getElementById('title');
    console.log(p1);
    p1.innerText = "訂閱我"

    const b1 = document.getElementById('button');
    b1.addEventListener('click', function() {
        console.log('點下去');
    });

    const box1 = document.getElementById('box');
    box1.innerHTML = '<p>text</p>'

    const in1 = document.getElementById('text')
    in1.addEventListener('keyup', function(e) {
        console.log('input')
        console.log('e.target.value', e.target.value)
    })
})



function change() {
    //innerHTML:修改內文
    //
    var countOne = document.getElementById("count1")
    countOne.innerHTML = "壞";
    countOne.style.fontWeight = "bold";
    countOne.style.display = "none";
}