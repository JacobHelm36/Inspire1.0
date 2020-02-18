import store from "../store.js";
import toDo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/helm/todos/",
  timeout: 8000
});

class TodoService {
  removeTodo(todoId) {
    /*let work = store.State.myTodo.find(res => {
      res._id == todoId
    })*/
    todoApi
    .delete(todoId)
    //how do I reference the specific ID?
    .then(res => {
      let myTasks = store.State.myTodo.findIndex(t => t._id == todoId)
      store.State.myTodo.splice(myTasks, 1)
      //use findIndexOf for the index
      //return myTasks
      store.commit("myTodo", store.State.myTodo)
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  
  //get initial obj and store it in local storage
  //wont add to existing
  // addMyTodo(todo) {
  //   let newTodo = new toDo(todo)
  //   let myToDo = [...store.State.todo, newTodo];
  //   store.commit("todo", myToDo);
  //   console.log(store.State.todo, "1234")
  // }
  //posts obj from local storage
  addMyTodo(todo){
    todoApi
    .post("", todo)
    .then(res => {
      let newTasks = new toDo(res.data.data)
      let myTasks = [...store.State.myTodo, newTasks]
      store.commit("myTodo", myTasks)
      console.log(store.State.myTodo)
    })
    .catch(err => {
      throw new Error(err);
    });
  }
  
  toggleTodoStatus(todoId) {
    let todo = store.State.myTodo.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    
    todoApi.put(todoId, todo).then(res => {
      res.toggleTemplate
    })
  }
  //gets all current objs in API
  getTodos() {
    todoApi
    .get("")
    .then(res => {
      let newToDo = res.data.data.map(t => new toDo(t))
      store.commit("myTodo", newToDo)
      console.log(store.State.myTodo, "checking inventory")
    })
    .catch(error => {
      console.error(error)
    })
    //TODO Handle this response from the server
  }
  
  //TODO Handle this response from the server (hint: what data comes back, do you want this?)
}


    //TODO do you care about this data? or should you go get something else?



const todoService = new TodoService();
export default todoService;
