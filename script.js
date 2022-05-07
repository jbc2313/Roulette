console.log('helloworld');
console.log('welcome to roulette, please enjoy!');

//need to test with odd and even on as well

let color = '';
let number = '';
let player = {
    name: '',
    money: 250,
};
player.name = prompt('please enter your name');



//outputs where the ball lands and if the player won any bets
let balllogOut = document.getElementById('ballLog')
// console.log(balllogOut);
let gamelogOut = document.getElementById('gameLogger');
// console.log(gamelogOut);
let spinButton = document.getElementById('spinBtn');
// console.log(spinButton);
let wheelElement = document.getElementById('whl');
// console.log(wheelElement);
let resetButton = document.getElementById('resetBtn');
// console.log(resetButton);
let cancelButton = document.getElementById('cancelbetBtn');
// console.log(cancelButton);
let playerInfoText = document.getElementById('playerInfo');
// console.log(playerInfoText)
let rouletteAudio = document.getElementById('sound');


playerInfoText.innerHTML = player.name + ': $' + player.money;



let blackBet = document.getElementById('blackBet');
let blackOn = false;
let blackAmt = 0;
let redBet = document.getElementById('redBet');
let redOn = false;
let redAmt = 0;
let greenBet = document.getElementById('greenBet');
let greenOn = false;
let greenAmt = 0;
let oddBet = document.getElementById('oddBet');
let oddOn = false;
let oddAmt = 0;
let evenBet = document.getElementById('evenBet');
let evenOn = false;
let evenAmt = 0;
let onetwelveBet = document.getElementById('onetwelveBet');
let onetwelveOn = false;
let onetwelveAmt = 0;
let twotwelveBet = document.getElementById('onethreetwofourBet');
let twotwelveOn = false;
let twotwelveAmt = 0;
let threetwelveBet = document.getElementById('twofivethreesixBet');
let threetwelveOn = false;
let threetwelveAmt = 0;


//creates the arrays for the numbers and the colors
let numbersArray = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

let colorsArray = [];
for(let i = 0; i < numbersArray.length; i++){
    if(i === 0){
        colorsArray[i] = 'Green';
    }else if(i % 2 != 0){
        colorsArray[i] = 'Red';
    }else{
        colorsArray[i] = 'Black';
    };
};

//updates player money on screen
function updateM(){
    playerInfoText.innerHTML = player.name + ':  $' + player.money;
}
//resets the game
function reset(){
    player.name = prompt('Please enter your name.');
    player.money = 250;
    cancelBets();
    resetBets();
    updateM();
};

//returns money to players wallet ie.. if they cancel bets
function returnBets(){
    player.money += blackAmt;
    player.money += redAmt;
    player.money += greenAmt;
    player.money += oddAmt;
    player.money += evenAmt;
    player.money += onetwelveAmt;
    player.money += twotwelveAmt;
    player.money += threetwelveAmt;
};

//cancels all active bets
function cancelBets(){
    blackOn = false;
    blackBet.classList.remove('disabled');
    redOn = false;
    redBet.classList.remove('disabled');
    greenOn = false;
    greenBet.classList.remove('disabled');
    oddOn = false;
    oddBet.classList.remove('disabled');
    evenOn = false;
    evenBet.classList.remove('disabled');
    onetwelveOn = false;
    onetwelveBet.classList.remove('disabled');
    twotwelveOn = false;
    twotwelveBet.classList.remove('disabled');
    threetwelveOn = false;
    threetwelveBet.classList.remove('disabled');
};

//resets amount of money on each bet
function resetBets(){
    blackAmt = 0;
    redAmt = 0;
    greenAmt = 0;
    oddAmt = 0;
    evenAmt = 0;
    onetwelveAmt = 0;
    twotwelveAmt = 0;
    threetwelveAmt = 0;
}

//collects for the "house" and resets bets 
function houseCollect(){
    resetBets();
    cancelBets();
    updateM();
}

// randomly selects the number the ball lands on 
function playGame(){
    let randomNum = Math.floor(Math.random() * 37);
    color = colorsArray[randomNum].toString();
    number = numbersArray[randomNum].toString();
};
//gets the amount the player wants on a specific bet
function betAmt(){
    if(player.money <= 0){
        alert('You dont have any money to bet..');
        return;
    }
    let x = parseInt(prompt('How much are you going to bet?'));
    
    player.money -= x;
    updateM();
    return x;
};

