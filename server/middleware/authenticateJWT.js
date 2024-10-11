import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Middleware function to check JWT from cookies
const authenticateJWT = (req, res, next) => {
  // Retrieve the token from the 'admin' cookie
  const token = req.cookies?.admin;

  console.log(token);
  

  if (token) {
    // Verify the token with the secret key
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log('Error in JWT verification:', err); // Log the error for debugging

        // Redirect to the admin authentication page if the token is invalid or expired
        return res.redirect('admin/auth/signin');
      }
      return res.redirect('/admin/auth/signin');

      console.log('Authenticated user:', user); // Log the user for debugging

      // Attach the user object to the request object
      req.user = user;

      // Proceed to the next middleware or route handler
      next();
    });
  } else {
    // If no token is found, redirect to the sign-in page
    console.log('No JWT token found in cookies.');
    return res.redirect('http://localhost:5173/');
    return res.redirect('/admin/auth/signin');
  }
};

export default authenticateJWT;
