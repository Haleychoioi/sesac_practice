const express = require("express")
const app = express();
PORT = 3000;

const usersRouter = require("./routers/Users.router.js")

app.use(express.json());
app.use('/', usersRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})