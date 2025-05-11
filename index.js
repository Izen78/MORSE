// 1. Add in dots and dashes to body
// 2. Separate Morse Code Box and Translation Box
// 3. Translation???
// / -> for space between words, " " for space between letters, extend without "/"
// 4. Create parser to diallow illegal moves e.g. space and "/" together

const CODE_TABLE = {
  '.-': 'a',
  '.': 'e'
};
const sep = '/';

var past = "";
var current = "";

window.addEventListener("keyup", Dot)
// window.addEventListener("keyup", Translation)
window.addEventListener("keydown", Backspace)

function Dot(event) {
  const key_pressed = event.key;
  if (key_pressed == ".") {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + ".";
    current += '.';
    Display();
  } else if (key_pressed == "-") {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + "-";
    current += "-";
    Display();
  } else if (key_pressed == "/") {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + "/";
    past += Translation(current);
    current = [];
  } else if (key_pressed == " ") {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + " ";
    past += Translation(current) + " ";
    current = [];
  }
}

function Translation(message) {
  if (!CODE_TABLE[message]) {
    console.log("Undef:", message);
  }
  console.log("Translation of:", message);
  return CODE_TABLE[message];
}

function Backspace(event) {
  const key_pressed = event.key;
  if (key_pressed == "Backspace") {
    current = current.slice(0, -1);
  }
}

function Display() {
  document.getElementById("translation").innerHTML = past;
  document.getElementById("translation").innerHTML += Translation(current);
  // document.getElementById("translation").innerHTML += CODE_TABLE[current];
}


console.log(CODE_TABLE);
