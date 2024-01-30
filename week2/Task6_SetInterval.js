/* eslint-disable no-undef */
// setInterval function

let isInterval;
let num = 1;

function incrementNumber() {
  num += 1;
  document.getElementById('counting').innerText = num;
}
function startCounting() {
  if (!isInterval) {
    isInterval = setInterval(incrementNumber, 1000);
  }
}

function stopCounting() {
  clearInterval(isInterval);
  isInterval = null;
}

document.getElementById('start').addEventListener('click', startCounting);
document.getElementById('stop').addEventListener('click', stopCounting);
