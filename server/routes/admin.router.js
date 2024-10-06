import express from 'express'
import db from '../database/db.js';
import { adminLogin, check_auth,adminLogout,change_password, profile_img_change } from '../controller/admin.controller.js';
import bcrypt from 'bcryptjs'; // Import bcrypt
import userData from '../controller/user-data.controller.js'
import authenticateAdmin from '../middleware/authenticateAdmin.js'
import {validate} from '../middleware/validate-middleware.js';
import { adminPasswordChange } from '../validators/auth-validtor.js';
import image_middleware from '../middleware/image.middleware.js';
// import { adminLogin } from '../controller/data-user.controller.js';
// import authenticateAdmin from '../middleware/authenticateAdmin';
// import userData from '../controller/user-data.controller';
const router = express.Router();

// Get all items (Read)
// router.route('/user-data').get(userData);
router.route('/create').get(async(req, res) => {
    const hashedPassword = await bcrypt.hash('admin17', 10);

    const createTableQuery = `insert into admin(id,username,password,email) values(2,'admin45','${hashedPassword}','admin45@gmail.com')`


    ;
//     const createTableQuery = `
//      CREATE TABLE users (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     username VARCHAR(50) NOT NULL UNIQUE,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     password_hash VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );
//     `;
  
    db.query(createTableQuery, (err, results) => {
      if (err) {
        console.error('Error creating table:', err);
        return res.status(500).json({ error: 'Failed to create table' });
      }
  
      res.status(201).json({ message: 'Table created successfully', results });
    });
  });


  router.route('/login').post(adminLogin)
  router.route('/user-data').get(authenticateAdmin,userData)
  router.route('/check-auth').get(authenticateAdmin,check_auth)
  router.route('/logout').get(adminLogout)
  router.route('/change-password').post(authenticateAdmin,validate(adminPasswordChange),change_password)
  router.route('/change-profileImg').post(authenticateAdmin,image_middleware,profile_img_change)

  // router.route('/user-data').get(userData)
// router.post('/login',login );

export default router;