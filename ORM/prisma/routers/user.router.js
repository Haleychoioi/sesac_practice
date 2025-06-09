import express from "express"
import { prisma } from "../utils/prisma/index.js"
const router = express.Router();

// 새로운 유저 추가
router.post('/users', async (req,res,next)=>{
  const { email, password, nickname } = req.body
  try {
// 기존에 DB에 이메일이 있는지 없는지 확인
  const existingUser = await prisma.users.findUnique({
    where : { email }
  })
  // 이메일이 있으면 중복 안내
  if(existingUser){
    return res.send({
      message : "중복된 아이디가 있습니다."
    })
  }

  // 이메일 없으면 추가
  await prisma.users.create({
    data : {
      email,
      password,
      nickname
    }
  })
  return res.send({
    message : "회원가입 완료!"
  })
  }catch(e){
    console.log(e)
  }

})

export default router