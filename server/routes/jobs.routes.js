import express from "express";
const router = express.Router();
import {
  addJobs,
  getAllJobs,
  getSingleJob,
} from "../controllers/jobs.controller.js";



router.post("/add", addJobs);
router.get("/", getAllJobs);
router.get("/:id", getSingleJob);


export default router;
