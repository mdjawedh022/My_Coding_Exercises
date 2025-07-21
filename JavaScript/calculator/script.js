function appendValue(value) {
  const display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
}
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = 0;
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    if (display.value.trim() !== "") {
      display.value = eval(display.value);
    }
  } catch (e) {
    display.value = "Error";
  }
}