//pays the player if they hit on their bets
function getWinings(num1, num2, string, x){
    let y = num1 * num2;
    let z = y + num1;
    if(string === 'black'){
        gamelogOut.innerHTML = `You Bet on Black and Won $${z}!`;
    }
    else if(string ==='red'){
        gamelogOut.innerHTML = `You Bet on Red and Won $${z}!`;
    }else if(string ==='green'){
        gamelogOut.innerHTML = `You Bet on Green and Won $${z}!`;
    }else if(string ==='odd'){
        if(x>1){
            gamelogOut.append(` Your bet on Odd Won $${z}`);
        }else{
            gamelogOut.innerHTML = `You Bet on Odd and Won $${z}!`;
        };
    }else if(string ==='even'){
        if(x>1){
            gamelogOut.append(` Your bet on Even Won $${z}`);
        }else{
            gamelogOut.innerHTML = `You Bet on Even and Won $${z}!`;
        };
    }else if(string ==='onetwelve'){
        if(x>1){
            gamelogOut.append(` Your bet on 1-12 Won $${z}!`);
        }else{
            gamelogOut.innerHTML = `You Bet on 1-12 and Won $${z}!`;
        };
    }else if(string ==='twotwelve'){
        if(x>1){
            gamelogOut.append(` Your bet on 13-24 Won $${z}!`);
        }else{
            gamelogOut.innerHTML = `You Bet on 13-24 and Won $${z}!`;
        };
    }else if(string ==='threetwelve'){
        if(x>1){
            gamelogOut.append(` Your bet on 25-36 Won $${z}!`);
        }else{
            gamelogOut.innerHTML = `You Bet on 25-36 and Won $${z}!`;
        };
    };
    
    return z
};


function dealBets(){
    let x = 0;
    if(blackOn && color === 'Black'){
        x++
        player.money += getWinings(blackAmt, 1, 'black', x);
    };
    if(redOn && color === 'Red'){
        x++
        player.money += getWinings(redAmt, 1, 'red', x);
    };
    if(greenOn && color === 'Green'){
        x++
        player.money += getWinings(greenAmt, 35, 'green', x);
    };
    if(oddOn && number % 2 != 0){
        x++
        player.money += getWinings(oddAmt, 1, 'odd', x);
    };
    if(evenOn && number % 2 == 0){
        x++
        player.money += getWinings(evenAmt, 1, 'even', x);
    };
    if(onetwelveOn && number >= 1){
        
        if(number <= 12){
            x++
            player.money += getWinings(onetwelveAmt, 2, 'onetwelve', x);
        };
    };
    if(twotwelveOn && number >= 13){
        if(number <= 24){
            x++
            player.money += getWinings(twotwelveAmt, 2, 'twotwelve', x);
        };
    };
    if(threetwelveOn && number >= 25){
        if(number <= 36){
            x++
            player.money += getWinings(threetwelveAmt, 2, 'threetwelve', x);
        };
    };
   
};

//adds event listener for cancel all bets button
cancelButton.addEventListener('click', () => {
    returnBets();
    cancelBets();
    resetBets();
    updateM();
});

//adds event listener for the Reset button
resetButton.addEventListener('click', reset);

//adds event listeners for the bet buttons
blackBet.addEventListener('click', () => {
    blackAmt = betAmt();
    if(blackOn === false){
        blackOn = true;
        blackBet.classList.add('disabled');
    };
})

redBet.addEventListener('click', () => {
    redAmt = betAmt();
    if(redOn === false){
        redOn = true;
        redBet.classList.add('disabled');
    };
})

greenBet.addEventListener('click', () => {
    greenAmt = betAmt();
    if(greenOn === false){
        greenOn = true;
        greenBet.classList.add('disabled');
    };
})

oddBet.addEventListener('click', () => {
    oddAmt = betAmt();
    if(oddOn === false){
        oddOn = true;
        oddBet.classList.add('disabled');
    };
})

evenBet.addEventListener('click', () => {
    evenAmt = betAmt();
    if(evenOn === false){
        evenOn = true;
        evenBet.classList.add('disabled');
    };
})

onetwelveBet.addEventListener('click', () => {
    onetwelveAmt = betAmt();
    if(onetwelveOn === false){
        onetwelveOn = true;
        onetwelveBet.classList.add('disabled');
    };
})

twotwelveBet.addEventListener('click', () => {
    twotwelveAmt = betAmt();
    if(twotwelveOn === false){
        twotwelveOn = true;
        twotwelveBet.classList.add('disabled');
    };
})

threetwelveBet.addEventListener('click', () => {
    threetwelveAmt = betAmt();
    if(threetwelveOn === false){
        threetwelveOn = true;
        threetwelveBet.classList.add('disabled');
    };
})

//animates the roulette wheel and pays out bets
spinButton.addEventListener('click', () => {
    rouletteAudio.play();
    wheelElement.classList.add('animate');
    spinButton.classList.add('disabled');
    playGame();
});
wheelElement.addEventListener('animationend', () => {
    wheelElement.classList.remove('animate');
    spinButton.classList.remove('disabled');
    balllogOut.innerHTML = (color + ' ' + number);
    dealBets();
    houseCollect();
    
});

