const gameContainer = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

let count = 0;
let previousTarget = null;
let firstGuess = '';
let secondGuess = '';
let delay = 1200;

//Array of colors
const COLORS = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'blue',
  'green',
  'orange',
  'purple',
];

//function to shuffle an array - return same array with values shuffled - Fisher Yates Algorithm -
function shuffle(array) {
  let counter = array.length;

  //While there are elements in the array
  while (counter > 0) {
    //pick random index
    let index = Math.floor(Math.random() * counter);

    //decrease the counter by 1
    counter--;

    //and swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// Function loop over the array of colors - creates new Div and give it a class with the value of the colors
//Also add an event listener for a click for each card

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    //create a new div
    const newDiv = document.createElement('div');
    // newDiv.className.add('card');
    newDiv.dataset.name = color;

    //give it a class attribute for the value we are looping over

    newDiv.classList.add(color);
    // newDiv.classList.add('card');
    //call a function handleCardClick when a div is clicked on
    newDiv.addEventListener('click', handleCardClick);

    //append the div to the element with an id of game
    grid.appendChild(newDiv);
    gameContainer.appendChild(grid);
  }
}

const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.remove('selected');
    card.style.backgroundColor = 'black';
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    console.log(card);
    card.classList.remove('selected');
    card.style.backgroundColor = 'initial';
  });
};

function handleCardClick(event) {
  let clicked = event.target;
  console.log('you just cklickj', event.target);

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.dataset.name;
      console.log(firstGuess);
      clicked.style.backgroundColor = clicked.classList[0];
      clicked.classList.add('selected');
    } else {
      // debugger;
      secondGuess = clicked.dataset.name;
      console.log(secondGuess);
      clicked.style.backgroundColor = clicked.classList[0];
      clicked.classList.add('selected');
    }
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
}

createDivsForColors(shuffledColors);
