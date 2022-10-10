import express from "express";
import {
  createProject,
  createTask,
  deleteProject,
  getProjects,
  getTask,
  welcome,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", welcome);

router.get("/getProjects", getProjects);
router.post("/createProject", createProject);
router.post("/createTask", createTask);
router.post("/deleteProject", deleteProject);
router.post("/getTask", getTask);

export default router;
