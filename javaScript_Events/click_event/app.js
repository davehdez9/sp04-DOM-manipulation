// When a ___ event occurs on ___ element, do this ___

//click
//button
//alert("hi")
function makeBodyPurple() {
  document.body.style.backgroundColor = 'purple';
}

function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#teal');
btn.onclick = function () {
  makeBody('teal');
};
