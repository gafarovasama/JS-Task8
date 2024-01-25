let firstNum = Number(prompt("Ilk reqemi daxil edin"));
let secondNum = Number(prompt("Ikinci reqemi daxil edin"));
const incrementData = document.querySelector("#increment");
const decrementData = document.querySelector("#decrement");
const vurmaData = document.querySelector("#vurma");
const bolmeData = document.querySelector("#bolme");
const outputData = document.querySelector(".output");

incrementData.addEventListener("click", () => {
  console.log(firstNum, secondNum);
  let result = firstNum + secondNum;
  outputData.innerHTML = result;
});

decrementData.addEventListener("click", () => {
  console.log(firstNum, secondNum);
  if (secondNum <= firstNum) {
    let result = firstNum - secondNum;
    outputData.innerHTML = result;
  } else {
    alert("Xahis olunur duzgun emeliyyat yerine yetirin");
  }

});

vurmaData.addEventListener("click", () => {
  console.log(firstNum, secondNum);
  let result = firstNum * secondNum;
  outputData.innerHTML = result;
});

bolmeData.addEventListener("click", () => {
  console.log(firstNum, secondNum);
  let result = firstNum / secondNum;
  outputData.innerHTML = result;
});