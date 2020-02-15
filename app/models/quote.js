export default class Quote{
  constructor(data) {
    this.quote = data.body
    this.author = data.author

  }
  get quoteTemplate(){
    return `
        <p>${this.quote}<br></p>
        <p>${this.author}</p>
        `
  }
}