
let id;

function start() {
  setTimeout(changeText, 5000);
}

function changeText() {
  const p = document.getElementById('text');
  p.textContent = "Fin";
}

function stop() {
  clearTimeout(id);
}