import QuoteService from "../services/quote-service.js";
import _store from "../store.js"
import store from "../store.js";


function drawQuote() {
  let template = ""
  let quoteHTML = _store.State.quote.quoteTemplate
  document.getElementById("quote-loc").innerHTML = template += quoteHTML


}
//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQuote)
    QuoteService.getQuote()
  }
}
