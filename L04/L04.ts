const boolean: addBtn = document.getElementById("add")!;
addBtn.addEventListener("click", addTask);

function addTask() {
  const taskInput = document.querySelector("input[name='task']") as HTMLInputElement;
  const commentInput = document.querySelector("input[name='comment']") as HTMLInputElement;
  const personInput = document.querySelector("input[name='person']") as HTMLInputElement;
  const deadlineInput = document.querySelector("input[name='deadline']") as HTMLInputElement;

  const newTask = document.createElement("div");
  newTask.className = "task";

  const doneInput = document.createElement("input");
  doneInput.type = "checkbox";
  doneInput.name = "done";
  newTask.appendChild(doneInput);

  const newTaskInput = document.createElement("input");
  newTaskInput.type = "text";
  newTaskInput.name = "task";
  newTaskInput.placeholder = "Aufgabe";
  newTaskInput.value = taskInput.value;
  newTask.appendChild(newTaskInput);

  const newCommentInput = document.createElement("input");
  newCommentInput.type = "text";
  newCommentInput.name = "comment";
  newCommentInput.placeholder = "Kommentar";
  newCommentInput.value = commentInput.value;
  newTask.appendChild(newCommentInput);

  const newPersonInput = document.createElement("input");
  newPersonInput.type = "text";
  newPersonInput.name = "person";
  newPersonInput.placeholder = "Bearbeiter";
  newPersonInput.value = personInput.value;
  newTask.appendChild(newPersonInput);

  const newDeadlineInput = document.createElement("input");
  newDeadlineInput.type = "datetime-local";
  newDeadlineInput.name = "deadline";
  newDeadlineInput.value = deadlineInput.value;
  newTask.appendChild(newDeadlineInput);

  const inProgressLabel = document.createElement("label");
  inProgressLabel.textContent = "in Bearbeitung:";
  newTask.appendChild(inProgressLabel);

  const inProgressInput = document.createElement("input");
  inProgressInput.type = "checkbox";
  inProgressInput.name = "inprogress";
  newTask.appendChild(inProgressInput);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Ändern";
  newTask.appendChild(editBtn);
  editBtn.addEventListener("click");

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash-alt";
  trashIcon.id = "trashbin";
  newTask.appendChild(trashIcon);
  trashIcon.addEventListener("click");

  const taskList = document.querySelector("#div")!;
  taskList.appendChild(newTask);

  taskInput.value = "";
  commentInput.value = "";
  personInput.value = "";
  deadlineInput.value = "";
}


