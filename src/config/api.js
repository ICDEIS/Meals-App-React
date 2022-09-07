

import { api_url } from "./config";

async function getMealbyId(mealId) {
   const response = await fetch(api_url + 'lookup.php?i=' + mealId)
   return await response.json()
}
async function getAllCategories() {
   const response = await fetch(api_url + 'categories.php')
   return await response.json()
}
async function getfilteredMealbyCatgs(catg) {
   const response = await fetch(api_url + 'filter.php?c=' + catg)
   return await response.json()
}
async function getSearchMeal(name) {
   const response = await fetch(api_url + 'search.php?s=' + name)
   return await response.json() 
}


export { getMealbyId, getAllCategories, getfilteredMealbyCatgs, getSearchMeal }