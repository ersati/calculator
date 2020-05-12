const button = document.querySelectorAll(".button");
const panel = document.querySelector(".result").innerText;
const panel1 = document.querySelector(".result");
const pan = document.getElementById("res");
let number;
console.log(panel);
const test = (e) => {
  console.log(e.target.value);
  console.log(e.target);
  number += e.target.lastChild;
  pan.textContent = parseInt(e.target.lastChild);
};
window.addEventListener("click", test);
// function insert(num) {
//   document.querySelector(".button").textview.value =
//     document.querySelector(".button").textview.value + num;
// }
