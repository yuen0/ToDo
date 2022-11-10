const listItems = document.querySelectorAll("li");
const input = document.querySelector("#content");
const form = document.querySelector("#todo-form");
const ul = document.querySelector("#u-list");

for (let item of listItems) {
	item.addEventListener("click", () => {
		item.remove();
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const newTodo = document.createElement("li");
	newTodo.innerText = "";
	newTodo.innerText = input.value.toUpperCase();
	ul.appendChild(newTodo);
});
