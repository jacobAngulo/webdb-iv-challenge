exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients").insert([
    { recipe_ingredient_id: 1, quantity: 1, recipe_id: 1, ingredient_id: 1 },
    { recipe_ingredient_id: 2, quantity: 1, recipe_id: 2, ingredient_id: 2 },
    { recipe_ingredient_id: 3, quantity: 1, recipe_id: 3, ingredient_id: 3 }
  ]);
};
