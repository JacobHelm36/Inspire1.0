export default class Quote{
  constructor(data) {
    this.quote = data.body
    this.author = data.author

  }
  get quoteTemplate(){
    return `
        <p>${this.quote}</p>
        <p>${this.author}</p>
        `
  }
}