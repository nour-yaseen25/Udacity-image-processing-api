/*
Use strong checks to prevent developer errors
One way to do this is to use noImplicitAny in tsconfig.json to prevent errors created by Typescript assuming Any type.
Turn on all strict checking by setting strict to true in your tsconfiig.json settings.

*/

//express server
//add to package.json
/*
"scripts": {
    "start":"nodemon src/index.ts" // to run with nodemon, which will automatically restart the server when changes are made to the code
   

}
*/
// npm run start to start the server
// node build/. to run the server without nodemon, which will not automatically restart the server when changes are made to the code

//middleware
/*
 Middleware is a function that has access to the request and response objects, and the next function in the application's request-response cycle.
Functionality that runs between a request to the server and the response from the server

//types of middleware
1. Built-in middleware: These are middleware functions that are included with Express.js, such as express.json() and express.urlencoded().
2. Third-party middleware: These are middleware functions that are created by third-party developers and can be installed using npm, such as cors and morgan.
3. Custom middleware: These are middleware functions that are created by the developer to perform specific tasks, such as authentication and error handling.

//Two ways to use middleware
1. Application-level middleware: This type of middleware is used for the entire application and is defined using the app.use() method. It can be used to perform tasks such as logging, authentication, and error handling.
2. Router-level middleware: This type of middleware is used for specific routes and is defined using the router.use() method. It can be used to perform tasks such as authentication and validation for specific routes.
3. Endpoint-level middleware: This type of middleware is used for specific endpoints and is defined using the app.get(), app.post(), etc. methods. It can be used to perform tasks such as validation and error handling for specific endpoints.
*/
