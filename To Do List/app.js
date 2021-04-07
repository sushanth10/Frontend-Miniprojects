let plusIcon = document.querySelector(".fa-plus-circle");
let delIcons = document.querySelectorAll(".delIcons");
let addTodoInput = document.querySelector("input");
let listOfTodos = [];
let listOfLis = document.querySelectorAll(".todos");
let spans = document.querySelectorAll("span");

plusIcon.addEventListener("click", function () {
    if (addTodoInput.style.display != "none") {
        addTodoInput.style.display = "none";
    }
    else {
        addTodoInput.style.display = "inline-block";
    }
});

for (let todo of listOfLis) {
    listOfTodos.push(todo.textContent);
}

for (let ind = 0; ind < delIcons.length; ind++) {
    let delIcon = delIcons[ind];
    delIcon.addEventListener("click", function () {
        listOfLis[ind + 1].remove();
        listOfTodos.splice(ind, 1);
        console.log(listOfTodos);
    });
}

for (let ind = 0; ind < delIcons.length; ind++) {
    let sp = spans[ind];
    sp.addEventListener("click", function () {
        sp.classList.toggle("completed");
    });
}