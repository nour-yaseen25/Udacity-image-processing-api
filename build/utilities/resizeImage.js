'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const sharp_1 = __importDefault(require('sharp'));
// sharp is a high-performance image processing library for Node.js.
// It provides a simple and efficient way to resize, crop, rotate, and manipulate images in various formats.
// In this code, we are using sharp to resize an image to the specified width and height and save it to a new file.
// The sharp function takes the input image path as an argument and returns a Sharp instance that can be used to perform various image processing operations.
// We then call the resize method on the Sharp instance to resize the image to the specified width and height, and finally, we call the toFile method to save the resized image to the output path.
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const resizeImage = async (filename, width, height) => {
  const inputPath = path_1.default.resolve('assets/full', `${filename}.jpg`);
  const outputPath = path_1.default.resolve(
    'assets/thumb',
    `${filename}_${width}_${height}.jpg`
  );
  // Check if cached image exists
  if (fs_1.default.existsSync(outputPath)) {
    return outputPath;
  }
  // Resize and save
  await (0, sharp_1.default)(inputPath)
    .resize(width, height)
    .toFile(outputPath);
  return outputPath;
};
exports.default = resizeImage;
//# sourceMappingURL=resizeImage.js.map
