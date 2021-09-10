function change(number) {
    let setJscript1 = document.getElementById("link1");
    let setJscript2 = document.getElementById("link2");
    let setJscript3 = document.getElementById("link3");
    let setJscript4 = document.getElementById("link4");
    if (number === 1) {
        setJscript1.style.display = "block";
        setJscript2.style.display = "none";
        setJscript3.style.display = "none";
        setJscript4.style.display = "none";
    } else if (number === 2) {
        setJscript1.style.display = "none";
        setJscript2.style.display = "block";
        setJscript3.style.display = "none";
        setJscript4.style.display = "none";
    } else if (number === 3) {
        setJscript1.style.display = "none";
        setJscript2.style.display = "none";
        setJscript3.style.display = "block";
        setJscript4.style.display = "none";
    } else if (number === 4) {
        setJscript1.style.display = "none";
        setJscript2.style.display = "none";
        setJscript3.style.display = "none";
        setJscript4.style.display = "block";
    }
}