export default class ToDo{

  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.complete = false
    this.user = "Jacob"
  }
  get Template(){
    return `
    <form>
      <ul>
        <li><input type="checkbox" class="form-check-input">${this.description}</li>
        <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')">DELETE</button>
        <button class="btn btn-success" onclick="app.todoController.markComplete('${this.id}')">FINISHED</button>
      </ul>
    </form>
      `
  }
}