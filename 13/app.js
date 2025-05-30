const express = require("express");
const app = express();
const port = 3000

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/public", express.static(__dirname + "/public"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})