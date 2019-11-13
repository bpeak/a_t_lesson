const express = require("express");
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v1");
const fs = require("fs");
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();

app.use(bodyParser.json());
/*
  iat : issued At
*/

// const user = {
//   name: "KIM KIHYUN",
//   user_id: "kihyun0402"
// };

// const JWT_SECRET_KEY = "abcdefghijklmn";

// jwt.sign(user, JWT_SECRET_KEY, (err, token) => {
//   console.log(token);

//   jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
//     console.log(decoded);
//   });
// });

app.get("/", (req, res) => {
  fs.readFile("main.html", (err, data) => {
    res.send(data.toString());
  });
});

app.post("/login", (req, res) => {
  /*
    1) 로그인성공
    2) uuid 토큰 생성 ( access_token )
    3) db 저장
    4) token 전송
  */
});

app.get("/private", authMiddleware, (req, res) => {
  console.log(req.user);
  res.json({
    msg: "hello my user",
    data: [1, 2, 3, 4, 5]
  });
});

app.listen(80, () => {
  console.log("ok");
});
