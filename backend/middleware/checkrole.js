// middleware/checkRole.js
module.exports = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ success: false, errors: 'Access denied' });
  }
  next();
};
