// Create a div container on HTML document and create x numbers dynamically
// and append to the container div.

let button = document.querySelector("#button");
let number = document.querySelector("#number");
let newDiv = document.createElement("div");

button.addEventListener("click", (e) => {
  newDiv.innerHTML = "";
  newDiv.className = "number-wrapper";
  document.body.appendChild(newDiv);

  for (let i = 1; i <= number.value; i++) {
    newNum = document.createElement("div");
    newNum.textContent = `${i}`;
    newNum.style.fontSize = "40px";
    newNum.className = "number-text";

    // Even numbers background is green
    if (i % 2 === 0) {
      newNum.style.backgroundColor = "green";
    }

    // Odd numbers background is yellow
    if (i % 2 !== 0) {
      newNum.style.backgroundColor = "yellow";
    }

    // Prime numbers background is red
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // prime numbers
    if (i > 1 && flag == 0) {
      newNum.style.backgroundColor = "red";
    }

    newDiv.appendChild(newNum);
  }
});
