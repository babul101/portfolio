 const jwt = require('express-jwt');
 const jwksRsa = require('jwks-rsa');


//Middleware
exports.checkJWT = jwt({
    secret:jwksRsa.expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksRequestsPerMinute:15,
        jwksUri:'https://babul.auth0.com/.well-known/jwks.json'
    }),
    audience:'B5CzA3jaSJe524yr3QBQU80muz6TGjGU',
    issuer:'https://babul.auth0.com/',
    algorithms:['RS256']
})


// exports .checkJWT = function(req,res,next) {
//     const isValidToken = true;

//     if(isValidToken) {
    
//         next();
//     }else {
//         return res.status(401).send({title:'Not Authorized',detail:'Please login to access this page'})
//     }
// }