// document.addEventListener('keypress', function (e) {
//   console.log(e.key);
// });

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
// });

// document.addEventListener('keyup', function (e) {
//   console.log(e.key);
// });

// document.querySelector('input').addEventListener('keydown', function (e) {
//   console.log('KEY DOWN: ', e.key);
// });

document.querySelector('input').addEventListener('keypress', function (e) {
  console.log('KEY PRESS: ', e.key);
});
