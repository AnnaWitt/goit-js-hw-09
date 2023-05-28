const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerColorSwitch = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStart.addEventListener('click', () => {
  timerColorSwitch = setInterval(() => {
    btnStart.disabled = true;
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  clearInterval(timerColorSwitch);
});
