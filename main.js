let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function play(playerChoice) {

    if (playerScore >= maxScore || computerScore >= maxScore) {
        document.getElementById("result").textContent = "Game Over! Please Refresh to play again.";
        return;
        
    }
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").textContent = "Your Choice: " + playerChoice;
    document.getElementById("computerChoice").textContent = "Computer Choice: " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!🤝";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Won!🎉";
        playerScore++;
    }  else {
        result = "You Lose, Computer won!💻"
        computerScore++;
    }

    document.getElementById("result").textContent = "Result: " + result;
    document.getElementById("score").textContent = "Player: " + playerScore + " | Computer: " + computerScore;
}

// function HumanChoice() {
//     let choices = Math.floor(Math.random()*3);
//     let humanChoices = choices === 0 ? "ROCK" : choices === 1 ? "PAPER": "SCISSORS";
//     return humanChoices;
// }
    
// function getComputerChoice(){
//     let random = Math.floor(Math.random()*10);
//     let ComputerChoice = random>6 ? "ROCK": random>3 ? "PAPER": "SCISSORS";
//     return ComputerChoice;
//  }



 
//  function playRound(){
//      let computerChoice = getComputerChoice()
//      let humanChoice = getHumanChoice()
//      if(computerChoice == humanChoice){
//         console.log("IT'S A TIE!");
//     }
//      switch(humanChoice) {
//          case "ROCK":
//              if(computerChoice == "SCISSORS"){
//                  HumanScore++
//                  console.log("You win")
//              }else {
//                  ComputerScore++ 
//                  console.log("You loose")
//              }
//              break;
//          case "SCISSORS":
//              if(computerChoice == "PAPER"){
//                  HumanScore++
//                  console.log("You win")
//              }else{
//                  ComputerScore++ 
//                  console.log("You lose")
//              }
//              break;
//          case "PAPER":
//              if(computerChoice == "ROCK"){
//                  HumanScore++
//                  console.log("You win")
//              }else{
//                  ComputerScore++ 
//                  console.log("You lose")
//              }
//              break;
//      }
//  }
 
//  let HumanScore = 0;
//  let ComputerScore = 0;
//  function playGame() {
//     for(let i = 1; i <= 5; i++) {
//         playRound(); 
//         console.log("Your Score: " + HumanScore);
//         console.log("Computer Score: " + ComputerScore);
//     }

    
//     if (HumanScore > ComputerScore) {
//         console.log("🎉 YOU WON THE GAME!");
//     } else if (ComputerScore > HumanScore) {
//         console.log("💻 COMPUTER WON THE GAME!");
//     } else {
//         console.log("🤝 THE GAME IS A TIE!");
//     }
// }

 
//  playGame();