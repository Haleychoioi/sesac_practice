const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const userRouter = require("./routers/users.router")
// const cookieParser = require("cookie-parser")
// var session = require('express-session')
// var FileStore = require('session-file-store')(session)
// var fileStoreOptions = {
  //   resave : false
  // }
const errorHandleMiddleware = require("./middleware/error-handle-middleware")

app.use(express.json())
// app.use(cookieParser())
// app.use(session({
//     resave : false,
//     cookie : {
//       httpOnly : true
//     },
//     saveUninitialized : true, 
//     store : new FileStore(),
//     secret : 'keyboard cat'
// }))

app.use("/", [userRouter])

//에러 미들웨어
app.use(errorHandleMiddleware)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})









