// const preferences = {
//   fontSize: '18px',
//   favColor: 'teal',
// };

// localStorage.setItem('preferences', JSON.stringify(preferences));
// const preference = JSON.parse(localStorage.getItem('preferences'));

const { favColor } = JSON.parse(localStorage.preferences);
document.body.style.backgroundColor = favColor;
