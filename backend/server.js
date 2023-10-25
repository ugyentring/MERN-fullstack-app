const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection successful");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.use("/api/user", userRoute);
