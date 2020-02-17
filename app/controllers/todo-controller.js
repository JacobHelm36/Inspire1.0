import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function

function _drawTodos() {
  let count = store.State.myTodo.length
  let template= ""
  let tasks = store.State.myTodo
  tasks.forEach(task => {
    template += task.Template
  })
  template += tasks[0].newTemp
  document.getElementById("task-list").innerHTML = template
  console.log(store.State.todo, "draw function")
  //document.getElementById("tasks-count").innerHTML = `<p>tasks</p>`
  //count.toString() why won't this work?
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    //store.subscribe("todo", _drawTodos)
    store.subscribe("myTodo", _drawTodos)

    
    //this.mockPost()
  }
  addMyTasks() {
    TodoService.addMyTasks()
  }
    
/*mockPost(){
  event.preventDefault()
  var newTry = {
    _id: "125543",
    completed: true || false,
    user: "Jake",
    description: "I am trying"
  }
  TodoService.addMockPost(newTry)
}*/

  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = {
      description: form.description.value
    };
    TodoService.addMyTodo(todo);
    console.log(store.State.todo, "controller add event")
    this.addMyTasks()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

//passes id to remove whatever task from API
  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}
