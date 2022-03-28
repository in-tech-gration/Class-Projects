var todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title:
      "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true
  }
];

// Put this into a function.

for (var i = 0; i < todos.length; i++) {
  var todoContainer = document.querySelector(".todosContainer");

  // creating the div --> Wrapper - Parent --> Child of todosContainer
  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // creating the checkbox --> Child - Sibling
  var todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.checked = todos[i].completed;

  // creating the todo text --> Child - Sibling
  var todoText = document.createElement("p");
  todoText.innerText = todos[i].title;

  // creating the delete button --> Child - Sibling
  var todoDeleteContainer = document.createElement("div");
  todoDeleteContainer.classList.add("todo__delete");
  todoDeleteContainer.innerHTML =
    '<button class="icon-btn"><i class="fas fa-trash-alt"></i></button>';

  if (todos[i].completed === true) {
    todoText.classList.add("checked");
  }

  todoContainer.appendChild(todoDiv);
  todoDiv.appendChild(todoCheckbox);
  todoDiv.appendChild(todoText);
  todoDiv.appendChild(todoDeleteContainer);
}

// adding event listeer to the checkboxes.

var checkbox = document.querySelectorAll("input");
checkbox.forEach((el) => {
  el.addEventListener("change", function (e) {
    var isChecked = e.target.checked;
    var text = e.target.parentNode.querySelector("p");
    if (isChecked) {
      text.classList.add("checked");
    } else {
      text.classList.remove("checked");
    }
  });
});

function showCompletedTodos() {
  resetState();
  document.querySelectorAll(".todo").forEach((el) => {
    var input = el.querySelector("input");
    if (input.checked === false) {
      input.parentNode.style.display = "none";
    }
  });
}

function showFreshTodos() {
  resetState();
  document.querySelectorAll(".todo").forEach((el) => {
    var input = el.querySelector("input");
    if (input.checked === true) {
      input.parentNode.style.display = "none";
    }
  });
}

function resetState() {
  document.querySelectorAll(".todo").forEach((el) => {
    el.style.display = "flex";
  });
}

var freshBtn = document.querySelector("#fresh");
var completeBtn = document.querySelector("#complete");
var resetbtn = document.querySelector("#reset");

freshBtn.addEventListener("click", showFreshTodos);
completeBtn.addEventListener("click", showCompletedTodos);
resetbtn.addEventListener("click", resetState);

var deleteBtns = document.querySelectorAll(".icon-btn");
deleteBtns.forEach((el) => {
  el.addEventListener("click", function () {
    var isSure = confirm("Are you sure you want to delete this?");
    if (isSure === true) {
      console.log(el.parentElement.parentElement);
      el.parentElement.parentElement.remove();
    }
  });
});
