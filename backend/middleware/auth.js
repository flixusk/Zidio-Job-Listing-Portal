// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ success: false, errors: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.user.id).select('-password'); // Exclude password from user object
    if (!req.user) {
      return res.status(401).json({ success: false, errors: 'User not found' });
    }
    next(); // Call next to pass control to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ success: false, errors: 'Token is not valid' });
  }
};
