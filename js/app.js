const input = document.querySelector(".todo-input");
const todo_button = document.querySelector(".todo-button");
const todo_list = document.querySelector(".todo-list");
//Adding todo list
todo_button.addEventListener("click", function (event) {
  event.preventDefault();

  //Create new div randomly
  const div = document.createElement("div");
  div.classList.add("todo");

  //create new list randomly
  const list = document.createElement("li");
  list.innerText = input.value;
  if (list.innerText == "") {
    document.querySelector("p").style.display = "block";
  } else {
    document.querySelector("p").style.display = "none";
    todo_list.appendChild(div);
    list.classList.add("todo-item");
    div.appendChild(list);
    //create new check button
    const check_button = document.createElement("button");
    check_button.innerHTML = '<i class="fas fa-check"></i>';
    check_button.classList.add("check");
    div.appendChild(check_button);
    //create new delete button
    const delete_button = document.createElement("button");
    delete_button.innerHTML = '<i class="fas fa-trash"></i>';
    delete_button.classList.add("trash");
    div.appendChild(delete_button);
    //clear input value
    input.value = "";
  }
});

//Check or Delete todo list
todo_list.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList[0] == "check") {
    const div = target.parentElement;
    div.classList.add("completed");
    target.remove();
  } else if (target.classList[0] == "trash") {
    const div = target.parentElement;
    div.classList.add("drop-effect");
    div.addEventListener("transitionend", function () {
      div.remove();
    });
  }
});
