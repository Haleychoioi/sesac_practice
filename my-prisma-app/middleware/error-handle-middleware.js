// 인자가 아래와 같이 있으면 오류 처리 미들웨어라고 인식함
module.exports = function (err, req, res, next) {
  console.log(err.message)
  switch(err.message) {
    case "password" : return res.status(400).send({
      errorMessage : "Incorrect password"
    })
    //break를 쓰면 통신이 끊겨서 return ?
    case "existMail" : return res.status(400).send({
      errorMessage : "Already existed mail address."
    })

    case "forbidden" : return res.status(401).send({
      errorMessage : "There's no authorization."
    })

    // 같은 에러메시지인 경우 일괄적으로도 핸들링이 가능하다.
    case 'UserNotFound':
    case 'Need login':
    case 'accessTokenNotMatched':
      return res.status(401).send({
        errorMessage: "You need to log in to continue.",
      })
  }
}