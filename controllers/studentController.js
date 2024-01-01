// controllers/studentController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';
import Task from '../models/Task.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student || !bcrypt.compareSync(password, student.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ studentId: student._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const signUp = async (req, res) => {
    const { name, email, department, password } = req.body;
  
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      const student = new Student({
        name,
        email,
        department,
        password: hashedPassword,
      });
  
      await student.save();
  
      res.json({ message: 'Student signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getTasks = async (req, res) => {
  const { studentId } = req.params;

  try {
    const tasks = await Task.find({ student: studentId });

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const completeTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.status = 'completed';
    await task.save();

    res.json({ message: 'Task completed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
