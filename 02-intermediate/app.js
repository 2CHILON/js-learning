const title = document.querySelector("#title");
const input = document.querySelector("#name");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
    title.textContent = `Hello, ${input.value}!`;
    const li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    input.value = "";
});