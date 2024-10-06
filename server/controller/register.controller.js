import db from '../database/db.js';  // Use '.js' extension for ES modules
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register =async(req,res)=>{
    console.log('POST /register - Request received with body:', req.body);
  
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      console.log('Missing required fields');
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if user already exists
      let query = 'SELECT * FROM users WHERE email = ? OR username = ?';
      db.query(query, [email, username], async (err, results) => {
        if (err) {
          console.error('Database query error:', err);
          return res.status(500).json({ message: 'Server error' });
        }
  
        if (results.length > 0) {
          console.log('User already exists');
          return res.status(400).json({ message: 'User already exists' });
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Password hashed:', hashedPassword);
  
        // Insert new user into the database
        query = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, results) => {
          if (err) {
            console.error('Database insert error:', err);
            return res.status(500).json({ message: 'Server error' });
          }
  
          console.log('User registered successfully');
          res.status(201).json({ message: 'User registered successfully' });
        });
      });
    } catch (err) {
      console.error('Error during registration:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
  export default register;