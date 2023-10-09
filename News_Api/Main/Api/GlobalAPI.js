import { create } from "apisauce";
import Category from "../Components/Category";

const api = create({
    baseURL: 'https://newsapi.org/v2',
   
  })

  const APIKEY="?country=us&apiKey=3c7b52b9b0d948a786ceabe4bd8824eb"

  //?country=us&apiKey=3c7b52b9b0d948a786ceabe4bd8824eb

  const getTopHeadlines=api.get("/top-headlines"+APIKEY)
 // https://newsapi.org/v2/everything?q=bitcoin&apiKey=3c7b52b9b0d948a786ceabe4bd8824eb
 const getbyCategory=(category)=>api.get('/everything?q='+category+"&apiKey=3c7b52b9b0d948a786ceabe4bd8824eb")


  export default {
    getTopHeadlines,
    getbyCategory
    
  }