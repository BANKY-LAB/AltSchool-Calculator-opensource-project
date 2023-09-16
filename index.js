const numbers = document.querySelectorAll("button[id^=btn-]");
const display = document.querySelector("#display");
const AC = document.querySelector("#AC");
const Del = document.querySelector("#del");
const specialKeys = ["+", "-", "/", "*", "AC", "DEL","="];

let output = "";
// this is the calculate function 
const calculate = (value) => {
  if (output === "" && specialKeys.includes(value)) {
    return;
  } else if (value === "DEL") {
    output = output.toString().slice(0,-1)
  } else if (value === "AC") {
    output = "";
  } else {
    if (value === "=" && output !== "") {
      try {
        output = eval(output);
      } catch (error) {
        output = "Error";
      }
    } else {
      output += value;
    }
  }
  display.value = output;

  // this is the code that manage the number of digits displayed
  // on the screen and adjust the font size accordingly
  if (output.length > 9) {
    display.classList.remove("display-font1");
    display.classList.add("above-6");
  } else {
    display.classList.remove("above-6");
    display.classList.add("display-font1");
  }
  if (display.value.length > 9) {
    display.classList.remove("display-font1");
    display.classList.add("above-6");
  } else {
    display.classList.remove("above-6");
    display.classList.add("display-font1");
  }
}
// this iterates over all the numbers and add 
// event listener to each of the button with a function "calculate"
numbers.forEach((number) => {
  number.addEventListener("click", (event) =>
    calculate(event.target.textContent)
  );
});

AC.addEventListener("click", () => calculate("AC"));
Del.addEventListener("click", () => calculate("DEL"));
