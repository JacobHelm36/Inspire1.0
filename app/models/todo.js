export default class ToDo{

  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.complete = false
    this.user = "helm"
  }
  get Template(){
    return `
    <form>
      <ul>
        <li><input type="checkbox" class="form-check-input">${this.description}</li>
        <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this._id}')">DELETE</button>
      </ul>
    </form>
    
      `
  }
  get newTemp(){
    return `
    <form onsubmit="app.todoController.accept('${this._id}')>
      <button type="submit" class="btn btn-warning">COMPLETED</button>
      </div>
    </form>
    `
  }
}
//put your finished button after the <ul>