let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function deleteFromDisplay() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
}

function resetDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

updateDisplay();
