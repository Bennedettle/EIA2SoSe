namespace L05_Aufgabenliste_Client {
  
    export interface Task {
      title: string;
      comment: string;
      name: string;
      date: string;
      time: string;
      done: boolean;
    }
  
    export interface ToDoList {
      [name: string]: Task[];
    }
  
    window.addEventListener("load", handleLoad);
  
    async function handleLoad(): Promise<void> {
      console.log("async");
  
      let response: Response = await fetch("data.json");
      let task: string = await response.text();
      let data: ToDoList = JSON.parse(task);
  
      generateContent(data);
  
      let button: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("btn")
      );
      button.addEventListener("click", newTask);
    }
  
    async function newTask(_event: MouseEvent): Promise<void> {
      let Title: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#inputText")
      );
      let Comment: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#comment")
      );
      let Name: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#AddName")
      );
      let Date: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#date")
      );
      let Time: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#time")
      );
  
      let newTaskInput: Task = {
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
  
    function generateContent(_data: ToDoList): void {
      console.log("GenerateContent");
  
      for (let category in _data) {
        let tasks: Task[] = _data[category];
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", category);
  
        for (let i: number = 0; i < tasks.length; i++) {
          let task: HTMLDivElement = document.createElement("div");
          task.setAttribute("class", "task");
  
          let done: HTMLInputElement = document.createElement("input");
          done.setAttribute("type", "checkbox");
          done.setAttribute("name", "done");
          done.checked = tasks[i].done;
          task.appendChild(done);
  
          let title: HTMLDivElement = document.createElement("div");
          title.setAttribute("class", "title");
          title.innerText = tasks[i].title;
          task.appendChild(title);
  
          let comment: HTMLDivElement = document.createElement("div");
          comment.setAttribute("class", "comment");
          comment.innerText = tasks[i].comment;
          task.appendChild(comment);
  
          let name: HTMLDivElement = document.createElement("div");
          name.setAttribute("class", "name");
          name.innerText = tasks[i].name;
          task.appendChild(name);
  
          let date: HTMLDivElement = document.createElement("div");
          date.setAttribute("class", "date");
          date.innerText = tasks[i].date + " " + tasks[i
  