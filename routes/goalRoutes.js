const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  singleGoal,
} = require("../controller/goalController");
const { protect } = require("../middleware/authMiddleWare");

router.route("/").get(protect, getGoals).post(protect, setGoal);

// router.get("/", getGoals);

router.post("/single/:is", setGoal);

router
  .route("/:id")
  .delete(protect, deleteGoal)
  .put(protect, updateGoal)
  .get(protect, singleGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
