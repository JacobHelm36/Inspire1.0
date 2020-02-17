import store from "../store.js";
import toDo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/helm/todos/",
  timeout: 8000
});

class TodoService {
  removeTodo(todoId) {
    todoApi
      .delete(store.State.myTodo)
      .then(res => {
        let myTasks = store.State.myTodo.filter(t => t._id != store.State.myTodo)
        store.commit("myTodo", myTasks)
      })
  }

  /*addMockPost(func) {
    debugger
    todoApi 
      .post("", func)
      .then(res => {
        let myFunc = new toDo(func)
        let myStuff = [...store.State.myTodo, myFunc]
        store.commit("myTodo", myStuff)
      })
      console.log(store.State.myTodo)
  }*/
  
  
  addMyTodo(todo) {
    let newTodo = new toDo(todo)
    let myToDo = [...store.State.todo, newTodo];
    store.commit("todo", myToDo);
    console.log(store.State.todo, "1234")
  }
  addMyTasks(){
    todoApi
    .post("", store.State.todo)
    .then(res => {
      let newTasks = new toDo(res.data.data)
      let myTasks = [...store.State.myTodo, newTasks]
      store.commit("myTodo", myTasks)
    })
    .catch(err => {
      throw new Error(err);
    });
  }
  
  getTodos() {
    todoApi
      .get("")
      .then(res => {
        let newToDo = res.data.data.map(t => new toDo(t))
        store.commit("myTodo", newToDo)
      })
      .catch(error => {
        console.error(error)
      })
    //TODO Handle this response from the server
  }

    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  /*toggleTodoStatus(todoId) {
    let todo = store.State.todo.find(todo => todo._id == todoId);
    if (document.querySelector("type=check-box"). == true) {
      //turn true
    } else {
      //keep false as not completed
    }*/

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //todoApi.put(todoId, todo);

    //TODO do you care about this data? or should you go get something else?



const todoService = new TodoService();
export default todoService;
