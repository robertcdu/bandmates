const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();



// Get all users
router.get(
  '/',
  userController.viewUsers,
  (req, res, next) => {
      res.status(200).json({ users: res.locals.users });
  }
);

// user login
router.get(
  '/login',
  userController.userLogin,
  cookieController.createCookie,
  (req, res) => {
      res
        .status(200)
        .json(res.locals.isLoggedIn);
    }
);

// Create a user
router.post(
  '/',
  userController.createUser,
  (req, res, next) => {
      res.status(200).json(res.locals.user);
  }
);

// Get one user
router.get(
  '/:id',
  userController.findUser,
  (req, res, next) => {
      res.status(200).json(res.locals.user);
  }
);

// Delete a user
router.delete(
  '/:id',
  userController.deleteUser,
  (req, res, next) => {
      res.sendStatus(200);
  }
);

// Update a user
router.patch(
  '/:id',
  userController.updateUser,
  (req, res, next) => {
      res.status(200).json(res.locals.user);
  }
);

module.exports = router;
