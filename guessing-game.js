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


const checkGuess = num => {
    if( num === secretNumber ) {
        console.log('Correct');
        return true;
    }
    if(num < secretNumber) console.log('Too Low');
    if(num > secretNumber) console.log('Too high);
                                       return false;
}

function askGuess() {
rl.question('Enter a guess: ', (answer) =>{

  let win = checkGuess( Number(answer));
    if(win) {
        console.log('You Win!');
        rl.close(); 
    } else {
        askGuess()
    }
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
