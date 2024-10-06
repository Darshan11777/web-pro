import jwt from 'jsonwebtoken';

// Secret key for JWT signing and verification
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Function to generate a token
export function generateToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

// Function to verify a token
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid Token');
  }
}

// Middleware to protect routes by checking the JWT
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    const user = verifyToken(token);
    req.user = user; // Store user information in the request object
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
}
