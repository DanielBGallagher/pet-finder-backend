require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const GETpostRoutes = require("./routes/GETpostRoutes");
const OTHERpostRoutes = require("./routes/OTHERpostRoutes");

app.use("/posts", OTHERpostRoutes);
app.use("/posts", GETpostRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Running on port: " + process.env.PORT);
});
