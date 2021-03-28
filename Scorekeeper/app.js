let P1ScoreDisplay = document.querySelector(".player-1");
let P2ScoreDisplay = document.querySelector(".player-2");
let play1IncBtn = document.querySelector(".player-1-btn");
let play2IncBtn = document.querySelector(".player-2-btn");
let resetBtn = document.querySelector(".reset-btn");
var scoreLimit = 1;
let combobox = document.querySelector("select");
var P1Score = parseInt(P1ScoreDisplay.textContent);
let P2Score = parseInt(P1ScoreDisplay.textContent);

function numberGenerate(){
    for(let i=1; i<=21; i++){
        combobox.innerHTML += `<option value=${i}> ${i} </option>`
    }
}

play1IncBtn.addEventListener("click", function () {
    P1Score += 1;
    P1ScoreDisplay.textContent = P1Score;
    if(P1Score==scoreLimit){
        play1IncBtn.disabled = true;
        play2IncBtn.disabled = true;
        P1ScoreDisplay.classList.add("winner");
        P2ScoreDisplay.classList.add("loser");
    }
});

play2IncBtn.addEventListener("click", function(){
    P2Score+=1;
    P2ScoreDisplay.textContent = P2Score;
    if(P2Score==scoreLimit){
        play2IncBtn.disabled = true;
        play1IncBtn.disabled = true;
        P1ScoreDisplay.classList.add("loser");
        P2ScoreDisplay.classList.add("winner");
    }
});

resetBtn.addEventListener("click", function(){
    P1Score = P2Score = 0;
    P1ScoreDisplay.textContent = P1Score;
    P2ScoreDisplay.textContent = P2Score;
    P1ScoreDisplay.classList.remove("winner");
    P1ScoreDisplay.classList.remove("loser");
    P2ScoreDisplay.classList.remove("winner");
    P2ScoreDisplay.classList.remove("loser");
    play1IncBtn.disabled = false;
    play2IncBtn.disabled = false;
});

function scoreLim(){
    scoreLimit = combobox.value;
    console.log(scoreLimit);
}