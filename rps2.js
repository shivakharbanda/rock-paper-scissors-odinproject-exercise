const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector("#scissors");

function getName(e) {

    let endResult = "Dunno"
    let playerChoice = e.target.id.toString();
    playerChoice = playerChoice.toUpperCase();
    let computerChoice = getComputerChoice()
    console.log(playerChoice, computerChoice)
    let roundOutcome = playRound(playerChoice, computerChoice);

    if (roundOutcome === "LOOSE") {
        AIscore = document.querySelector("#AI");

        scoreAi = Number(AIscore.textContent);
        scoreAi += 1;
        AIscore.textContent = scoreAi.toString()
        
    } else if (roundOutcome === "WIN") {
        HUMANscore = document.querySelector("#human");

        scoreHuman = Number(HUMANscore.textContent);
        scoreHuman += 1;
        HUMANscore.textContent = scoreHuman.toString()
    }


    checkGame();
};

rock.addEventListener('click', getName);
paper.addEventListener('click', getName);
scissors.addEventListener('click', getName);



function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    } else if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            return "LOOSE"
            return `YOU LOOSE! ${computerChoice} beats ${playerChoice}`;
        } else if (computerChoice === "SCISSORS") {
            return "WIN"
            return `YOU WIN! ${playerChoice} beats ${computerChoice}`;
        };
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "SCISSORS") {
            return "LOOSE"
            return `YOU LOOSE! ${computerChoice} beats ${playerChoice}`;
        } else if (computerChoice === "ROCK") {
            return "WIN"
            return `YOU WIN! ${playerChoice} beats ${computerChoice}`;
        };
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            return "LOOSE"
            return `YOU LOOSE! ${computerChoice} beats ${playerChoice}`;
        } else if (computerChoice === "PAPER") {
            return "WIN"
            return `YOU WIN! ${playerChoice} beats ${computerChoice}`;
        };
    };
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 10);
    if (num <= 3) {
        return "ROCK";
    } else if (num > 3 && num <= 6){
        return "PAPER";
    } else {
        return "SCISSORS";
    };
};


function checkGame() {
    roundNum = document.querySelector("#round");
    let roudn = roundNum.textContent;
    roudn = Number(roudn)
    if (Number(roudn) < 5) {
        roudn += 1;
        roundNum.textContent = roudn.toString();
    } else if (Number(roudn) == 5) {
        
        AIscore = document.querySelector("#AI");
        HUMANscore = document.querySelector("#human");

        if (Number(AIscore.textContent)> Number(HUMANscore.textContent)) {
            alert(`You Lost. Game Over`)
        } else if (Number(AIscore.textContent)== Number(HUMANscore.textContent)) {
            alert(`Game Tied`)
        } else if (Number(AIscore.textContent)< Number(HUMANscore.textContent)) {
            alert("CONGRATULATIONS!!!!!!!!! YOU WON!!!!!")
        };

        AIscore.textContent = 0;
        HUMANscore.textContent = 0;
        roundNum.textContent = 1;

    }
};

function gameResult(scoreComputer, scorePlayer) {
    if (scoreComputer > scorePlayer) {
        return "YOU LOOSE" + " " + scorePlayer + ":" + scoreComputer
    } else if (scoreComputer < scorePlayer) {
        return "YOU WOn" + " " + scorePlayer + ":" + scoreComputer
    }
}