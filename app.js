// const h1 = document.querySelector('h1');

// h1.innerText; // "Giant Sequoia"
// h1.innerText = 'GO AWAY';
const allH3 = document.querySelectorAll('h3');
console.log(allH3);

for (let i = 0; i < allH3.length; i++) {
  allH3[i].style.color = 'pink';
}

const allH2s = document.getElementsByTagName('h2');

for (let h2 of allH2s) {
  h2.style.color = 'purple';
  h2.style.fontSize = '80px';
}

const imgs = document.querySelectorAll('img');

for (let img of imgs) {
  img.style.width = '100px';
  img.style.border = '2px solid green';
}
