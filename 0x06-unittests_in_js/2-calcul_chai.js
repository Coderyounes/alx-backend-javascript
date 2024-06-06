const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    return num1 + num2;
  }

  if (type === 'SUBTRACT') {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    return num1 - num2;
  }

  if (type === 'DIVIDE') {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    if (num2 === 0) {
      return 'Error';
    }
    return num1 / num2;
  }
};

module.exports = calculateNumber;
