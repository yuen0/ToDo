const form = document.querySelector("#todo-form");
// const input = document.querySelector("#content");
// const ul = document.querySelector("#u-list");

window.addEventListener("load", () => {
	newItems = JSON.parse(localStorage.getItem("newItems")) || [];
	const input = document.querySelector("#content");
	const form = document.querySelector("#todo-form");
	const ul = document.querySelector("#u-list");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		todo = {
			content: e.target.elements.content.value,
		};

		newItems.push(todo);
		localStorage.setItem("newItems", JSON.stringify(newItems));

		const newTodo = document.createElement("li");
		newTodo.innerText = input.value.toUpperCase();
		ul.appendChild(newTodo);

		e.target.reset();
	});
	ul.addEventListener("click", (e) => {
		newItems = newItems.filter((item) => item !== e.target);
		localStorage.setItem("newItems", JSON.stringify(newItems));
		e.target.remove();
	});

	for (item of newItems) {
		const newTodo = document.createElement("li");
		newTodo.innerText = item.content.toUpperCase();
		ul.appendChild(newTodo);
	}
});
