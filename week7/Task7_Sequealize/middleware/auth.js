const jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: 'Authorization token missing',
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Not Authorized',
    });
  }
};
const isAdmin = (req, res, next) => {
  const { role } = req.headers;

  if (role && role.toLowerCase() === 'admin') {
    return next();
  }
  return res.status(403).json({
    message: 'Not An Admin',
  });
};

const isSeller = (req, res, next) => {
  const { role } = req.headers;
  if (role && role.toLowerCase() === 'seller') {
    return next();
  }
  return res.status(403).json({
    message: 'Not A Seller',
  });
};

const isBuyer = (req, res, next) => {
  const { role } = req.headers;
  if (role && role.toLowerCase() === 'buyer') {
    return next();
  }
  return res.status(403).json({
    message: 'Not A Seller',
  });
};

module.exports = {
  isLogin,
  isBuyer,
  isSeller,
  isAdmin,
};
