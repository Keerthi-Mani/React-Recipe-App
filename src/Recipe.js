import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>Calories: {calories}</h4>

      <img src={image} alt={title} />
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
};
export default Recipe;
