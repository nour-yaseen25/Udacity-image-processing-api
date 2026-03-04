"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
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
    const inputPath = path_1.default.resolve('assets/full', `${filename}.jpg`);
    // File does not exist
    if (!fs_1.default.existsSync(inputPath)) {
        return res.status(404).send('Image file not found');
    }
    try {
        const outputPath = await (0, resizeImage_1.default)(filename, width, height);
        return res.sendFile(outputPath);
    }
    catch {
        return res.status(500).send('Error processing image');
    }
});
exports.default = router;
//# sourceMappingURL=images.js.map