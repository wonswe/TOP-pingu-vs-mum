const desc1 = document.querySelector("#desc1");
const desc2 = document.querySelector("#desc2");
const desc3 = document.querySelector("#desc3");
const cta = document.querySelector("#cta");

window.onload = beginningAnimation();

function beginningAnimation() {
  fadeInOut(desc1);
  desc1.addEventListener("animationend", () => {
    desc1.classList.add("disappear");
    desc2.classList.remove("before");   
    fadeInOut(desc2);
    desc2.addEventListener("animationend", () => {
      desc2.classList.add("disappear");
      desc3.classList.remove("before");
      fadeInOut(desc3);
      desc3.addEventListener("animationend", () => {
        cta.classList.add("drop-down");
        cta.addEventListener("animationend", () => {
          setTimeout(function () {
            choicesDiv.classList.add("fade-in");
            scoreSection.classList.add("jump-up");
          }, 300);
        });
      });
    });
  });
}

function fadeInOut(text) {
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for (let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char++
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
    fadeOut(text);
  }
}

function fadeOut(text) {
  text.classList.add("fade-out");
}

////////////////////////////////////////////////////////////////////

const body = document.querySelector('body');
const descriptionDiv = document.querySelector('.description');
const choicesDiv = document.querySelector('.choices');
const scoreSection = document.querySelector(".score-section");
const resultsDiv = document.querySelector('.results');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const finalResultsDiv = document.querySelector('.final-results');
const reloadDiv = document.querySelector('.reload');

const reloadButton = document.createElement('button');
reloadButton.setAttribute('class', 'reload')
reloadButton.textContent = 'Play Again?';
reloadButton.addEventListener('click', function() {
  location.reload();
})

function noot() {
  const noot = document.getElementById('noot');
  noot.volume = 0.2;
  noot.play();
}

const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random()*choices.length)];
}

let computerSelection = computerPlay();
let playerSelection;
let roundResult;

const roundResultTop = document.createElement('p');
roundResultTop.setAttribute('class', 'text');

function playRound(playerSelection, computerSelection) {

  noot();

  let message; 
  
  if (playerSelection == computerSelection) {
    message = `${playerSelection} and ${computerSelection}. It's a Tie!`;
  } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    message = `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    message = `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    message = `You Win! ${playerSelection} beats ${computerSelection}!`;
  }

  roundResultTop.textContent = message;

  resultsDiv.appendChild(roundResultTop);

  if (playerSelection === undefined || computerSelection === undefined) {
    resultsDiv.removeChild(roundResultTop);
  }

  let textResultCount = document.getElementsByClassName('text');

  if (textResultCount.length > 1) {
    let firstTextResult = resultsDiv.firstElementChild;
    resultsDiv.removeChild(firstTextResult);
  };


  return message;
  } 

let playerCount = 0;
let computerCount = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function game() {
  let choices = [rock, paper, scissors];
  choices.forEach(choice => choice.addEventListener('click', function() {
    play(choice);
  }));

  function play(choice) {
    playerSelection = choice.getAttribute('value');
    count(playRound(playerSelection, computerSelection));
  }

  const finalResult = document.createElement('p');
  finalResult.setAttribute('class', 'final');

  function completeGame() {
    body.removeChild(choicesDiv);
    body.removeChild(resultsDiv);
    finalResultsDiv.appendChild(finalResult);
    descriptionDiv.classList.add("disappear");
    reloadDiv.appendChild(reloadButton);
  }

  function count(message) {
    if (message.includes('Win')) {
      playerCount += 1;
    } else if (message.includes('Lose')) {
      computerCount += 1;
    }

    playerScoreDiv.textContent = playerCount;
    computerScoreDiv.textContent = computerCount;

    if (playerCount == 5) {
      finalResult.textContent = `yay ! play time with Pinga !`; 
      completeGame();

    } else if (computerCount == 5) {
      finalResult.textContent = `uh oh... laundry time...`;
      completeGame();
    } 
  }

}

game();