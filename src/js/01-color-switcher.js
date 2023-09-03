const refs = {
  saveBtn: document.querySelector('button[data-start]'),
  closeBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.saveBtn.addEventListener('click', onSaveBtnClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);

let timerId = null;
function onSaveBtnClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.saveBtn.disabled = true;
  refs.closeBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCloseBtnClick() {
  clearInterval(timerId);
  refs.saveBtn.disabled = false;
  refs.closeBtn.disabled = true;
}
