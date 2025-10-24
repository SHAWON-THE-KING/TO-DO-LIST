let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let taskText = taskInput.value;

    if (taskText == "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskText;


    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
