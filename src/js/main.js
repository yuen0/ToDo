const form = document.querySelector("#todo-form");
const formInput = document.querySelector("#content");
const list = document.querySelector("#u-list");

let todoList = [];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	addItem(formInput.value);
});

function addItem(item) {
	if (item !== "") {
		const todo = {
			name: item,
			id: Date.now(),
			completed: false,
		};

		todoList.push(todo);
		addLS(todoList);
		formInput.value = "";
	} else {
		alert("Please add a valid todo");
	}
}

function displayItems(todoList) {
	list.innerHTML = "";

	for (let i of todoList) {
		const checked = i.completed ? "checked" : null;

		const li = document.createElement("li");
		li.setAttribute("class", "item");
		li.setAttribute("data-key", i.id);

		if (i.completed === true) {
			li.classList.add("checked");
		}

		li.innerHTML = `${i.name}<button class="delete-button">X</button>`;

		list.append(li);
	}
}

function addLS(todoList) {
	localStorage.setItem("todos", JSON.stringify(todoList));
	displayItems(todoList);
}

function getLS() {
	const storage = localStorage.getItem("todos");

	if (storage) {
		todoList = JSON.parse(storage);
		displayItems(todoList);
	}
}

function deleteItem(id) {
	todoList = todoList.filter((i) => {
		return i.id != id;
	});
	addLS(todoList);
}

getLS();

list.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-button")) {
		deleteItem(e.target.parentElement.getAttribute("data-key"));
	}
});
