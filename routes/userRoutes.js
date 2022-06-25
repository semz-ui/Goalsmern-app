const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/userController");

const router = express.Router();

const { protect } = require("../middleware/authMiddleWare");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
