const express = require("express")
const usersRouter = require("./users")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", "./view")
app.use("./view", express.static(__dirname + "/view"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/users", usersRouter);

const users = require("./user")

const posts = [
	{
		"id": 1,
		"userId": 2,
		"title": "첫 번째 글",
		"content": "안녕하세요 게시판입니다.",
		"createdAt": "2025-05-29T10:00:00Z"
	},
		{
		"id": 2,
		"userId": 2,
		"title": "두 번째 글",
		"content": "안녕하세요 게시판2입니다.",
		"createdAt": "2025-05-29T10:00:00Z"
	}
]

app.get("/users", (req, res) => {
  const tempRes = []
  users.forEach(user => {
    tempRes.push({
      "id": user,
    })
  })
  res.send(tempRes)
})
app.post("/users", (req, res) => {
  const { id } = req.body
  
  if(users.includes(id)) {
    return res.send({ "error": "이미 존재하는 사용자입니다." })
  }
  // Early Return
  users.push(id)
  res.send({ id })
})
app.get("/users/:id", (req, res) => {  
  const { id } = Number(req.params)

  if(users.includes(id)) {
    return res.send({ id })
  }
  res.send({ "error": "해당 사용자를 찾을 수 없습니다." })
})
app.delete("/users/:id", (req, res) => {
  const { id } = Number(req.params)

  if(users.includes(id)) {
    for(let i = 0; i < users.length; i++) {
      if(users[i] === id) {
        users.splice(i, 1);
        break;
      }
    }
    return res.send({ "message": "사용자가 삭제되었습니다." })
  }
  res.send({ "error": "해당 사용자를 찾을 수 없습니다." })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})