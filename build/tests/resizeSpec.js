"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = __importDefault(require("../utilities/resizeImage"));
const fs_1 = __importDefault(require("fs"));
describe('Resize Utility', () => {
    it('should create a resized image file', async () => {
        const output = await (0, resizeImage_1.default)('fjord', 150, 150);
        expect(fs_1.default.existsSync(output)).toBeTrue();
    });
    it('should throw error for invalid image', async () => {
        try {
            await (0, resizeImage_1.default)('invalid', 100, 100);
        }
        catch (error) {
            expect(error).toBeDefined();
        }
    });
});
//# sourceMappingURL=resizeSpec.js.map