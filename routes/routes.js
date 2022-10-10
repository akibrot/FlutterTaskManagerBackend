import express from "express";
import {
  createProject,
  createTask,
  createUser,
  deleteProject,
  getProjects,
  getTask,
  getUsers,
  welcome,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", welcome);

router.get("/getProjects", getProjects);
router.post("/createProject", createProject);
router.post("/createTask", createTask);
router.post("/deleteProject", deleteProject);
router.post("/getTask", getTask);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);

export default router;
