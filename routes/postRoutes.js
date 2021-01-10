const express = require("express");
const router = express.Router();
const db = require("../database/models");
require("dotenv").config();

router.get("/test", (req, res) => {
  res.send("test");
});

router.get("/all", async (req, res) => {
  const allPosts = await db.Post.findAll();
  res.send(allPosts);
});

router.get(`/color/:color`, async (req, res) => {
  const color = req.params.color;
  const colorSearch = await db.Post.findAll({
    where: {
      color: color,
    },
  });
  res.send(colorSearch)
});


module.exports = router;
