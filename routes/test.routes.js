import { Router } from "express";
import { postTest, getTest, deleteTest, putTest } from "../controllers/test.controllers.js";

const router = Router();


router.post("/hello", postTest);
router.get("/hello", getTest);
router.delete("/hello", deleteTest);
router.put("/hello", putTest);
export default router;
