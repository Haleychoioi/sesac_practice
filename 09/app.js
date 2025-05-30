const express = require("express")
const app = express();
const port = 3000

app.set("view engine", "ejs")

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.render("index", {title: "Get 실습"})
})

app.get("/getForm", (req, res) => {
  res.render("result",
    {
      title: "Get 요청 폼 결과 확인하기",
      userInfo: req.query
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})