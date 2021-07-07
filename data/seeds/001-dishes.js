exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { dish_id: 1, dish_name: "beans" },
    { dish_id: 2, dish_name: "rice" },
    { dish_id: 3, dish_name: "carne asada" }
  ]);
};
