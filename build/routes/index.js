'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const teachers_1 = __importDefault(require('./api/teachers'));
const students_1 = __importDefault(require('./api/students'));
const school_1 = __importDefault(require('./api/school'));
const images_1 = __importDefault(require('./api/images'));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
  res.send('Routes are working!');
});
routes.use('/teachers', teachers_1.default); //this will prefix all routes defined in the teachers file with /teachers, so the route defined in teachers.ts will be accessible at http://localhost:3000/api/teachers/
routes.use('/students', students_1.default); //this will prefix all routes defined in the students file with /students, so the route defined in students.ts will be accessible at http://localhost:3000/api/students/
routes.use('/school', school_1.default); //this will prefix all routes defined in the school file with /school, so the route defined in school.ts will be accessible at http://localhost:3000/api/school/
routes.use('/images', images_1.default); //this will prefix all routes defined in the imageRoute file with /images, so the route defined in imageRoute.ts will be accessible at http://localhost:3000/api/images
exports.default = routes;
//sometimes the server may not stop properly when you stop it with Ctrl+C, and it may still be running in the background,
// which can cause issues when you try to start it again.
//To fix this, you can add a script to your package.json file that will kill all node processes, which will stop the server and allow you to start it again without any issues.
//Because the port is already in use, you can change the port number in your index.ts file to a different number, such as 3001, to avoid conflicts with any other processes that may be using the same port.
//To stop the server, you can use the command "npm run clean" in your terminal, which will kill all node processes and stop the server. After that, you can start the server again with "npm run start" and it should work without any issues.
//# sourceMappingURL=index.js.map
