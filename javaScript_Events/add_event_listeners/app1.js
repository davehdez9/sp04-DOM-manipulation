function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#teal');
btn.onclick = function () {
  makeBody('teal');
};

const h1 = document.querySelector('h1');
btn.onclick = function () {
  h1.style.color = 'cyan';
};

// Use event listener
const violetBtn = document.querySelector('#violet');

violetBtn.addEventListener('click', function () {
  makeBody('violet');
});

violetBtn.addEventListener('click', function () {
  h1.style.color = 'cyan';
});
