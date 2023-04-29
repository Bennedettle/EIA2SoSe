var L05_Aufgaben;
(function (L05_Aufgaben) {
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        console.log("async");
        let response = await fetch("data.json");
        let task = await response.text();
        let data = JSON.parse(task);
        generateContent(data);
        let button = (document.getElementById("btn"));
        button.addEventListener("click", newTask);
    }
    async function newTask(_event) {
        let Title = (document.querySelector("#inputText"));
        let Comment = (document.querySelector("#comment"));
        let Name = (document.querySelector("#AddName"));
        let Date = (document.querySelector("#date"));
        let Time = (document.querySelector("#time"));
        let newTaskInput = {
            title: Title.value,
            comment: Comment.value,
            name: Name.value,
            date: Date.value,
            time: Time.value,
            done: false,
        };
        console.log(newTaskInput);
        alert("Data sent & new task generated!");
        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-15";
        Time.value = "10:00";
    }
    function generateContent(_data) {
        console.log("GenerateContent");
        for (let category in _data) {
            let tasks = _data[category];
            let div = document.createElement("div");
            div.setAttribute("class", category);
            for (let i = 0; i < tasks.length; i++) {
                let task = document.createElement("div");
                task.setAttribute("class", "task");
                let done = document.createElement("input");
                done.setAttribute("type", "checkbox");
                done.setAttribute("name", "done");
                done.checked = tasks[i].done;
                task.appendChild(done);
                let title = document.createElement("div");
                title.setAttribute("class", "title");
                title.innerText = tasks[i].title;
                task.appendChild(title);
                let comment = document.createElement("div");
                comment.setAttribute("class", "comment");
                comment.innerText = tasks[i].comment;
                task.appendChild(comment);
                let name = document.createElement("div");
                name.setAttribute("class", "name");
                name.innerText = tasks[i].name;
                task.appendChild(name);
                let date = document.createElement("div");
                date.setAttribute("class", "date");
                date.innerText = tasks[i].date + " " + tasks[i];
            }
        }
    }
})(L05_Aufgaben || (L05_Aufgaben = {}));
//# sourceMappingURL=Aufgaben.js.map