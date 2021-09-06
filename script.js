const counter = document.querySelector('.counter');
const add = document.querySelector('.increment');
const subtract = document.querySelector('.reduce');

// Keeps track of count
let count = 0;

// Updates counter to be equal to the count
setInterval(() => {
  counter.innerHTML = count;

  // Checks out count is zero
  if (count === 0) counter.style.color = 'black';
}, 100);

function addToCount() {
  count++;

  // Checks if counter is positive
  if (count > 0) counter.style.color = 'green';
}

function subtractFromCount() {
  count--;

  // Checks if counter is positive
  if (count < 0) counter.style.color = 'red';
}

// Returns to zero ( Kore ga requiem... da )
function returnToZero() {
  count = 0;
  counter.style.color = 'black';
}
