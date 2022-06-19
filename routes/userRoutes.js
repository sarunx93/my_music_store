const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizedPermissions,
} = require("../middleware/authentication.js");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

router.get(
  "/",
  authenticateUser,
  authorizedPermissions("admin", "owner"),
  getAllUsers
);
router.get("/showMe", authenticateUser, showCurrentUser);
router.patch("/updateUser", authenticateUser, updateUser);
router.patch("/updateUserPassword", authenticateUser, updateUserPassword);
router.get("/:id", authenticateUser, getSingleUser);

module.exports = router;
