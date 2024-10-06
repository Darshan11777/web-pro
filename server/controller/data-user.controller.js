// const db = require('../database/db'); // Database connection
import db from '../database/db'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
function logLoginAttempt(userId, ipAddress, success, errorMessage = null) {
    const query = `INSERT INTO login_attempts (user_id, ip_address, success, error_message)
                   VALUES (?, ?, ?, ?)`;
                
    db.execute(query, [userId, ipAddress, success, errorMessage], (err, result) => {
        if (err) {
            console.error('Error logging login attempt:', err);
        } else {
            console.log('Login attempt logged successfully');
        }
    });
}

// Example usage for successful login
// logLoginAttempt(1, '192.168.1.100', true);


function startUserSession(userId, sessionToken, ipAddress, deviceInfo) {
    const query = `INSERT INTO user_sessions (user_id, session_token, ip_address, device_info)
                   VALUES (?, ?, ?, ?)`;

    db.execute(query, [userId, sessionToken, ipAddress, deviceInfo], (err, result) => {
        if (err) {
            console.error('Error starting user session:', err);
        } else {
            console.log('User session started successfully');
        }
    });
}

// Example usage for starting a session
// startUserSession(1, 'random_generated_token', '192.168.1.100', 'Chrome on Windows 10');


function endUserSession(sessionToken) {
    const query = `UPDATE user_sessions SET logout_time = CURRENT_TIMESTAMP WHERE session_token = ?`;

    db.execute(query, [sessionToken], (err, result) => {
        if (err) {
            console.error('Error ending user session:', err);
        } else {
            console.log('User session ended successfully');
        }
    });
}

// Example usage for ending a session
// endUserSession('random_generated_token');


function logUserActivity(userId, activityDescription, ipAddress) {
    const query = `INSERT INTO user_activity_log (user_id, activity, ip_address)
                   VALUES (?, ?, ?)`;

    db.execute(query, [userId, activityDescription, ipAddress], (err, result) => {
        if (err) {
            console.error('Error logging user activity:', err);
        } else {
            console.log('User activity logged successfully');
        }
    });
}

// Example usage for logging an activity
// logUserActivity(1, 'Updated profile information', '192.168.1.100');



// Route to get login attempts
app.get('/login-attempts', (req, res) => {
    const query = `SELECT u.username, la.attempt_time, la.ip_address, la.success, la.error_message
                   FROM login_attempts la
                   JOIN users u ON la.user_id = u.id
                   ORDER BY la.attempt_time DESC`;

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching login attempts' });
        } else {
            res.status(200).json(results);
        }
    });
});




// Route to get active sessions
app.get('/active-sessions', (req, res) => {
    const query = `SELECT u.username, us.session_token, us.login_time, us.logout_time, us.ip_address, us.device_info
                   FROM user_sessions us
                   JOIN users u ON us.user_id = u.id
                   WHERE us.logout_time IS NULL`;

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching active sessions' });
        } else {
            res.status(200).json(results);
        }
    });
});




// Mock database for demonstration purposes
var adminUser = {
  username: 'admin',
  password: '$2b$10$EixZQ5S2I3E2r8ClPxSQ9O3qFD8uZbZxKBLyY2sHwV1dKx7HpC9eK' // hashed password for "password"
};

// Login function
export const adminLogin = (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are correct
  if (username === adminUser.username && bcrypt.compareSync(password, adminUser.password)) {
    // Set a cookie
    res.cookie('admin', 'true', {
      httpOnly: true, // prevents client-side access to the cookie
    //   secure: process.env.NODE_ENV === 'production', // use secure cookies in production
      maxAge: 3600000 // 1 hour
    });

    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};
