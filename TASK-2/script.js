/** @format */

document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputField = document.getElementById("inputField");
  const list = document.getElementById("list");

  if (inputField.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputField.value;
  li.innerHTML += '<button class="deleteButton">Delete</button>';
  list.appendChild(li);
  inputField.value = "";
});

document.getElementById("list").addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
