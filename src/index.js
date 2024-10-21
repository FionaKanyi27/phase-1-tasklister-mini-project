document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form's default behavior (page reload)

    const inputField = document.getElementById("new-task-description");
    const priority = document.getElementById("priority").value;

    // Create a new task element
    const newTask = document.createElement("li");
    newTask.textContent = inputField.value + " ";

    // Set the color of the task based on priority
    if (priority === "high") {
      newTask.style.color = "red";
    } else if (priority === "medium") {
      newTask.style.color = "yellow";
    } else {
      newTask.style.color = "green";
    }

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      newTask.remove();  // Remove the task when delete button is clicked
    });

    // Add delete button to the task and append task to the list
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    // Clear input field after submitting
    inputField.value = "";
  });
});
