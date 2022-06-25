const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");
const { protect } = require("../middleware/authMiddleWare");

router.route("/").get(protect, getGoals).post(protect, setGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
