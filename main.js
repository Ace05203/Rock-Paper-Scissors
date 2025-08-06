function getComputerChoice(){
    let random = Math.floor(Math.random()*10);
    let ComputerChoice = random>6 ? "ROCK": random>3 ? "PAPER": "SCISSORS";
    console.log("computer: "+ComputerChoice)
    return ComputerChoice
 }
 
 
 function getHumanChoice(){
     let input = prompt("Enter Rock, Paper or Scissors").toUpperCase();
     console.log("You: " + input)
     return input
 }
 
 
 function playRound(){
     let computerChoice = getComputerChoice()
     let humanChoice = getHumanChoice()
     if(computerChoice == humanChoice){
        console.log("IT'S A TIE!");
    }
     switch(humanChoice) {
         case "ROCK":
             if(computerChoice == "SCISSORS"){
                 HumanScore++
                 console.log("You win")
             }else {
                 ComputerScore++ 
                 console.log("You loose")
             }
             break;
         case "SCISSORS":
             if(computerChoice == "PAPER"){
                 HumanScore++
                 console.log("You win")
             }else{
                 ComputerScore++ 
                 console.log("You lose")
             }
             break;
         case "PAPER":
             if(computerChoice == "ROCK"){
                 HumanScore++
                 console.log("You win")
             }else{
                 ComputerScore++ 
                 console.log("You lose")
             }
             break;
     }
 }
 
 let HumanScore = 0;
 let ComputerScore = 0;
 function playGame() {
    for(let i = 1; i <= 5; i++) {
        playRound();
        console.log("Your Score: " + HumanScore);
        console.log("Computer Score: " + ComputerScore);
    }

    
    if (HumanScore > ComputerScore) {
        console.log("🎉 YOU WON THE GAME!");
    } else if (ComputerScore > HumanScore) {
        console.log("💻 COMPUTER WON THE GAME!");
    } else {
        console.log("🤝 THE GAME IS A TIE!");
    }
}

 
 playGame()