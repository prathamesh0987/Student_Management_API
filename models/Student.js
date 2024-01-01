// models/Student.js
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  export default Student;
