const express = require("express")
const router = express.Router()

const users = require("./user")

router.get("/", (req, res) => {
  const tempRes = []
  users.forEach(user => {
    tempRes.push({
      "id": user,
      "test": "!!!"
    })
  })
  res.send(tempRes)
})

module.exports = router