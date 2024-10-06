import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Secret key for JWT signing and verification

// Middleware function to check JWT
const authenticateJWT = (req, res, next) => {
  const JWT_SECRET=process.env.JWT_SECRET;
  // Retrieve the token from cookies
  const token = req.cookies;
  console.log("twt",process.env.JWT_SECRET)
  
  console.log("token", token); // Debugging output
console.log(JWT_SECRET)
  if (token) {
    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log("err", err); // Debugging output

        
        return res.json('/admin'); 
        // return res.sendStatus(403); // Forbidden
      }
      console.log("user", user); // Debugging output
      req.user = user;
      next();
    });
  } else {
    res.redirect('/admin/auth/signin');
    res.sendStatus(401); // Unauthorized
  }
};

export default authenticateJWT;
