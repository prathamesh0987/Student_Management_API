// routes.js
import express from 'express';
import adminRoutes from './routes/adminRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

const router = express.Router();

// You might have other routes or middleware to add here in the future

router.use('/admin', adminRoutes);
router.use('/student', studentRoutes);

export default router;
