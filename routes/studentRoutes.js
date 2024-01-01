// routes/studentRoutes.js
import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.post('/login', studentController.login);
router.get('/tasks/:studentId', studentController.getTasks);
router.post('/sign-up', studentController.signUp);
router.patch('/completeTask/:taskId', studentController.completeTask);

export default router;
