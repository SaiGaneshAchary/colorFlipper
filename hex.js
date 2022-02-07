let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let text = document.getElementById("color");
let btn = document.getElementById("click");

btn.addEventListener("click", function () {
    let random = "#";
    for (let i = 0; i < 6; i++) {
        random += colors[hex()];
    }
    let color = random;
    document.body.style.backgroundColor = color;
    text.style.color = color;
    text.innerHTML = color;
})
function hex() {
    return Math.floor(Math.random() * colors.length);
}