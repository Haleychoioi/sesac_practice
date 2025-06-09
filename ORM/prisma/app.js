import express from "express"
import userRouter from "./routers/user.router.js"
import viewUserRouter from "./routers/viewUser.router.js"

const app = express()
const PORT = 3000
app.use(express.json())

app.use("/", userRouter)
app.use("/", viewUserRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})