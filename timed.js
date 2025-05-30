// TODO: 1. Now colour in the boxes when a value is being written in
// TODO: 2. Timing: how long to press for dot, how long to press for dash, how long to wait for new letter, how long to wait for new word
// TODO: 3. Finish the tree
// TODO: 4. Design

import { createTree } from "./tree.js";

var past2 = "";
var current2 = "";
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
  Translate2(message);
}

function Translate2(text) {
  var message = "";
  var current = "";
  var grid = document.getElementsByClassName("box");
  var count = 0;

  for (let i of text) {
    console.log("Translating:" + i);
    if (i == " ") {
      message += TreeTranslate(current);
      message += " ";
      current = "";
      count += 1;
    } else if (i == "/") {
      message += TreeTranslate(current);
      current = "";
      count += 1;
    } else {
      current += i;
      count += 1;
    }

    if (count == grid.length) {
      console.log("Count:" + count);
      message += TreeTranslate(current);
    }

    document.getElementById("translation2").innerHTML = message;
  }

}

function TreeTranslate(text) { // text:String
  // example .-
  var parse_tree = new createTree();
  var current_node = parse_tree;
  for (let i of text) {
    if (i == ".") {
      current_node = current_node.getLeft();
    } else if (i == "-") {
      current_node = current_node.getRight();
    } else {
      console.log("Wrong text inputted in TreeTranslate");
    }
  }
  return current_node.getVal();

}
