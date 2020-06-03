const div = document.querySelector('div'); //undefined
div.parentElement; // <section>...<section/>
const section = div.parentElement; //undefined
section.parentElement; // <body>...<body/>

// Accessing the children of an element
const ul = document.querySelector('ul'); // undefined
ul.children; // [li,li]
document.body, children; // [children, children]
const section = ul.parentElement.parentElement; // undefined
section; // <section>...<section/>
section.firstElementChild; // <h1>Here is main heading<h1/>
section.lastElementChild; // <div>Here is the second div!<div/>

// Accessing the sibling of an element
const h1 = document.querySelector('h1'); // undefined
h1.nextElementSibling; // <div>...<div/>
h1.previousElementSibling; // null

const li = document.querySelector('li'); // undefined
li.childNodes; // [text, button, text, comment, text]
