const express = require('express');
const app = express();
const PORT = 3000;
// const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cors()); 

const userRouter = require('./routes/userRouter');

app.use('/api/users', userRouter);

// unknown path handler
app.use('*', (req, res) => {
  res.status(404).send("Not Found");
});

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Middleware error',
    status: 500,
    message: {err: 'Error at middleware'}
  }
  
  const errObject = { defaultError, err };
  console.error(errObject);

  return res.json(errObject);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
