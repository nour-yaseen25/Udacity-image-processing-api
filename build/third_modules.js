"use strict";
//A popular library for performing utility functions for things like arrays and numbers
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.add(3, 4)); //generic add function from lodash, not our custom one
// .d.ts files are declaration files that provide type information about JavaScript libraries.
//  They allow TypeScript to understand the types of variables, functions, 
// and classes in those libraries, enabling better type checking and autocompletion when using them in TypeScript code.
//npm run build to compile TypeScript to JavaScript, then npm start to run the compiled JavaScript code.
// To install a third-party library, you can use npm (Node Package Manager) to add it to your project.
// For example, to install the lodash library, you can run:
// npm install lodash
// This will add lodash to your project's dependencies and create a node_modules folder where the library is stored.
// To use the library in your TypeScript code, you can import it as follows:
// import _ from 'lodash';
// This allows you to use lodash functions in your TypeScript code, and if you have the appropriate type definitions installed (e.g., @types/lodash), you will get type checking and autocompletion for lodash functions.
// To install type definitions for a library, you can use npm as well. For example, to install type definitions for lodash, you can run:
// npm install @types/lodash --save-dev
// This will add the type definitions for lodash to your project's devDependencies, allowing TypeScript to understand the types of lodash functions when you import and use them in your code.
console.log(lodash_1.default.multiply(5, 8));
// using the multiply function from lodash, which we added to our custom type definitions in types/3rdparty/index.d.ts
//# sourceMappingURL=third_modules.js.map