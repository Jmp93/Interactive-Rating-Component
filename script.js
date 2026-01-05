const numbers = document.querySelector('.numbers');
const num = document.querySelectorAll('.num');
const submitEl = document.querySelector('.submit-el');
const selectedMsg = document.querySelector('.selected-msg');
const thanksState = document.querySelector('.thanks-state');
const ratingState = document.querySelector('.rating-state');
let selectedNum = null;

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener('click', () => {
    selectedNum = num[i].textContent;
    for (let j = 0; j < num.length; j++) {
      num[j].classList.remove('active');
    }
    num[i].classList.add('active');
  });
}

submitEl.addEventListener('click', e => {
  e.preventDefault();
  if (!selectedNum) return;
  thanksState.classList.remove('hidden');
  ratingState.classList.add('hidden');
  selectedMsg.textContent = `You selected ${selectedNum} out of 5`;
});
