function add() {
    const a = document.getElementById('taskInput'); 
    const add = a.value.trim(); 

    if (add !== "") {
        const li = document.createElement("li");
        li.textContent = add;

        const taskList = document.getElementById("taskList");
        taskList.appendChild(li);

        a.value = "";
    } else {
        alert("Please enter a task!");
    }
}


function del() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
}
