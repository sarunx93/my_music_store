const CustomError = require("../errors");
const { isTokenValid } = require("../utils/jwt.js");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  console.log(token);
  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication Failed");
  }
  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (err) {
    throw new CustomError.UnauthenticatedError("Authentication Failed");
  }
};

const authorizedPermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthenticatedError(
        "Unauthorized to access this route"
      );
    }
    next();
  };
};

module.exports = { authenticateUser, authorizedPermissions };
