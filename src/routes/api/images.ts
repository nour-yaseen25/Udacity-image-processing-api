import express from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../utilities/resizeImage';

const router = express.Router();

router.get('/', async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  // Missing parameters
  if (!filename) {
    return res.status(400).send('Filename parameter is required');
  }

  if (!width || !height) {
    return res.status(400).send('Width and height parameters are required');
  }

  if (width <= 0 || height <= 0) {
    return res.status(400).send('Width and height must be positive numbers');
  }

  const inputPath = path.resolve('assets/full', `${filename}.jpg`);

  // File does not exist
  if (!fs.existsSync(inputPath)) {
    return res.status(404).send('Image file not found');
  }

  try {
    const outputPath = await resizeImage(filename, width, height);
    return res.sendFile(outputPath);
  } catch (error) {
    return res.status(500).send('Error processing image');
  }
});

export default router;
