"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teachers_1 = __importDefault(require("./api/teachers"));
const students_1 = __importDefault(require("./api/students"));
const school_1 = __importDefault(require("./api/school"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('Routes are working!');
});
routes.use('/teachers', teachers_1.default); //this will prefix all routes defined in the teachers file with /teachers, so the route defined in teachers.ts will be accessible at http://localhost:3000/api/teachers/
routes.use('/students', students_1.default); //this will prefix all routes defined in the students file with /students, so the route defined in students.ts will be accessible at http://localhost:3000/api/students/
routes.use('/school', school_1.default); //this will prefix all routes defined in the school file with /school, so the route defined in school.ts will be accessible at http://localhost:3000/api/school/
exports.default = routes;
//# sourceMappingURL=index.js.map