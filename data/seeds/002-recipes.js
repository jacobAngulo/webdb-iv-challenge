exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipe_id: 1, recipe_name: "refried beans", dish_id: 1 },
    { recipe_id: 2, recipe_name: "mexican rice", dish_id: 2 },
    { recipe_id: 3, recipe_name: "abuela's carne asada", dish_id: 3 },
    { recipe_id: 4, recipe_name: "spicy beans", dish_id: 1 },
    { recipe_id: 5, recipe_name: "white rice", dish_id: 2 },
    { recipe_id: 6, recipe_name: "tio's asada", dish_id: 3 }
  ]);
};
