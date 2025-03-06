import { Router } from "express";
import doorsController from "../controllers/doors.controller.js";

const router = Router();

router.post("/insertOne", doorsController.insert);
router.get("/getAll", doorsController.getAll);
router.get("/getOne/:id", doorsController.getOne);
router.put("/updateOne/:id", doorsController.updateOne);
router.delete("/deleteOne/:id", doorsController.deleteOne);

export default router;