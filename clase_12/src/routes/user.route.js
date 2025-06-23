//router
import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
// router.post("/:cant", userController.seedUser);

export default router;
