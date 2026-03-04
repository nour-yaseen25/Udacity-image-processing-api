"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const resizeImage = async (filename, width, height) => {
    const inputPath = path_1.default.resolve('assets/full', `${filename}.jpg`);
    const outputPath = path_1.default.resolve('assets/thumb', `${filename}_${width}_${height}.jpg`);
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