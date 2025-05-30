// const express = require("express");
// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");
// app.set("views", "./view");
// app.use("./view", express.static(__dirname + "/view"));
// app.use(express.json());

// const users = [1,2,3,4,5];

// const posts = [
// 	{
// 		"id": 1,
// 		"userId": 2,
// 		"title": "첫 번째 글",
// 		"content": "안녕하세요 게시판입니다.",
// 		"createdAt": "2025-05-29T10:00:00Z"
// 	},
// 		{
// 		"id": 2,
// 		"userId": 2,
// 		"title": "두 번째 글",
// 		"content": "안녕하세요 게시판2입니다.",
// 		"createdAt": "2025-05-29T10:00:00Z"
// 	}
// ];

// app.get("/users", (req, res) => {
//   res.send(users.map(id => ({ id })))
// })
// app.post("/users", (req, res) => {
//   const userId = Number(req.body.id);
  
//   if(users.includes(userId)) {
//     res.send({
//       "error": "이미 존재하는 사용자입니다."
//     })
//   } else {
//     users.push(userId);
//     res.send({
//       "id": userId
//     })
//   }
// })
// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
  
//   if(users.includes(userId)) {
//     res.send({
//       "id": userId
//     })
//   } else {
//     res.send({
//       "error": "해당 사용자를 찾을 수 없습니다."
//     })
//   }
// })
// app.delete("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);

//   if(users.includes(userId)) {
//     users = users.filter(id => id !== userId);
//     res.send({
//       "message": "사용자가 삭제되었습니다."
//     })
//   } else {
//     res.send({
//       "error": "해당 사용자를 찾을 수 없습니다."
//     })
//   }
// })

// app.get("/posts", (req, res) => {
//   res.send(posts);
// })
// app.get("/posts/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const { title, content } = req.body;
//   const post = posts.find(post => post.id == id);
  
//   if(post) {
//     post.title = title;
//     post.content = content;
//     res.send(post);
//   } else {
//     res.send({
//       "error": "해당 게시물을 찾을 수 없습니다."
//     })
//   }
// })
// app.get("/users/:id/posts", (req, res) => {
//   const userId = Number(req.params.id);

//   if(users.includes(userId)) {
//     let userPosts = posts.filter(post => post.userId == userId);

//     res.send(userPosts)
//   } else {
//     res.send({
//       "error": "해당 사용자를 찾을 수 없습니다."
//     })
//   }
// })
// app.post("/posts", (req, res) => {
//   const { userId, title, content } = req.body;
//   const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
//   const newPost = {
//     userId,
//     title,
//     content,
//     id: newId,
//     createdAt: new Date().toISOString()
//   }

//   posts.push(newPost);
//   res.send(newPost);
// })
// app.put("/posts/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const { title, content } = req.body;
//   const post = posts.find(post => post.id == id);

//   post.title = title;
//   post.content = content;
//   post.updatedAt = new Date().toISOString();
//   res.send(post);
// })
// app.delete("/posts/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const index = posts.findIndex(post => post.id == id);

//   if(index === -1) {
//     res.send({
//       "error": "게시물을 찾을 수 없습니다."
//     })
//   } else{
//     posts.splice(index, 1);
//     res.send({"message": "게시글이 성공적으로 삭제되었습니다."});
//   }
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

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

const users = [1,2,3,4,5]

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