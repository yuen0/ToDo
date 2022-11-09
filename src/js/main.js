const listItem = document.querySelectorAll("#toDoList li");
const completedList = document.querySelector("#completedList");
const toDoList = document.querySelector("#toDoList");
const completedLi = document.querySelectorAll("#completedList li");


//removes item from To Do List and adds it to the completed list
for (let item of listItem){
    item.addEventListener("click", () =>{
        completedList.appendChild(item);
    })
}
