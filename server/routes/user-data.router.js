// backend/routes/items.js
import express from 'express';
import db from '../database/db.js';  // Use '.js' extension for ES modules
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import login from '../controller/login-controller.js';
import register from '../controller/register.controller.js';
import userData from '../controller/user-data.controller.js';
import authenticateJWT from '../middleware/authenticateJWT.js';
// import authenticateJWT from '../middleware/authenticateJWT.js/index.js';

const router = express.Router();

// Get all items (Read)
router.get('/user-data',authenticateJWT, userData );

router.post('/login',login );



// Register a new user
router.post('/register', register);
export default router;
