import './style.css';

const fibonacciSequenceCalculator = (num) => {
  const cached = [1, 1];

  const calc = (n) => {
    if (n < 1) {
      return 1;
    }
    if (cached[n]) {
      return cached[n];
    }
    cached[n - 2] = calc(n - 2);
    cached[n - 1] = calc(n - 1);
    return cached[n - 2] + cached[n - 1];
  };

  return {
    getSequence: () => cached,
    getFinalNumber: () => calc(num)
  }
};

const load = () => {
  const sequence = document.querySelector('#sequence');
  const result = document.querySelector('#result');
  const numField = document.querySelector('#num');
  const calcBtn = document.querySelector('#calcBtn');

  calcBtn.addEventListener('click', () => {
    if (numField.value && numField.value >= 1 && numField.value <= 100) {
      const numToElab = Math.floor(numField.value);
      const fibonacciResult = fibonacciSequenceCalculator(numToElab);
      result.innerText = fibonacciResult.getFinalNumber();
      sequence.innerText = fibonacciResult.getSequence().join(", ");
    } else {
      result.innerText = '0';
      sequence.innerText = '0';
    }
  });
}

load();
