// const title = document.querySelector("#title");
// const note = document.querySelector(".note");
// const btn = document.querySelector("button");

// console.log(title);

// const title = document.querySelector("#title");

// title.textContent = "Welcome!";
// title.style.color = "tomato";
// title.classList.add("highlight");
// title.setAttribute("title", "tooltip");


// const li = document.createElement("li");   // create (not on the page yet)
// li.textContent = "Buy milk";

// const list = document.querySelector("#list");
// list.append(li);                           // now it appears on the page

// li.remove();                               // takes it off the page


// const btn  = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//     console.log("Button was clicked!");
// })

const countEl = document.querySelector("#count");
let count = 0;

function render() {
  countEl.textContent = count;
}

document.querySelector("#plus").addEventListener("click", () => {
  count++;
  render();
});

document.querySelector("#minus").addEventListener("click", () => {
  count--;
  render();
});

document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  render();
});

localStorage.setItem("count", count);
const saved = Number(localStorage.getItem("count")) || 0;

// for arrays and objects, use JSON
localStorage.setItem("tasks", JSON.stringify(["a", "b"]));
const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];