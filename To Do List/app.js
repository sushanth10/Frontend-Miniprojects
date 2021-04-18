let plusIcon = document.querySelector(".fa-plus-circle");
let delIcons = document.querySelectorAll(".delIcons");
let addTodoInput = document.querySelector("input");
let Todos = [];
let list = document.querySelector(".list");
let LIs = document.querySelectorAll(".todos");
let spans = document.querySelectorAll("span");

plusIcon.addEventListener("click", function () {
    if (addTodoInput.style.display != "none") {
        addTodoInput.style.display = "none";
    }
    else {
        addTodoInput.style.display = "inline-block";
    }
});

for (let li of LIs) {
    Todos.push(li.textContent);
}

for (let ind = 0; ind < delIcons.length; ind++) {
    let sp = spans[ind];
    sp.addEventListener("click", function () {
        sp.classList.toggle("completed");
    });
}


addTodoInput.addEventListener("keypress", function (evt) {
    if (evt.keyCode === 13) {
        var toAdd = addTodoInput.value;
        Todos.push(toAdd);
        addLI = document.createElement("li");
        addLI.classList.add("todos");
        delIcon = "<i class='fas fa-trash-alt delIcons'></i><span>";
        addLI.innerHTML += delIcon + toAdd + "</span>";
        // console.log(addLI);
        addTodoInput.value = "";
        list.appendChild(addLI);
        // delIcon.appendChild(delIcons);
    }
});


for (let i = 0; i < delIcons.length; i++) {
    delIcons[i].addEventListener("click", function () {
        Todos = Todos.splice(i, 1);
        LIs[i].parentElement.removeChild(LIs[i]);
        // console.log(Todos, "\n", LIs, "\n\n");
    });
}