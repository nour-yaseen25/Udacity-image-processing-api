/*
When creating files for tests, 
a best practice is to name the .ts file the same as the .js file to be tested 
with Spec appended to the end. The more tests needed to be run, the more test files will need to be created. 
Be sure to follow this best practice to keep track of the test file that contains the tests for each .js file.
*/

/*Jasmine is a testing framework for JavaScript and TypeScript that allows developers to write tests for their code.
Jasmine provides a set of functions and matchers that can be used to write tests for JavaScript and TypeScript code.
Jasmine tests are written in a describe block, which is used to group related tests together. 
Each test is written in an it block, which contains the actual test code. 
Matchers are used to compare the expected value with the actual value returned by the code being tested.
*/

/*
import myFunc from '../index';
import arrays from '../utilities/arrays.js';

const numArr = [3, 4, 5, 6];
it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

it('expect arrays.addArr(numArr) to equal 18', () => {
  expect(arrays.addArr(numArr)).toEqual(18);
});
*/

//npm run jasmine to run the tests in the spec folder, and it will look for files that end with Spec.ts and run the tests in those files.

/*Jasmine uses Suites and Specs
Spec: an individual test
Suite: a collection of similar tests related to one function
Tests should cover all intended behaviors.
Error handling should also be tested
*/
/*
Comparisons
Can compare strings, numbers, objects, or arrays
.toEqual(expected value) checks if the tested value is equal to the expected value
.toBe(expected reference) checks if tested object is the same object
*/

/*
Test Types
Truthiness
.toBeTruthy() passes when
The expectation has any non-zero value
The expectation evaluates to true
.toBeFalsy() passes when the value is:
0
'' (an empty string)
undefined
null
NaN
If you just need the Boolean value of false, use .toEqual()
Numerical Matchers
.toBeCloseTo(expected value, precision)
Passes if a value is within a specified precision of the expected value
Precision is optional and is represented the number of decimal points to check (defaults to 2)
.toBeGreaterThan(expected value)
.toBeLessThan(expected value)
.toBeGreaterThanOrEqual(expected value)
.toBeLessThanOrEqual(expected value)
Negating Other Matchers
In JavaScript, use the ! to negate
In TypeScript, use not
In Jasmine, use .not
Exceptions
.toThrow(expected value)
.toThrowError(expected value, expected message) (expected value and expected message are optional)
Other Matchers
.toContain(expected value)
.toMatch(expected value)
.toBeDefined()
.toBeUndefined()
.toBeNull()
.toBeNan()
Custom matchers */

//The output of the tests
/*
PS C:\Users\User\OneDrive\Desktop\course information\Udacity\Typescripts> npm run build  

> typescript@1.0.0 build
> npx tsc

PS C:\Users\User\OneDrive\Desktop\course information\Udacity\Typescripts> npm run jasmine

> typescript@1.0.0 jasmine
> jasmine

[ 3, 4, 6, 'cat', 'dog', 'rabbit', 'bird' ]
19
The Quick Brown Fox
40
6
Jasmine started

  Top level suite
    √ expect myFunc(5) to equal 25
    √ expect arrays.addArr(numArr) to equal 18
 */

/*Testing Asynchronous Code
The key to testing async code is letting Jasmine know when it’s ready to be tested.

Using async/await syntax makes testing easier
Jasmine syntax mimics JavaScript syntax
Add async before the asynchronous function call
Add await before the return
Testing occurs after the return
Using promise syntax with Jasmine
Promise values are included in the return statement
Test is run in the .then() statement that is chained to the return value
Testing promise resolution and rejection with ES6 Promise Matchers Library(opens in a new tab)
.toBeResolved() tests if a promise is resolved and will return true if the promise is resolved
.toBeRejected() tests if a promise is rejected and will return true if the promise is rejected
.toBeRejectedWith(expected value) tests if the expected error is returned
*/

/*Organize Test Folders
A common practice is to create a spec folder in the root directory of the project to hold all test files.
The test files should be named the same as the .js file to be tested with Spec appended to the end.
For example, if the .js file is named index.js, the test file should be named indexSpec.ts.
This helps to keep track of the test files and the functions they are testing.
Create a utilities folder in tests and separate the specs onto 
their respective files to match the structure of the src folder.
For example, if there is a utilities folder in src with arrays.js, numbers.js, and strings.js, there should be a utilities folder in tests with arraysSpec.ts, numbersSpec.ts, and stringsSpec.ts.
This helps to keep track of the test files and the functions they are testing.
*/

/*The Testing Pyramid
Unit Tests
Test individual functions or methods
Should be the most common type of test
Integration Tests   
Test how different functions or methods work together
Should be less common than unit tests
End-to-End Tests
Test the entire application from start to finish
Should be the least common type of test
End-to-end tests are the most expensive to run and maintain, so they should be used sparingly.
Unit tests are the least expensive to run and maintain, so they should be used more frequently than integration and end-to-end tests.
The testing pyramid is a best practice for organizing tests and ensuring that the most important tests are run more frequently than less important tests.
*/

import supertest from 'supertest';

// supertest is a library that allows you to test HTTP endpoints in your application.
// It provides a high-level API for making HTTP requests and asserting the responses.
// In this code, we are using supertest to test the endpoints of our Express application.
// We create a request object by passing our app to supertest,
// and then we can use this request object to make HTTP requests to our endpoints and assert the responses.

import app from '../index';
const request = supertest(app);

describe('Test endpoint responses', () => {
  it('returns 200 for base endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('returns 400 if missing params', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });

  it('returns 200 for valid image resize request', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});
