'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess > secretNumber && guess <= 20) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = 'You lose!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } else if (guess < secretNumber && guess > 0) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low';
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = 'You lose!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } else {
        document.querySelector('.message').textContent = 'Please Enter Number Between 1-20';
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";

    
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});