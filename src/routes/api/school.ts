import express from 'express';

const school = express.Router();

school.get('/', (req, res) => {
  res.send('Routes for school!');
});

export default school;

// This code defines a new router for the school endpoint.
// When a GET request is made to the root of this router (which will be /api/school because of how it's used in routes/index.ts), it will respond with 'Routes for school!'.
