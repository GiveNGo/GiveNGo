export {};
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

// bring in controllers
const requestController = require('./controllers/requestController');

// Bring in routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Nothing here yet');
});

// CONNECT TO MONGO DB
mongoose
  .connect(
    'mongodb+srv://louis-givengo:evee3833@givengo-data.rw3gb.azure.mongodb.net/givengo-data?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('connected to database'))
  .catch((err: Error) => console.log(err));

// mongoose.connection.on('connected', () => {
//   console.log('connected to database!');
// });

// mongoose.connection.on('error', (err: Error) => {
//   console.log('ERROR CONNECTING TO DATABASE: ', err);
// });

// get tasks route
app.get('/tasks', requestController.getTasks, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.tasks);
});

// postRequest route
app.post(
  '/tasks',
  requestController.postRequest,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.tasks);
  }
);

// deleteRequest route
app.delete(
  '/tasks/:id',
  requestController.deleteTask,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.tasks);
  }
);

// Global Error handler
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Set up default error
    const defaultError = {
      log: 'Error caught in global error handler',
      status: 500,
      msg: {
        err: err,
      },
    };

    // Update default error message with provided error if there is one
    const output = Object.assign(defaultError, err);
    res.send(output);
  }
);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
