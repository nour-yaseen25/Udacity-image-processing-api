"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//custom middleware function to log the request made to the server
const logger = (req, res, next) => {
    let url = req.url;
    console.log(`Request made to: ${url}`);
    next(); //call the next middleware function in the stack, or if there are no more middleware functions, it will call the route handler for the request.
};
exports.default = logger;
//# sourceMappingURL=loggor.js.map