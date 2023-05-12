function getComputerChoice(){
    var num = Math.floor(Math.random()*3);
    if(num === 0){
        return "rock";
    }else if (num ===1){
        return "paper";
    }else if (num === 2){
        return "scissor";
    }
    console.log(getComputerChoice());
}

function playRound(playerSelection,computerSelection){
    let result;
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "paper"){
            return result = "lost";
        }else if(computerSelection === "scissor"){
            return result = "win";
        }else{
            return result = "tie";
        }
    }else if(playerSelection.toLowerCase()==="paper"){
        switch (computerSelection){
            case "rock":
                return result = "win";
            case "scissor":
                return result = "lose";
            case "paper":
                return result = "tie";
        }
    }else if(playerSelection.toLowerCase()==="scissor"){
        switch(computerSelection){
            case "rock":
                return result = "lose";
            case "paper":
                return result = "win";
            case "scissor":
                return result = "tie";
        }
    }

}

function fiveRounds(){
    const results =[];
    let choice;
    for (let i=0;i<5;i++){
        choice = prompt("enter your choice: ");
        const item = playRound(choice,computerSelection);
        results[i]=item;
    }
    console.log(results);
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));