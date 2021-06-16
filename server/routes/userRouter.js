const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

// page after login
router.get('/allusers', userController.viewUsers, (req, res, next) => {
	res.status(200);
});

// redirect to a page

router.post(
	'/login',
	userController.verifyUser,
	cookieController.createCookie,
	(req, res) => {
		res.status(200).json(res.locals.isLoggedIn);
	}
);

// Sign Up
router.post('/signup', userController.createUser, (req, res, next) => {
	res.status(200).json(res.locals.user);
});

// Get one user
router.get('/:id', userController.findUser, (req, res, next) => {
	res.status(200).json(res.locals.user);
});

// Delete a user
router.delete('/:id', userController.deleteUser, (req, res, next) => {
	res.sendStatus(200);
});

// Update a user
router.patch('/:id', userController.updateUser, (req, res, next) => {
	res.status(200).json(res.locals.user);
});

module.exports = router;
