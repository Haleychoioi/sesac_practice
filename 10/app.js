const express = require("express");
const app = express();
const port = 3000

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.render("index", {title: "폼 실습을 해봅시다."})
})

app.post("/postForm", (req, res) => {
  res.render("result",
    {
      title: "Post 폼 결과 확인하기",
      userInfo: req.body
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})