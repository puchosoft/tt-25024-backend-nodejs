import { Router } from "express";
import userController from '../controllers/users.controller.js'
const router = Router();

// get
router.get('/',userController.getAllUsers)
// post

router.post('/',userController.createUser)






export default router