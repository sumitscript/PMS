const express = require('express');
const app = express();
const userRoute = require("./routes/user.route.js");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
const port = process.env.PORT || 4000;

// Express middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use("/api/user", userRoute);  

// MongoDB connection 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("Connected to DB");
      app.listen(port, () => {
          console.log(`Application is running on http://localhost:${port}`);
      });
  })
  .catch(() => {
      console.log("Failed to connect to DB");
  });
