var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#resetbtn");
var modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        for (let modebtn of modeButtons) {
            modebtn.classList.remove("selected");
        }
        modeButtons[i].classList.add("selected");
        if (this.textContent == "Easy") {
            numSquares = 3;
        } else if (this.textContent == "Medium") {
            numSquares = 6;
        } else if (this.textContent == "Hard") {
            numSquares = 9;
        }
        reset();
    });
}

function reset() {
    colors = generateColors(numSquares);
    pickedcolor = pickcolor();
    colorDisplay.textContent = pickedcolor;
    resetbtn.textContent = "NEW COLORS";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    messageDisplay.textContent = " ";
    h1.style.backgroundColor = "#6a040f";
}

resetbtn.addEventListener("click", function () {
    reset();
});

colorDisplay.textContent = pickedcolor;


for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        let clickedcolor = this.style.backgroundColor;
        if (clickedcolor == pickedcolor) {
            messageDisplay.textContent = "YAYY!! YOU WON";
            changeColors(pickedcolor);
            h1.style.backgroundColor = clickedcolor;
            resetbtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#03071e";
            messageDisplay.textContent = "Try Again!!";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(n) {
    let colors = [];
    for (let i = 0; i < n; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function pickcolor() {
    return colors[Math.floor(Math.random() * colors.length)];
}