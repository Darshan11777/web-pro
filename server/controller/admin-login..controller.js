import db from '../database/db.js';  // Use '.js' extension for ES modules
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const login= async (req, res) => {

  console.log('Cookies:', req.cookies);
  console.log('POST /login - Request received with body:', req.body);

  const { identifier, password } = req.body;

  if (!identifier || !password) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Email/Username and password are required' });
  }

  let query = 'SELECT * FROM users WHERE email = ? OR username = ?';
  db.query(query, [identifier, identifier], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    console.log('Database query results:', results);

    if (results.length === 0) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    console.log('User found:', user);

    // Ensure password and hashed password are defined
    if (!password || !user.password_hash) {
      console.log('Password or hashed password missing');
      console.log(user.password_hash);
      console.log(password);
      
      return res.status(500).json({ message: 'Server error' });
    }

    // Compare password
    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      if (!isMatch) {
        console.log('Invalid credentials');
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      console.log('Password match successful');
    console.log("twt",process.env.JWT_SECRET)
      // Generate token
      const token = jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: '1d' });
      console.log('Generated JWT token:', token);

      // Set cookie
      // res.cookie('token', token, {
      //   httpOnly: false, // Prevents JavaScript from accessing the cookie
      //   secure: false, // Set to true if using HTTPS in production
      //   maxAge: 3600000, // 1 hour
      //   sameSite: 'lax', // Helps with cross-site cookie issues
      // });

      
      res.cookie('token', token, {
        httpOnly: false,  // Optional, for security
        secure: false,    // Must be true in production with HTTPS
        sameSite: 'None' // Required for cross-origin cookies
      });
      
      // Log cookie details
      console.log('Token sent in cookie:', res.cookies); // Debugging cookies

      res.json({ message: 'Login successful', token });
    });
    });
  }
  export default login;