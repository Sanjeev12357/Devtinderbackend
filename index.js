const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Change to your frontend domain in production
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

// DB connect
connectDB()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ DB connection failed", err));

// ❗ No app.listen here
module.exports = app;
