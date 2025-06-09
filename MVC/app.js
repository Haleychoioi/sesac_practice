const express = require("express")
const app = express()
const PORT = 8000;
const indexRouter = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})