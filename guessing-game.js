const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



 let askLimit = () => {

    rl.question("Enter the limit: ", (limit) => {
        limit = Math.floor(Number(limit));
        numAttempts = limit;
        console.log("limit = " + limit);

        askRange();

    });
}


let secretNumber;
let numAttempts = 0;
askLimit();


let checkGuess = (n) => {
let num = Math.floor(n);
 if(num === secretNumber) {
    console.log("You Win!");
    return true;
 } else if(num > secretNumber) {
    console.log("Too high.");
    return false;
 } else if (num < secretNumber) {
    console.log("Too low.");
    return false;
//  } else if( num !== Number) {
//     return "Invalid input!";
//  }
}
}

function askGuess() {
rl.question('Enter a guess: ', (answer) =>{

    console.log(checkGuess(Number(answer)));
    if(numAttempts === 0) {
        console.log("You Lose!");
        numAttempts += askLimit();
        askRange();

    }
    if(Number(answer) !== secretNumber) {
        numAttempts--;
        askGuess()

    // } else {
    // rl.close();
     }
});
}

let randomInRange = (min, max) => {
    let secretNumber = Math.floor(Math.random() * (max - min) + min);

    return secretNumber;
}


let askRange = () => {
    rl.question("Enter the max: ", (max) =>{
        console.log("max = " + max);
        rl.question("Enter the min: ", (min) => {
            console.log("min = " + min);

            console.log("I am thinking of a number between " + min + " and " + max);
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();

        });
    });
}

askRange();
