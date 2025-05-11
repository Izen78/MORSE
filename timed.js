// 1. Timing: how long to press for dot, how long to press for dash, how long to wait for new letter, how long to wait for new word
//

import { createTree } from "./tree.js";
var a = new createTree();
a.drawTree();

var start_time, end_time, time;
var pushed = false;
window.addEventListener("keydown", ({ key }) => {
  if (!pushed) {
    start_time = Date.now();
    console.log(start_time);
    pushed = true;
  }
});
window.addEventListener("keyup", ({ key }) => {
  end_time = Date.now();
  time = end_time - start_time;
  pushed = false;
  console.log(`Time: ${end_time - start_time}`);
  Fill(key);
  BoxTranslator();
});

function Fill(key) {
  var grid = document.getElementsByClassName("box");
  if (key == " ") {
    for (let box in grid) {
      if (grid[box].innerHTML == "") {
        if (time <= 100) {
          grid[box].innerHTML = ".";
        } else if (time <= 300) {
          grid[box].innerHTML = "-";
        } else if (time <= 600) {
          grid[box].innerHTML = "/";
        }
        else {
          grid[box].innerHTML = " ";
        }
        break;
      }
    }
  }
}

// Iterate over each box and parse the message.
function BoxTranslator() {
  var message = "";
  var grid = document.getElementsByClassName("box");
  for (let box in grid) {
    if (grid[box].innerHTML) {
      message += grid[box].innerHTML;
    }
  }
  console.log("message:", message);

  var text = Translate2(message);
}

function Translate2(text) {

}

