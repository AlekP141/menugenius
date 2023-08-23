
// https://developer.edamam.com/edamam-docs-recipe-api

const fetchRecipe = () => {
  let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_KEY}`
  const endOfUrl = "&random=true&field=image&field=url&field=yield&field=dietLabels&field=healthLabels&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=externalId"
}

export default fetchRecipe
