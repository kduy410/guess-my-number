'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess <= 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'Guess number must be in between 1 and 20!';
  } else if (guess === random) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = random;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    score++;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== random) {
    document.querySelector('.message').textContent =
      guess > random ? 'Too high!' : 'Too low!';
    score--;
    if (score < 0) {
      highScore = 0;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.message').textContent = "You're lose!";
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      document.querySelector('.score').textContent = score < 0 ? 0 : score;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
