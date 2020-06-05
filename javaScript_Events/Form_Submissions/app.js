const form = document.querySelector('#monkeyform');
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  alert('You submitted the form!!!');
});

document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('No Google for you');
});

document
  .querySelector('input[type="checkbox"]')
  .addEventListener('click', function (e) {
    e.preventDefault();
    console.log('NO CHECKING THAT BOX GUY');
  });
