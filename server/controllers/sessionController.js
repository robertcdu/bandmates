const db = require('../models/usersModels');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    
  } catch (e) {
      return next({
      error: `userController.createUser; ERROR: ${error} `,
      message: 'Error occured in conrollers/userController.js'
    });
  }
}

sessionController.startSession = async (req, res, next) => {
  try {
    
  } catch (e) {
      return next({
      error: `userController.createUser; ERROR: ${error} `,
      message: 'Error occured in conrollers/userController.js'
    });
  }
}

module.exports = sessionController;