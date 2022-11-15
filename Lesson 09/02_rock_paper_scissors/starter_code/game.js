



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    let computerChoiceNumber = Math.ceil( Math.random()*3 ) ;
    if(computerChoiceNumber == 1){
        return "scissors";
    }else if(computerChoiceNumber == 2){
        return "paper";
    }else{
        return "rock";
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

};




document.querySelector("#scissors").addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    compare("scissors",computerPlayerChoice);
});