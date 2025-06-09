const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 3000;
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise()


app.post('/api/tables', async (req, res, next) => {
  const { tableName } = req.body
  // 테이블을 생성하는 쿼리
  await db.query(`
    CREATE TABLE ${tableName}
    (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      createAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  /* ?? res.json 과 res.send 차이는 무엇인가 ??
     ?? return이 꼭 필요한가 ??
  */
  return res.json({"message": "테이블 생성에 성공하였습니다."})
})

app.get('/api/tables', async (req, res, next) => {
  res.send("테이블 조회") 
})

app.post('/api/goods/:id', (req, res, next) => {
  res.send("데이터 값 등록") 
})

app.get('/api/goods/:id', (req, res, next) => {
  res.send("데이터 값 조회") 
})

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});