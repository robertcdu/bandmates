const path = require('path');
const express = require('express');
const userController = require('../controllers/userController');
const httpMocks = require('node-mocks-http');


const db = path.resolve(__dirname, '../server/models/usersTestModels.js');

describe('db unit tests', () => {

  afterAll((done) => {
    // reset test database
  });

  describe('verifyUser', async () => {
    it('query will find existing username and password match', () => {
      
      const mockReq = httpMocks.createRequest();
      const mockRes = httpMocks.createResponse();
      
      // hardcoded middleware test
      const requestBody = { username: 'IanG', password: 'password' };
      const sql = 'SELECT username, password_digest, _id FROM users WHERE username=$1 AND password_digest=$2'
      // const response = await db.query(sql, [requestBody.username, requestBody.password]);

      userController.verifyUser;
      expect(response).not.toBeInstanceOf(Error);
      expect(res.locals.userVerified).toEqual(true);
      expect(res.locals.users).toEqual(response);

      test.done();
    });

    it('route handler works', () => {
      
      const mockReq = httpMocks.createRequest();
      const mockRes = httpMocks.createResponse();
      
      // hardcoded middleware test
      const requestBody = { username: 'IanG', password: 'password' };
      const sql = 'SELECT username, password_digest, _id FROM users WHERE username=$1 AND password_digest=$2'
      // const response = await db.query(sql, [requestBody.username, requestBody.password]);

      userController.verifyUser;
      expect(response).not.toBeInstanceOf(Error);
      expect(res.locals.userVerified).toEqual(true);
      expect(res.locals.users).toEqual(response);

      test.done();
    });

    // describe('#sync', () => {
    //   it('writes a valid marketList to the JSON file', () => {
    //     const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
    //     const result = db.sync(marketList);
    //     expect(result).not.toBeInstanceOf(Error);
    //     const table = JSON.parse(fs.readFileSync(testJsonFile));
    //     expect(table).toEqual(marketList);
    //   });
  });