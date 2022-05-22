const $ = document.querySelector.bind(document);
const result = $('[app-result]');
const btnSubtract = $('[btn-subtract]');
const btnReset = $('[btn-reset]');
const btnAdd = $('[btn-add]');

const storeCount = {
  count: 0,
}

const addTextYellow = () => {
  if (storeCount.count !== 0) {
    result.classList.add('text-yellow');
  } else {
    result.classList.remove('text-yellow');
  }
}
 
const renderCount = () => result.innerHTML = storeCount.count;

const increaseCount = () => {
  storeCount.count++;
  addTextYellow();
}
const decreaseCount = () => {
  storeCount.count--;
  addTextYellow();
}
const resetCount = () => {
  storeCount.count = 0;
  addTextYellow();
}

const handleEvents = () => {
  btnSubtract.onclick = () => {
    decreaseCount();
    renderCount();
  }
  btnAdd.onclick = () => {
    increaseCount();
    renderCount();
  }
  btnReset.onclick = () => {
    resetCount();
    renderCount();
  }
}

const countInit = () => {
  handleEvents();
  renderCount();
}

countInit();
