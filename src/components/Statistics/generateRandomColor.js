function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColor() {
  return `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
}

export default generateRandomColor;
