const db = require("../../data/dbConfig");

const getDishes = () => {
  return db("dishes");
};

const getDishesById = id => {
  return db("dishes")
    .where({ dish_id: id })
    .first();
};

const getRecipesByDishId = id => {
  return db("dishes")
    .join("recipes", "dishes.dish_id", "recipes.dish_id")
    .select("dishes.dish_id", "dishes.dish_name", "recipes.recipe_name")
    .where({ "dishes.dish_id": id });
};

module.exports = {
  getDishes,
  getDishesById,
  getRecipesByDishId
};
