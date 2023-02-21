import express from 'express';
import {
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
} from '../controllers/taskController.js';

const router = express.Router();

router.post("/", createTask)

router.get("/", getTask)

router.get("/:id", getSingleTask)

router.delete("/:id", deleteTask)

router.put("/:id", updateTask)

export default router;