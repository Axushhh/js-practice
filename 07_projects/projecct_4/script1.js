
const randomNumber = parseInt(Math.random()*100 + 1); 
// this will give us random number

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#guesses')
const remaining = document.querySelector('#lastResult')
const lowOrHi = document.querySelector('#lowOrHi')
const startOver = document.querySelector('#resultParas')

document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); // this hold value so they won't go anywhere
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    // to check wether the value is between 1 to 100 and it should be number only
    if(isNaN(guess)){  // isNaN is used to check it is number or not
        alert('please enter a valid number')
    }
    else if (guess < 1 ){
        alert('please enter a number more than 1')
    }
    else if (guess > 100){
        alert('please enter a number smaller than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            cleanUpGuess(guess)
            displayMessage(`Game is over random number was ${randomNumber}`)
            endGame()
        }
        else {
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    // check  guess is used to check and print wether value or guess is corret or not
    // will check wether the guess value is same then by displayMessage it will tell you won
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMessage(`Number is too Low `)

    }
    else if (guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}

function cleanUpGuess(guess){
    // it will clean the values and will update guess array
    userInput.value = '' // cleanup method to clear the value
    guessSlot.innerHTML += `<span>${guess}  </span>`;
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage (message){
    // this will used to manipulate dom and will used to clear guess and push this guess in array
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
    //
    userInput.value = '' // cleaning the value  
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function startGame (){
    const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true;
});
}