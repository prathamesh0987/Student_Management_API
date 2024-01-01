// models/Admin.js
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();

const adminSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  export default Admin;
