import express from 'express';

const teachers = express.Router();

teachers.get('/', (req, res) => {
  res.send('Routes for teachers!');
});

export default teachers;
