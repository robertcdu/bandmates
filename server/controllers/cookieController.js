// requirements?
const jwt = require('jsonwebtoken');

const cookieController = {};

cookieController.createCookie = (req, res, next) => {
    try {
      const token = jwt.sign(res.locals.user._id, 'key');
      res.cookie("ssid", token, {httpOnly: true});
      next();
    } catch (err) {
      next({
        log: "ERROR from cookieController.createCookie",
        message: { err: `Did not set cookie properly ERROR: ${err}` },
      });
    }
};

module.exports = cookieController;