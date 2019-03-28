exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipe_id: 1, recipe_name: "refried beans", dish_id: 1 },
    { recipe_id: 2, recipe_name: "mexican rice", dish_id: 2 },
    { recipe_id: 3, recipe_name: "abuela's carne asada", dish_id: 3 }
  ]);
};
