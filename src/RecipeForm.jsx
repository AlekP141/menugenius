import { useState } from "react";
import RadioButtons from "./RadioButtons";

const RecipeForm = () => {
  const diets = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];
  const cuisines = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
  ];
  const mealTypes = ["Breakfast", "Lunch", "Dinner"];

  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="query">
          Keyword
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            id="query"
            value={query}
            placeholder="Search Keyword"
          />
        </label>

        {diets.map((diet) => (
          <div key="dietRadio">
            <label>{diet}</label>
            <input type="radio" name="dietRadio" value={diet}/>
          </div>
          ))}

      </form>
    </div>
  );
};

export default RecipeForm;
