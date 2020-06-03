const input = document.querySelector('input'); // undefined
input.getAttribute('type'); // text
input.getAttribute('placeholder'); // "How many Muffins"

input.setAttribute('placeholder', 'I like kittens'); // 'I like kittens'
input.setAttribute('type', 'checkbox');

const imgs = document.querySelectorAll('img');

// for (let img of imgs) {
//   console.log(img.getAttribute('src'));
// }

const src = imgs[0].getAttribute('src');
for (let img of imgs) {
  img.setAttribute('src', src);
}

const quote = document.querySelector('blockquote');
quote.setAttribute('class', 'section-title');

const h2 = document.querySelector('h2');
h2.setAttribute('class', 'big');

const form = document.querySelector('#muffin-form'); // undefined
form.id; // "muffin-form"
form.getAttribute(id); // "muffin-form"
form.id = 'taco-form'; //'taco-form';

//Direct Access Attributes
const input = document.querySelector('form input'); // undefined
input.value; // ''
input.value; // 'asdasda'
input.value = 'I want 10 muffins'; //'I want 10 muffins'

const range = document.querySelector('input[type="range"]'); // undefined
range.value = '8';
range.value = '2';
range.value = 1; // change to 5

// Manipulating Classes
