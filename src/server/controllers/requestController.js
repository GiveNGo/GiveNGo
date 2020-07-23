// Bring in task model
const models = require('../models/taskSchema');

// create task controller
const requestController = {};

// add request middleware
requestController.postRequest = (req, res, next) => {
  const { owner, assignee, taskBody, taskType, fulfilled } = req.body;
  models
    .create({ owner, assignee, taskBody, taskType, fulfilled })
    .then((result) => {
      res.locals.tasks = result;
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in postRequest controller',
        message: { err: `Error: ${err}` },
      });
    });
};

// get tasks middleware
requestController.getTasks = (req, res, next) => {
  models
    .find()
    .exec()
    .then((taskList) => {
      res.locals.tasks = taskList;
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in getTasks controller',
        message: { err: `Error: ${err}` },
      });
    });
};

// delete task middleware
requestController.deleteTask = (req, res, next) => {
  const { id } = req.params;
  models
    .findByIdAndDelete(id)
    .exec()
    .then((taskList) => {
      res.locals.tasks = taskList;
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in deleteTasks controller',
        message: { err: `Error: ${err}` },
      });
    });
};

module.exports = requestController;
