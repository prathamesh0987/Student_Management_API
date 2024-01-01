// models/Task.js
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  dueTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'overdue', 'completed'],
    default: 'pending',
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
