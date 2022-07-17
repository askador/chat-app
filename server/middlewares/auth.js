const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({message: "Не авторизован"})
  }

  const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
  if (!token) {
    return res.status(401).json({message: "Не авторизован"})
  }
  const decoded = jwt.verify(token, process.env.JWT_KEY)
  req.user = decoded
  next()
};