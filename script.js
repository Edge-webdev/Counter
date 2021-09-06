const counter = document.querySelector('.counter');
const add = document.querySelector('.increment');
const subtract = document.querySelector('.reduce');

let count = 0;

setInterval(() => {
  counter.innerHTML = count;
  if (count === 0) {
    counter.style.color = 'black';
  }
}, 100);

function addToCount() {
  count++;
  if (count > 0) {
    counter.style.color = 'green';
  }
}

function subtractFromCount() {
  count--;
  if (count < 0) {
    counter.style.color = 'red';
  }
}

function returnToZero() {
  count = 0;
  counter.innerHTML = count;
  counter.style.color = 'black';
}
