import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.post("/insertOne", usersController.createUser);
router.get("/getAll", usersController.getUsers);
router.get("/getOne/:id", usersController.getUserById); 
router.put("/updateOne/:id", usersController.updateUser);
router.delete("/deleteOne/:id", usersController.deleteUser);

export default router;