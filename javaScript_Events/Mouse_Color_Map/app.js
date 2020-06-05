// document.addEventListener('')

//window.innerWidth
//window.innerHeight

// rgb(0,0,0) -> rgb(255,255,255)

document.addEventListener('mousemove', function (e) {
  const r = Math.round((e.pageX * 255) / window.innerWidth);
  const b = Math.round((e.pageY * 255) / window.innerHeight);
  const color = `rgb(${r}, 0, ${b})`;
  document.body.style.backgroundColor = color;
  console.log(color);
});
