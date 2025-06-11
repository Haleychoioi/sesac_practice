const jwt = require("jsonwebtoken")
const SECRET_KEY = "sessac"

module.exports = function (req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  // 이미 오류 처리 미들웨어를 쓰고 있기 때문에 트라이-캐치를 쓰는 것보단 빠르게 감지하여 리턴
  req.password = "1234"
  if(req.password === "1111") {
    return next(new Error("password"))
  }

  const user = jwt.verify(token, SECRET_KEY)
  if(!user) {
    return next(new Error("Need login"))
  }

  req.user = user 
  return next()
}