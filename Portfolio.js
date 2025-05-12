// Name Typing Effect
const name = "Lewis Cargill";  
const leftBracket = document.getElementById("left-bracket");
const rightBracket = document.getElementById("right-bracket");
const nameElement = document.getElementById("name");

let index = 0;

leftBracket.style.visibility = "hidden";
rightBracket.style.visibility = "hidden";

function typeNextChar() {
  if (index === 0) {
    leftBracket.style.visibility = "visible"; 
  }

  if (index === name.length) {
    rightBracket.style.visibility = "visible"; 
  }

  if (index < name.length) {
    nameElement.textContent += name.charAt(index);  
  }

  index++;

  if (index <= name.length) {
    setTimeout(typeNextChar, 150);  
  }
}

window.addEventListener("DOMContentLoaded", typeNextChar);
