// requirements?
const jwt = require('jsonwebtoken');

const cookieController = {};

cookieController.createCookie = (req, res, next) => {
	try {
		const token = jwt.sign({ data: res.locals.user._id }, 'key', {
			expiresIn: 60 * 10,
		});
		res.cookie('ssid', token, { httpOnly: true });
		next();
	} catch (err) {
		next({
			log: 'ERROR from cookieController.createCookie',
			message: { err: `Did not set cookie properly ERROR: ${err}` },
		});
	}
};

module.exports = cookieController;
