const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // replace with your frontend domain on production
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routers
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Connect DB
connectDB()
  .then(() => console.log("Database connection established..."))
  .catch((err) => console.error("Database cannot be connected!!", err));

// ❗️Don't use app.listen
module.exports = app;
