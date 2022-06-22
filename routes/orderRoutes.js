const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizedPermissions,
} = require("../middleware/authentication.js");
const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrder,
  createOrder,
  updateOrder,
} = require("../controllers/orderController.js");

router
  .route("/")
  .get(authenticateUser, authorizedPermissions("admin"), getAllOrders)
  .post(authenticateUser, createOrder);

router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrder);
router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
