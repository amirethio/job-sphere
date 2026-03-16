import express from "express";
const router = express.Router();
import { addJobs, getAllJobs } from "../controllers/jobs.controller.js";



router.post("/add", addJobs);
router.get("/", getAllJobs);


export default router;
