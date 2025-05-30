const express = require("express");

const aRouter = require("./a");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", "./view");
app.use("./view", express.static(__dirname + "/view"));
app.use("/a", aRouter); // a.js기준에서는 /a부터 확인하면 됨

const goods = [
    {
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
    }
];

app.get("/api/goods", (req, res) => {
  res.send({
    "goods": goods
  });
});

app.post("/api/goods", (req, res) => {
  res.send({
    "goods": [
    {
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
    },
    {
    "goodsId": 2,
    "goodName": "상품 2",
    "category": "drink",
    "price": 3000
    },
    ]
  });
})

app.get("/api/goods/:id", (req, res) => {
  res.send({
      "goodsId": 1,
      "goodName": "상품 1",
      "category": "drink",
      "price": 1000
    });
})

app.put("/api/goods/:id", (req, res) => {

  res.send({
    "goods": [
    {
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
    },
    {
    "goodsId": 2,
    "goodName": "상품 2",
    "category": "drink",
    "price": 5000
    },
    ]
  });
})

app.delete("/api/goods/:id", (req, res) => {
  res.send({
    "goods": [
      {
      "goodsId": 1,
      "goodName": "상품 1",
      "category": "drink",
      "price": 1000
      }
    ]
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});