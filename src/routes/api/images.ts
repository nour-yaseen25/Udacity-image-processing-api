import express from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../utilities/resizeImage';

const router = express.Router();

router.get('/', async (req, res) => {
  const filename = req.query.filename as string;
const widthStr = req.query.width as string;
const heightStr = req.query.height as string;


  // Missing parameters
  if (!filename) {
    return res.status(400).send('Filename parameter is required');
  }

  const inputPath = path.resolve('assets/full', `${filename}.jpg`);

  // File does not exist
  if (!fs.existsSync(inputPath)) {
    return res.status(404).send('Image file not found');
  }

  if (!widthStr) {
    return res.status(400).send('Width parameters are required');
  }
  if (!heightStr) {
    return res.status(400).send('Height parameters are required');
  }

  const width = Number(widthStr);
  const height = Number(heightStr);

  if (isNaN(width) || isNaN(height)) {
    return res.status(400).send('Width and height must be valid numbers');
  }

  if (width <= 0 || height <= 0) {
    return res.status(400).send('Width and height must be positive numbers');
  }

  try {
    const outputPath = await resizeImage(filename, width, height);
    return res.status(200).sendFile(outputPath);
  } catch {
    return res.status(500).send('Error processing image');
  }
});

export default router;
