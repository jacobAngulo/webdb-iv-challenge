exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_id: 1, ingredient_name: "beans" },
    { ingredient_id: 2, ingredient_name: "rice" },
    { ingredient_id: 3, ingredient_name: "meat" }
  ]);
};
