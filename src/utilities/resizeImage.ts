import sharp from 'sharp';
// sharp is a high-performance image processing library for Node.js.
// It provides a simple and efficient way to resize, crop, rotate, and manipulate images in various formats.
// In this code, we are using sharp to resize an image to the specified width and height and save it to a new file.
// The sharp function takes the input image path as an argument and returns a Sharp instance that can be used to perform various image processing operations.
// We then call the resize method on the Sharp instance to resize the image to the specified width and height, and finally, we call the toFile method to save the resized image to the output path.

import fs from 'fs';
import path from 'path';

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const inputPath = path.resolve('assets/full', `${filename}.jpg`);
  const outputPath = path.resolve(
    'assets/thumb',
    `${filename}_${width}_${height}.jpg`
  );

  // Check if cached image exists
  if (fs.existsSync(outputPath)) {
    return outputPath;
  }

  // Resize and save
  await sharp(inputPath)
    .resize(width, height)
    .toFile(outputPath);

  return outputPath;
};

export default resizeImage;
