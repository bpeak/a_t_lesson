/*
  1) token 존재 체크
  2) token 으로 db 체크
  3) rows[0] 존재 여부에따라 응답
*/

const authMiddleware = (req, res, next) => {
  const access_token = req.headers.authorization;
  console.log(`header token : ${access_token}`);
  if (access_token) {
    req.user = {
      user_id: "kihyun0402",
      nick: "kihyunEE"
    };
    next();
  } else {
    res.json({
      msg: "token validation failed"
    });
  }
};

module.exports = authMiddleware;
