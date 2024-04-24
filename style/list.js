const inputText = document.getElementById("type-text");
const listContainer = document.getElementById("list-contanier");
function addTasks() {
  if (inputText.value=== "") {
    alert("You must write here");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "delete";
    li.appendChild(span);
  }
  inputText.value = "";
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
}, false);
