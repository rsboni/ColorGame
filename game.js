var square = document.querySelectorAll(".square");
var reset = document.querySelector(".newColors");
var rightSquareNum = 0;
var colorPicked = document.querySelector(".colorPicked");
var statusBar = document.querySelector(".status");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var numberOfSquares = 6;
var gameTitle = document.querySelector(".gameTitle")


function newColor(){
    return "rgb(" + Math.floor(Math.random() * (256)) + ", " + Math.floor(Math.random() * (256)) + ", " + Math.floor(Math.random() * (256)) + ")";
}

function generateNewSquares(){
    for (var i = 0; i < numberOfSquares; i++){
        square[i].style.backgroundColor = newColor();
    }
    rightSquareNum = (Math.floor(Math.random()*numberOfSquares));
    colorPicked.textContent = square[rightSquareNum].style.backgroundColor;
    statusBar.textContent = "Pick a Color!"
    gameTitle.style.backgroundColor = "#007bff"
};

generateNewSquares();

function gameover(){
    for (var i = 0; i < numberOfSquares; i++){
        square[i].style.backgroundColor = colorPicked.textContent;
        square[i].classList.remove("d-none");
        gameTitle.style.backgroundColor = colorPicked.textContent;
        reset.textContent = "Play again?";
    }
};

reset.addEventListener("click", function(){
    generateNewSquares();
    this.textContent = "NEW COLORS";
});

easy.addEventListener("click", function(){
    numberOfSquares = 3;
    for (var i = 3; i < 6; i++){
        square[i].classList.add("d-none")

    }
    this.classList.add("active");
    hard.classList.remove("active");
    generateNewSquares();

});

hard.addEventListener("click", function(){
    numberOfSquares = 6;
    for (var i = 3; i < 6; i++){
        square[i].classList.remove("d-none")

    }
    easy.classList.remove("active");
    this.classList.add("active");
    generateNewSquares();

});

for (var i = 0; i < numberOfSquares; i++){
    square[i].addEventListener("click", function(){
        if (this == square[rightSquareNum]){
            statusBar.textContent = "RIGHT!";
            gameover();
        }
        else {
            statusBar.textContent = "WRONG!";
            this.style.backgroundColor = "black";
        }
    });
}