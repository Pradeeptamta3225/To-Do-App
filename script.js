const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if (inputBox.value === '') {
        alert("Please Enter Some Task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "× "
        li.appendChild(span);
    }
    inputBox.value = "";
}