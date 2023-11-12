function addTask(event) {
    event.preventDefault();
    const input = document.getElementById("input");
    const taskText = input.value.trim(); 
  
    if (taskText !== "") {
      const taskList = document.getElementById("task-list");
      const newTask = document.createElement("li");
  
      const taskTextNode = document.createTextNode(taskText);
      newTask.appendChild(taskTextNode);
  
      const editIcon = document.createElement("i");
      editIcon.classList.add("fas", "fa-edit");
      editIcon.addEventListener("click", function() {
        const text = newTask.firstChild;
      const input = document.createElement("input");
      input.style.maxWidth = "80%";
      input.type = "text";
      input.value = text.textContent;
      newTask.replaceChild(input, text);
      input.focus();

      input.addEventListener("blur", function() {
        const newText = document.createTextNode(input.value);
        newTask.replaceChild(newText, input);
      });
      });
  
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas", "fa-trash-alt");
      deleteIcon.addEventListener("click", function() {
        newTask.remove();
      });
  
      newTask.appendChild(editIcon);
      newTask.appendChild(deleteIcon);
  
      taskList.appendChild(newTask);
      input.value = ""; 
    }
  }
  