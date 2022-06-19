const express = require("express");
const dotenv = require("dotenv");
const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
const connectDB = require("./db/connect.js");
require("express-async-errors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//routers
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const productRouter = require("./routes/productRoutes.js");
const reviewRouter = require("./routes/reviewRoutes.js");
require("dotenv").config();
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET)); //allows us to access cookies in the request.
app.use(express.static("./public"));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/api/v1", (req, res) => {
  res.send("Welcome");
});

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);

//middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};
start();
