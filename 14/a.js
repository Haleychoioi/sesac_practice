const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("!!!");
});

// router.get("/a", (req, res) => {
//   res.send("!!!");
// }); 확인

module.exports = router;