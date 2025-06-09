const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const db = require("./models")

async function  testDBConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("DB's Connected successfully.")
  } catch(e) {
    console.error("The DB connection failed.", e)
  }
}

testDBConnection()

app.post('/users', async (req, res) => {
  const { email, lastName, firstName } = req.body
 console.log(email, lastName, firstName )
 // // 기존에 DB에 이메일이 있는지 없는지 확인
 //   const existingUser = await prisma.users.findUnique({
 //     where : { email }
 //   })
 //   // 이메일이 있으면 중복 안내내
 //   if(existingUser){
 //     return res.send({
 //       message : "중복된 아이디가 있습니다."
 //     })
 //   }
 
 //   // 이메일 없으면 추가
 //   await prisma.users.create({
 //     data : {
 //       email,
 //       password,
 //       nickname
 //     }
 //   })
 //   return res.send({
 //     message : "회원가입 완료!"
 //   })
 
 })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})