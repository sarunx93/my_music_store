const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizedPermissions,
} = require("../middleware/authentication.js");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController.js");

const {
  getSingleProductReviews,
} = require("../controllers/ReviewController.js");

router
  .route("/")
  .post([authenticateUser, authorizedPermissions("admin")], createProduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post([authenticateUser, authorizedPermissions("admin")], uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizedPermissions("admin")], updateProduct)
  .delete([authenticateUser, authorizedPermissions("admin")], deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
