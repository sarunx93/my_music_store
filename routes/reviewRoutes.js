const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authentication.js");
const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controllers/ReviewController.js");

//only when a user logs in that he or she can create a review
router.route("/").post(authenticateUser, createReview).get(getAllReviews);
router
  .route("/:id")
  .get(getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

module.exports = router;
