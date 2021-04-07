let plusIcon = document.querySelector(".fa-plus-circle");
let delIcon = document.querySelector(".delIcons");
let addTodoInput = document.querySelector("input");
let listOfTodos = [];
let listOfLis;

plusIcon.addEventListener("click", function(){
    if(addTodoInput.style.display!="none"){
        addTodoInput.style.display = "none";
    }
    else{
        addTodoInput.style.display="inline-block";
    }
    
});