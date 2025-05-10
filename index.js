// 1. Add in dots and dashes to body
// 2. Separate Morse Code Box and Translation Box
// 3. Translation???
// / -> for space between words, " " for space between letters, extend without "/"

const CODE_TABLE = {
  'a': '.-',
  'b': '-...'
};
window.addEventListener("keyup", Dot)
window.addEventListener("keyup", Translation)

function Dot(event) {
  const key_pressed = event.key;
  if (key_pressed == ".") {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + "."

  } else if (key_pressed == " ") {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML + " "
  }
}

function Translation(event) {
  const key_pressed = event.key;
  var text = document.getElementById("main").innerHTML;
  console.log(text);
}

console.log(CODE_TABLE);
