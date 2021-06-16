const jwt = require('jsonwebtoken');
//const db = require('../models/usersModels');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
	try {
		const { ssid } = req.cookies;

		jwt.verify(ssid, 'key', (err, decoded) => {
			if (err) {
        res.locals.verifyUser = false;
        return next();
			}
		});

		return next();
	} catch (e) {
		return next({
			error: `userController.createUser; ERROR: ${error} `,
			message: 'Error occured in conrollers/userController.js',
		});
	}
};

// sessionController.startSession = async (req, res, next) => {
//   try {

//   } catch (e) {
//       return next({
//       error: `userController.createUser; ERROR: ${error} `,
//       message: 'Error occured in conrollers/userController.js'
//     });
//   }
// }

module.exports = sessionController;
