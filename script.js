console.log('helloworld');
console.log('welcome to roulette, please enjoy!');

let ball = '';
let color = '';
let number = '';
let player = {
    name: '',
    money: 250,
};
player.name = prompt('please enter your name');


let balllogOut = document.getElementById('ballLog')
let gamelogOut = document.getElementById('gameLogger');



let spinButton = document.getElementById('spinBtn');
// console.log(spinButton);

let wheelElement = document.getElementById('whl');
// console.log(wheelElement);

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

// randomly selects the number the ball lands on 
function playGame(){
    let randomNum = Math.floor(Math.random() * 37);
    color = colorsArray[randomNum].toString();
    number = numbersArray[randomNum].toString();

};
//gets the amount the player wants on a specific bet
function betAmt(){
    let x = parseInt(prompt('How much are you going to bet?'));
    
    player.money -= x;
    return x;
};

//pays the player if they hit on their bets
function getWinings(num1, num2){
    let y = num1 * num2;
    let x = y + num1;
    console.log(`you just won ${x} dollars`);
    gamelogOut.innerHTML = `You just hit on ${color} and won ${x} dollars!`
    return x
};

function dealBets(){
    if(blackOn && color === 'Black'){
        gamelogOut.innerHTML = 'You just hit on Black!';
        console.log('you hit on black!')
        player.money += getWinings(blackAmt, 1);
    };
    if(redOn && color === 'Red'){
        gamelogOut.innerHTML = 'You just hit on Red!';
        console.log('you hit on red!')
        player.money += getWinings(redAmt, 1);
    };
    if(greenOn && color === 'Green'){
        console.log('you just hit on green/0! WOW!!')
        player.money += getWinings(greenAmt, 35);
    };
    if(oddOn && number % 2 != 0){
        console.log('you just hit on odd!')
        player.money += getWinings(oddAmt, 1);
    };
    if(evenOn && number % 2 == 0){
        console.log('you just hit on even!')
        player.money += getWinings(evenAmt, 1);
    };
    if(onetwelveOn && number >= 1){
        if(number <= 12){
            console.log('you just hit on 1-12!')
            player.money += getWinings(onetwelveAmt, 2);
        };
    };
    if(twotwelveOn && number >= 13){
        if(number <= 24){
            console.log('you just hit on 13-24!')
            player.money += getWinings(twotwelveAmt, 2);
        };
    };
    if(threetwelveOn && number >= 25){
        if(number <= 36){
            console.log('you just hit on 25-36!')
            player.money += getWinings(threetwelveAmt, 2);
        };
    };
}


//adds event listeners for the bet buttons
blackBet.addEventListener('click', () => {
    blackAmt = betAmt();
    console.log(`You just bet ${blackAmt} on Black!`)
    if(blackOn === false){
        blackOn = true;
    };
})

redBet.addEventListener('click', () => {
    redAmt = betAmt();
    console.log(`You just bet ${redAmt} on Red!`)
    if(redOn === false){
        redOn = true;
    };
})

greenBet.addEventListener('click', () => {
    greenAmt = betAmt();
    console.log(`You just bet ${greenAmt} on Green/0! Good luck payout is 35 to 1!!`)
    if(greenOn === false){
        greenOn = true;
    };
})

oddBet.addEventListener('click', () => {
    oddAmt = betAmt();
    console.log(`You just bet ${oddAmt} on Odd!`)
    if(oddOn === false){
        oddOn = true;
    };
})

evenBet.addEventListener('click', () => {
    evenAmt = betAmt();
    console.log(`you just bet ${evenAmt} on Even!`)
    if(evenOn === false){
        evenOn = true;
    };
})

onetwelveBet.addEventListener('click', () => {
    onetwelveAmt = betAmt();
    console.log(`you just bet ${onetwelveAmt} on 1 - 12!`)
    if(onetwelveOn === false){
        onetwelveOn = true;
    };
})

twotwelveBet.addEventListener('click', () => {
    twotwelveAmt = betAmt();
    console.log(`you just bet ${twotwelveAmt} on 13 - 24!`)
    if(twotwelveOn === false){
        twotwelveOn = true;
    };
})

threetwelveBet.addEventListener('click', () => {
    threetwelveAmt = betAmt();
    console.log(`you just bet ${threetwelveAmt} on 25 - 36!`)
    if(threetwelveOn === false){
        threetwelveOn = true;
    };
})


//auto bet for testing
if(player.name === 'jim'){
    blackAmt=50
    greenAmt=50
    redAmt=50
    blackOn = true;
    redOn = true;
    greenOn = true;
};



//animates the roulette wheel and pays out bets
spinButton.addEventListener('click', () => {
    console.log('you just clicked the spin button!');
    wheelElement.classList.add('animate');
    playGame();
});
wheelElement.addEventListener('animationend', () => {
    wheelElement.classList.remove('animate');
    console.log(color + " " + number);
    balllogOut.innerHTML = (color + ' ' + number);
    dealBets();
});



 