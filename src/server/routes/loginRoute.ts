export { };
import express, { Request, Response } from 'express';
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.loginUser, (req: Request, res: Response) => {
  res.status(200).json(res.locals.possibleUser)
})

module.exports = router;