const jwt = require("jsonwebtoken")
const SECRET_KEY = "sessac"

module.exports = function (req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  // 이미 오류 처리 미들웨어를 쓰고 있기 때문에 트라이-캐치를 쓰는 것보단 빠르게 감지하여 리턴
  req.password = "1234"
  if(req.password !== "1111") {
    return next(new Error("password"))
  }
    
  if(!verifyToken) {
    return next(new Error("Need login"))
  }

  req.user = user 
  return next()
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch {
    return false // 이미 jwt.verify가 오류 검증을 하므로 여기서는 false만 넘김
  }
}