const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.body,
};

let intervalId;

refs.startBtn.addEventListener("click", startFn);
refs.stopBtn.addEventListener("click", stopFn);

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

function startFn() {
  refs.startBtn.bisabled = true;
intervalId = setInterval(() => {
  refs.body.style.backgroundColor = 
  colors[randomIntegerFromInterval(0, colors.length - 1)];
}, 1000);
}

function stopFn() {
  if (refs.startBtn.disabled) {
    return;
  }
  console.log("1");
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

