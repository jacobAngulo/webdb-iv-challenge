const express = require("express");
const router = express.Router();
const Dishes = require("../models/dishes/dishes-model");

router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dish = await Dishes.getDishesById(req.params.id);
    dish
      ? res.status(200).json(dish)
      : res.status(404).json({ message: "dish with that id does not exist" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/recipes", async (req, res) => {
  try {
    const recipes = await Dishes.getRecipesByDishId(req.params.id);
    recipes.length
      ? res.status(200).json(recipes)
      : res.status(404).json({ message: "dish with that id does not exist" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
