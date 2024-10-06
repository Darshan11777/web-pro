import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Secret key for JWT signing and verification

// Middleware function to check JWT
const authenticateAdmin = (req, res, next) => {
  
  // Retrieve the token from cookies
  const token = req.cookies.admin;
 
  if (token) {
    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log("err in jwt verify", err); // Debugging output

        
        // return res.redirect('http://localhost:5173/admin/auth'); // Forbidden
        return res.status(401).json({ message: 'jwt authentication error' });
      }
      console.log("user", user); // Debugging output
      req.user = user;
      next();
    });
  } else {
    // res.redirect('/admin/auth/signin');
    console.log('error in jwt auth',token)
    // res.redirect('http://localhost:5173/admin/auth');
    res.status(401).json({ message: 'jwt authentication error' });
    // res.sendStatus(401); // Unauthorized
  }
};

export default authenticateAdmin;
