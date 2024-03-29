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
        span.innerHTML = "×"
        li.appendChild(span);
    }
    inputBox.value = "";
    refresh();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        refresh();
    }   
    })

function refresh(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function updateData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
updateData();