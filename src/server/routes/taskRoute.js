const express = require("express");
const router = express.Router();
const requestController = require('../controllers/requestController')

router.post(
  '/',
  requestController.postRequest,
  (req, res) => {
    return res.status(200).json(res.locals.tasks);
  }
);

// deleteRequest route
router.delete(
  '/:id',
  requestController.deleteTask,
  (req, res) => {
    return res.status(200).json(res.locals.tasks);
  }
);

// get tasks route
router.get('/', requestController.getTasks, (req, res) => {
  return res.status(200).json(res.locals.tasks);
});


module.exports = router;