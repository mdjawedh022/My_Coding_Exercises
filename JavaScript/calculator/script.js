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



function eraseLast() {
  const display = document.getElementById("display");
  if (display.value !== "0" && display.value !== "Error") {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
      display.value = "0";
    }
  }
}

// let key = document.querySelectorAll("#keyboard>button");

// for (let i = 0; i < key.length; i++) {
//   key[i].addEventListener("click",mycal);

// }

// function mycal(){
//     let targetNumber=event.target.innerText
//     document.querySelector.apply("#display").innerText=targetNumber;
// } 