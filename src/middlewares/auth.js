//auth middleware

export function passportAuthCustomer(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }
  return res.status(401).json({ message: "UNAUTHORIZED" });
}
