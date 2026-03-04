"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const school = express_1.default.Router();
school.get('/', (req, res) => {
    res.send('Routes for school!');
});
exports.default = school;
// This code defines a new router for the school endpoint. 
// When a GET request is made to the root of this router (which will be /api/school because of how it's used in routes/index.ts), it will respond with 'Routes for school!'.
//# sourceMappingURL=school.js.map