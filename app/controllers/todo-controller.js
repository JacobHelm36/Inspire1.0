import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template= ""
  let tasks = store.State.myTodo
  tasks.forEach(task => {
    template += task.Template
  })
  document.getElementById("task-list").innerHTML = template
  console.log(store.State.todo, "draw function")
  //document.getElementById("tasks-count").innerHTML = `<h6>Task Count: '${this.id}'</h6>`
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todo", _drawTodos)
    store.subscribe("myTodo", _drawTodos)
    TodoService.getTodos();
    TodoService.addMyTasks()
    
    //this.mockPost()
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
      description: form.desc.value
    };
    console.log(form.desc.value)
    TodoService.addMyTodo(todo);
    console.log(store.State.todo)
    TodoService.addMyTasks()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}
