const text = 'steven.suh';
const header = 'main-text';
const headerList = [];

const inputDefs = {
  ALPHABETS: 'alphabets',
  COLORS: 'colors',
};
const inputList = {
  'alphabets': ['a', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'o', 'p', 't', 'x', 'y'],
  'colors': ['#3cba54', '#f4c20d', '#db3236', '#4885ed'],
};

const container = document.getElementById('main-container');
const main = document.getElementById('main-text');
const bottomScroll = document.getElementById('bottom-scroll');



const expectedWidth = main.clientWidth + 40;

const filler = document.getElementById('filler');

const blink = 1000;
const transition = 500;
const duration = 400;
const colorDuration = 100;
const textDuration = 50;
const decrement = 5;

const changeHeader = function(index, letter, intervals) {
  if (index > 0) {
    headerList[index - 1].style.color = null;
    headerList[index - 1].textContent = letter;
    headerList[index - 1].classList.add('slow-color');

    intervals.forEach(interval => clearInterval(interval));
  }

  if (index < text.length) {
    const partialHeader = headerList[index];
    const displayText = partialHeader.textContent;

    partialHeader.classList.remove('hidden');

    let currDuration = duration * 1.5 - decrement * index;
    const intervalList = [];

    if (/^[a-z0-9]+$/i.test(displayText)) {
      const changeInputColor = changeInputFactory(inputDefs.COLORS, partialHeader);
      intervalList.push(setInterval(changeInputColor, colorDuration));

      const changeInputAlphabet = changeInputFactory(inputDefs.ALPHABETS, partialHeader);
      intervalList.push(setInterval(changeInputAlphabet, textDuration));
    } else {
      currDuration = 0;
    }

    setTimeout(changeHeader, currDuration, index + 1, displayText, intervalList);
  } else {
    bottomScroll.classList.add('notify');

    setTimeout(() => {
      filler.style.width = '0px';
      bottomScroll.classList.remove('notify');
      container.classList.remove('blink');

      setTimeout(startAnimation, transition + duration);
    }, duration * text.length);
  }
};
