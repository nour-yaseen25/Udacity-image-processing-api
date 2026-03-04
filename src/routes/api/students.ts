import express from 'express';

const students = express.Router();

students.get('/', (req, res) => {
  res.send('Routes for students!');
});

export default students;

