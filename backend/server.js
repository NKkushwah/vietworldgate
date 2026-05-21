const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");


// CONFIG
dotenv.config();


// DATABASE
connectDB();


// EXPRESS APP
const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use(
  "/api/appointments",
  require("./routes/appointmentRoutes")
);


// HOME ROUTE
app.get("/", (req, res) => {

  res.send("Server Running...");

});


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running On Port ${PORT}`
  );

});