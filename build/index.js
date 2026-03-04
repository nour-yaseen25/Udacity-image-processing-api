"use strict";
// NOTE: This code has not been converted to TypeScript yet
/*
import arrays from './utilities/arrays.js';
import numbers from './utilities/numbers.js';
import strings from './utilities/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Matchers
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
*/
/*
Endpoint	An endpoint is the URL of the REST API with the method that gets,
adds to, or modifies the data of an API in some way */
/*Performing Tasks Before and After Tests
beforeAll()	Called once before all specs in a describe are run
beforeEach()	Called before each spec in a describe is run
afterAll()	Called once after all specs in a describe are run
afterEach()	Called after each spec in a describe is run
*/
/*Skipping or Specifying Tests*/
/*The following functions can be used to skip or specify tests:
xit()	Skips a spec
xdescribe()	Skips a describe block
fit()	Only runs a specific spec
fdescribe()	Only runs a specific describe block
*/
//setup express server
const express_1 = __importDefault(require("express"));
const loggor_1 = __importDefault(require("./utilities/loggor"));
const index_1 = __importDefault(require("./routes/index"));
//to test the routes, you can use a tool like Postman to send a GET request to http://localhost:3000/ and see if the response is 'Routes are working!'
//create your application 
const app = (0, express_1.default)();
const port = 3001;
//use the routes defined in the routes folder
app.use('/api', index_1.default); //this will prefix all routes defined in the routes folder with /api, so the route defined in routes/index.ts will be accessible at http://localhost:3000/api/
app.get('/countries', loggor_1.default, (req, res) => {
    res.send('countries!'); //send a response to the client when they access the root URL 
});
//when the url http://localhost:3000/countries is accessed, 
// the logger middleware function will be called first, 
// which will log the request made to the server, and then the response 'countries!' will be sent to the client.
app.get('/', (req, res) => {
    res.send('Hello World!'); //send a response to the client when they access the root URL 
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//npm run start to start the server and access it at http://localhost:3000
//nodemon to automatically restart the server when changes are made to the code
//csv().fromFile('data.csv')
//Create an endpoint for convert.
//  View the documentation for csvtojson to see how to use it.
// Map the data from the csv input file to the json output file.
// Use the fs module to read the csv file and write the json file.
// Test the endpoint using Postman or a similar tool to send a POST request with the csv file as the body of the request.
//npm run start to start the server and access the endpoint at http://localhost:3000/convert
//# sourceMappingURL=index.js.map