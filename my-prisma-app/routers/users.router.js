const express = require("express")
const router = express.Router()

const jwt = require("jsonwebtoken")
const SECRET_KEY = "sessac"

const authenticateToken = require("../middleware/authenticateToken-middleware")

// 최근에는 세션에서 로그인 정보를 관리하지는 않음
router.get("/set-session", (req, res, next) => {
  console.log(req.session.users);
  if(!req.session.users) {
      req.session.users = 1;  
    } else {
      req.session.users += 1
    }
  res.send({
    "Connected Users" : req.session.users
  })
}) 

router.get("/login", (req, res, next) => {
  const user = { // 너무 중요한 정보는 넣지말 것(보통은 데이터베이스에서 끌어옴)
    id : 1,
    username : "홍길동",
    role : "user"
  }

  // 데이터, 시크릿키, 옵션 => 자동으로 토큰이 생김
  const token = jwt.sign(user, SECRET_KEY, {
      expiresIn : "5s"
    })
  // console.log(token)

  // next 사이에 에러가 발생하면, 에러 미들웨어가 있다면 거기로 에러가 보내짐, 한 번에 관리하기 좋음
  // 에러가 발생한 상황이라고 가정
  // next(new Error("forbidden"));

  return res.json({
    token
  })
})

//소괄호 필요 없음, 두번째 인자인 콜백을 먼저 실행, 미리 검증/데이터 가공(req, res)
router.get("/user", authenticateToken, (req, res, next) => {
console.log(req.user);
// next 사이에 에러가 발생하면, 에러 미들웨어가 있다면 거기로 에러가 보내짐, 한 번에 관리하기 좋음
// 에러가 발생한 상황이라고 가정
// next(new Error("forbidden"));
})

/* 미들웨어 파일로 옮겨둠 */
// function authenticateToken(req, res, next) { // next 사용 시 넣어주어야함
//   const authHeader = req.headers["authorization"]
//   const token = authHeader && authHeader.split(" ")[1]
  
//   // console.log(authHeader)
//   // console.log(authHeader.split(" ")[0])
//   // console.log(token)

//   const user = jwt.verify(token, SECRET_KEY)
//   // console.log(user)
//   req.user = user // req에 해석한 user값을 담아 위 router.get /user가 실행됨

//   next() // 리턴을 별도로 사용하지않음, 미들웨어에서 next를 만나면 다음으로 넘어가라는 뜻, 즉 위 router.get /user (req, res)로 넘어감
// }

router.get("/set-cookie", (req, res, next) => {
  res.cookie("login", "true") // send, json 등이 응답 처리/cookie는 아님
  return res.send("cookie set")
})

router.get("/get-cookie", (req, res, next) => {
  const cookies = req.cookies
  return res.json({
    cookies
  })
  // res는 응답이므로 서버가 함, cookie는 브라우저에 있으므로 req에 담김
})

module.exports = router

