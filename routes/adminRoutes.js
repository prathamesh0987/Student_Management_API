// routes/adminRoutes.js
import express from 'express';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', adminController.login);
router.post('/addStudent', adminController.addStudent);
router.post('/sign-up', adminController.signUp);
router.post('/assignTask', adminController.assignTask);

export default router;
