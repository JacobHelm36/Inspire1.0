import Quote from "../models/quote.js";
import _store from "../store.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  getQuote(){ 
    _quoteApi
      .get("")
      .then(res => {
        let quotes = new Quote(res.data.quote)
        _store.commit("quote", quotes)
      })
  }
}

const quoteService = new QuoteService();
export default quoteService;
