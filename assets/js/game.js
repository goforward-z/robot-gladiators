// this creates a function named"fight"
var playerName=window.prompt("what is your robot's name?");


var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

// you can also log multiple values at once like this
console.log(playerName,playerAttack,playerHealth);

var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;

// fight function
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");


//Ask player if they like'd fight or run
var promptFight=window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or'SKIP' to choose.");


// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var comfirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes(true),leave fight
    if(comfirmSkip){
        window.alert(playerName + "has decied to skip this fight. Goodbye!");
        //subtract money from playMoney for skipping
        playerMoney = playerMoney - 2
    }
    // if no (false),ask question again by running fight()again
    else{
        fight();
    }
 
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

//run function
fight();