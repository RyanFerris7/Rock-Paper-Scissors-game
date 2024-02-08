let userChoice;
let computerChoice;
let overallResult;
let roundsPlayed = 0;
const maxRounds = 3;
let playerAction;
let computerAction;
let playerTally = 0;
let computerTally = 0;
let round = 0;

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else if (this.getAttribute("id") === "resetButton") {
                resetGame();
            } else {
                if (roundsPlayed < maxRounds) {
                    let gameType = this.getAttribute("data-type");
                    runGame(gameType);
                    roundsPlayed++;
                    updateProgressBar();
                }

                if (roundsPlayed === maxRounds) {
                    displayOverallWinner();
                }
            }
        });
    }
});

function runGame(gameType) {
    playerAction = gameType;
    computerAction = Math.floor(Math.random() * 5);
    switch (computerAction) {
        case 0: computerAction = "rock";
            break;
        case 1: computerAction = "paper";
            break;
        case 2: computerAction = "scissors";
            break;
        case 3: computerAction = "lizard";
            break;
        case 4: computerAction = "spock";
            break;
    }

    var result = compare(computerAction).toUpperCase();

    document.querySelector(".result").innerHTML = "<h3>User/Computer:</h3><p>User: " + playerAction.toUpperCase() +
        "<br>" + "Computer: " + computerAction.toUpperCase() + "</p>" + "<p>" + result + "</p>";

    return result; // Return the result for updating scores
}

//Countdown Timer Reference 

function countdown() {
  var seconds = 60; // Number of seconds to count down

  var countdownTimer = setInterval(function() {
    seconds--;

    document.getElementById("countdown").innerHTML = seconds + "s";

    if (seconds <= 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "the next paragraph.";
      document.getElementById("bazinga").innerHTML = "BAZINGA!";
    }
  }, 100); // 1000 makes this a 60s
}

function compare(computerAction) {
    if (playerAction === computerAction) {
        return "Snap! It's a draw!";
    } else if (playerAction === "rock") {
        if (computerAction === "paper") {
            return "Bazinga, you lost!";
        } else if (computerAction === "scissors") {
            return "Eureka, you won!";
        } else if (computerAction === "lizard") {
            return "Eureka, you won!";
        } else {
            return "Bazinga, you lost!";
        }
    } else if (playerAction === "paper") {
        if (computerAction === "rock") {
            return "Eureka, you won!";
        } else if (computerAction === "scissors") {
            return "Bazinga, you lost!";
        } else if (computerAction === "lizard") {
            return "Bazinga, you lost!";
        } else {
            return "Eureka, you won!";
        }
    } else if (playerAction === "scissors") {
        if (computerAction === "rock") {
            return "Bazinga, you lost!";
        } else if (computerAction === "paper") {
            return "Eureka, you won!";
        } else if (computerAction === "lizard") {
            return "Eureka, you won!";
        } else {
            return "Bazinga, you lost!";
        }
    } else if (playerAction === "lizard") {
        if (computerAction === "rock") {
            return "Bazinga, you lost!";
        } else if (computerAction === "paper") {
            return "Eureka, you won!";
        } else if (computerAction === "scissors") {
            return "Bazinga, you lost!";
        } else {
            return "Eureka, you won!";
        }
    } else if (playerAction === "spock") {
        if (computerAction === "rock") {
            return "Eureka, you won!";
        } else if (computerAction === "paper") {
            return "Bazinga, you lost!";
        } else if (computerAction === "scissors") {
            return "Eureka, you won!";
        } else {
            return "Bazinga, you lost!";
        }
    }
}

/*function winner() {
    if (computerTally > playerTally) {
        return "Bazinga, the computer won the game!";
    } else if (computerTally === playerTally) {
        return "It's a draw!"
    } else {
        return "Eureka, congrats, you won the game!";
    }
}
*/
function resetGame() {
    roundsPlayed = 0;
    playerTally = 0;
    computerTally = 0;
    round = 0;
    document.querySelector(".result").innerHTML = "";
    document.querySelector(".overall-result").innerHTML = "";
    document.getElementById("playerTally").innerHTML = "0";
    document.getElementById("computerTally").innerHTML = "0";
}

function updateProgressBar() {
    const progressBarFill = document.getElementById("progressBarFill");
    const progress = (roundsPlayed / maxRounds) * 100;
    progressBarFill.style.width = progress + "%";
}

function displayOverallWinner() {
    if (computerTally > playerTally) {
        overallResult = "Bazinga, the computer won the game!";
    } else if (computerTally === playerTally) {
        overallResult = "It's a draw!";
    } else {
        overallResult = "Eureka, congrats, you won the game!";
    }

    document.querySelector(".overall-result").innerHTML = "<h2>Overall Result:</h2><p>" + overallResult + "</p>";
}

function resultsTally(winner) {
    round++;
    if (winner === "player") {
        playerTally++;
        document.getElementById("playerTally").innerHTML = playerTally;
    } else if (winner === "computer") {
        computerTally++;
        document.getElementById("computerTally").innerHTML = computerTally;
    }
}
