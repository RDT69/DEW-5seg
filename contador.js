let id;

function start() {
  id = setInterval(incrementCounter, 1000);
}

function incrementCounter() {
  const counter = document.getElementById("counter");
  counter.textContent++;
}

function stop() {
  clearInterval(id);  
}