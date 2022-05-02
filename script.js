console.log('helloworld');
console.log('welcome to roulette, please enjoy!');

let ball = '';
let color = '';
let number = '';
let player = {
    name: '',
    money: 250,
};
// player.name = prompt('please enter your name');






let spinButton = document.getElementById('spinBtn');
// console.log(spinButton);

let wheelElement = document.getElementById('whl');
// console.log(wheelElement);

let blackBet = document.getElementById('blackBet');
let blackOn = false;
let redBet = document.getElementById('redBet');
let redOn = false;
let greenBet = document.getElementById('greenBet');
let greenOn = false;
let oddBet = document.getElementById('oddBet');
let oddOn = false;
let evenBet = document.getElementById('evenBet');
let evenOn = false;
let onetwelveBet = document.getElementById('onetwelveBet');
let onetwelveOn = false;
let twotwelveBet = document.getElementById('onethreetwofourBet');
let twotwelveOn = false;
let threetwelveBet = document.getElementById('twofivethreesixBet');
let threetwelveOn = false;


//creates the arrays for the numbers and the colors
let numbersArray = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

let colorsArray = [];
for(let i = 0; i < numbersArray.length; i++){
    if(i === 0){
        colorsArray[i] = 'green';
    }else if(i % 2 != 0){
        colorsArray[i] = 'red';
    }else{
        colorsArray[i] = 'black';
    };
};

// randomly selects the number the ball lands on 
function playGame(){
    let randomNum = Math.floor(Math.random() * 37);
    color = colorsArray[randomNum].toString();
    number = numbersArray[randomNum].toString();

};

function dealBets(){
    if(blackOn && color === 'black'){
        
    }
}


//adds event listeners for the bet buttons
blackBet.addEventListener('click', () => {
    console.log('youjustbeton black')
    if(blackOn === false){
        blackOn = true;
    };
})

redBet.addEventListener('click', () => {
    console.log('youjustbeton red')
    if(redOn === false){
        redOn = true;
    };
})

greenBet.addEventListener('click', () => {
    console.log('youjustbeton green')
    if(greenOn === false){
        greenOn = true;
    };
})

oddBet.addEventListener('click', () => {
    console.log('youjustbeton odd')
    if(oddOn === false){
        oddOn = true;
    };
})

evenBet.addEventListener('click', () => {
    console.log('youjustbeton even')
    if(evenOn === false){
        evenOn = true;
    };
})

onetwelveBet.addEventListener('click', () => {
    console.log('youjustbeton 1 - 12')
    if(onetwelveOn === false){
        onetwelveOn = true;
    };
})

twotwelveBet.addEventListener('click', () => {
    console.log('youjustbeton 13 - 24')
    if(twotwelveOn === false){
        twotwelveOn = true;
    };
})

threetwelveBet.addEventListener('click', () => {
    console.log('youjustbeton 25 - 36')
    if(threetwelveOn === false){
        threetwelveOn = true;
    };
})






//animates the roulette wheel and pays out bets
spinButton.addEventListener('click', () => {
    console.log('you just clicked the spin button!');
    wheelElement.classList.add('animate');
    playGame();
});
wheelElement.addEventListener('animationend', () => {
    wheelElement.classList.remove('animate');
    console.log(color + " " + number);
});



