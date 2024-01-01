// controllers/adminController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import Student from '../models/Student.js';
import Task from '../models/Task.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const signUp = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      const admin = new Admin({
        email,
        password: hashedPassword,
      });
  
      await admin.save();
  
      res.json({ message: 'Admin signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const addStudent = async (req, res) => {
  const { name, email, department, password } = req.body;

  try {
    const student = new Student({ name, email, department, password });
    await student.save();

    res.json({ message: 'Student added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const assignTask = async (req, res) => {
  const { description, dueTime, studentId } = req.body;

  try {
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const task = new Task({ description, dueTime, student: studentId });
    await task.save();

    res.json({ message: 'Task assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
