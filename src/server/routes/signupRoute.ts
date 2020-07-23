export { };
import express, { Request, Response } from 'express';
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signUpUser, (req: Request, res: Response) => {
  res.status(200).json(res.locals.newUser)
})

module.exports = router;