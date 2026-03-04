import express from 'express'; 

//custom middleware function to log the request made to the server

const logger = (
    req: express.Request, 
    res: express.Response, 
    next: Function
): void => {
let url = req.url;

console.log(`Request made to: ${url}`);
next(); //call the next middleware function in the stack, or if there are no more middleware functions, it will call the route handler for the request.

};

export default logger;
