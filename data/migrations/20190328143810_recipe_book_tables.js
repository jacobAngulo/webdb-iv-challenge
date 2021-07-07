exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments("dish_id");

      tbl
        .string("dish_name")
        .notNullable()
        .unique();
    })
    .createTable("recipes", tbl => {
      tbl.increments("recipe_id");

      tbl
        .string("recipe_name")
        .notNullable()
        .unique();

      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("dish_id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments("ingredient_id");

      tbl
        .string("ingredient_name")
        .notNullable()
        .unique();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments("recipe_ingredient_id");

      tbl.integer("quantity").notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients");
};
