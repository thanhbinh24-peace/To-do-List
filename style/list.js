const inputText = document.getElementById("type-text");
const listContainer = document.getElementById("list-contanier");
function addTasks() {
  if (inputText.value=== "") {
    alert("You must write something in the box");
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
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
    }
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
}, false);
function resetInput() {
  inputText.value = "";
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
}
