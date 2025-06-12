import { Router } from "express";
import userController from "../controllers/users.controller.js";
const router = Router();

// get
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
// post

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);

export default router;
