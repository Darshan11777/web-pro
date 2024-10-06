// adminController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import jwt for token generation
import db from '../database/db.js';
import { generateToken } from '../utility/jwt_auth.js';

const adminLogin = async (req, res) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ message: 'Username or email and password are required.' });
    }

    try {
        // Fetch admin user by username or email
        db.query('SELECT * FROM admin WHERE username = ? OR email = ?', [identifier, identifier], async (err, rows) => {
            if (err) {
                console.error('Error during login:', err);
                return res.status(500).json({ message: 'Internal server error.' });
            }
            if (rows.length === 0) {
                return res.status(401).json({ message: 'Invalid credentials.' });
            }

            const user = rows[0];

            // Compare the password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials.' });
            }
              console.log({profile_img:user.profile_image});
              
            // Generate JWT
            const token = jwt.sign({ id: user.id, username: user.username ,profile_img:user.profile_image}, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Set cookie with the JWT
            // res.cookie('admin', token, {
            //     httpOnly: true, // Prevent client-side access to the cookie
            //     secure: true, // Use secure cookies in production
            //     maxAge: 3600000, // 1 hour
            //     sameSite: 'None',
            // });
            res.cookie('admin', token, {
                httpOnly: false,  // Optional, for security
                secure: true,    // Must be true in production with HTTPS
                sameSite: 'None' // Required for cross-origin cookies
              });
              
            // res.cookie('admin', token, {
            //     httpOnly: true,
            //     secure: false, 
            //     sameSite: 'None',
            //   });

            return res.status(200).json({ message: 'Login successful.', user: { id: user.id, username: user.username ,profile_img:user.profile_img},token:token });
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

const check_auth = async(req,res)=>{

const user=req.user

// const token=generateToken({ id: user.id, username: user.username ,profile_img:user.profile_image})



// Set cookie with the JWT
// res.cookie('admin', token, {
//     httpOnly: true, // Prevent client-side access to the cookie
//     secure: true, // Use secure cookies in production
//     maxAge: 3600000, // 1 hour
//     sameSite: 'None',
// });

db.query("select * from admin where id= ?",[user.id],(err,result)=>{
  if(err){
    res.status(400).json({ message: 'err in Check_auth.', err});
  }
  if (!result || result.length === 0) {
    return res.status(404).json({ message: 'User not found.' });
  }
  const newUser=result?.[0]
  console.log("new user",newUser)
  const token = jwt.sign({ id: newUser.id, username: newUser.username ,profile_img:newUser.profile_image}, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  res.cookie('admin', token, {
    httpOnly: false,  // Optional, for security
    secure: true,    // Must be true in production with HTTPS
    sameSite: 'None' // Required for cross-origin cookies
  });
  return res.status(200).json({ message: 'Login successful.',user:result[0]});
})



}

 const adminLogout = (req, res) => {
    res.clearCookie('admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'None', 
    });
    res.status(200).json({ message: 'Logout successful' });
};


const change_password=async(req,res)=>{
    const {  newPassword ,oldPassword} = req.body;
    
    
    const admin=req.user
    
        // Fetch the admin from the database
  db.query('SELECT * FROM admin WHERE id = ?', [admin.id],async (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).send('User not found');
    }
 
    
      const checkPassword= await bcrypt.compare(oldPassword, result[0].password)
        
        
        
    if(!checkPassword){
      return res.status(404).json('Old password is incorrect');
    }
    
    const admin = result[0];

    // Hash the new password
    bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        return res.status(500).send('Error hashing password');
      }

      // Update the password in the database
      db.query('UPDATE admin SET password = ? WHERE id = ?', [hashedPassword, admin.id], (updateErr) => {
        if (updateErr) {
          return res.status(500).send('Error updating password');
        }

        return res.status(200).send('Password changed successfully');
      });
    })});
     
}

 const profile_img_change= async(req, res) => {
  try {
    const user=req.user
    let profileImagePath = "";

    // Handle image upload
    if (req.files['image'] && req.files['image'][0]) {
      profileImagePath = req.files['image'][0].path;
    }
console.log("profile",profileImagePath);

    // Handle video upload
    // if (req.files['video'] && req.files['video'][0]) {
    //   profileImagePath.videoUrl = req.files['video'][0].path;
    // }

    // Check if at least one file was uploaded
    if (Object.keys(profileImagePath).length === 0) {
      return res.status(400).json({ message: 'No image or video file selected' });
    }

    console.log('Files uploaded:', profileImagePath);

    // Save profileImagePath to your MongoDB database (e.g., associate with a product, user, etc.)
    const sql = "UPDATE admin SET profile_image = ? WHERE id = ?";
    const userId = user.id; // Get user ID from the request body
  
    db.query(sql, [profileImagePath, userId], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving image to database', err });
      }


      res.status(200).json({ message: 'Profile image uploaded successfully', profileImagePath ,result});
    });
    // res.status(200).json({
    //   message: 'Files uploaded successfully',
    //   profileImagePath,
    // });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ message: 'File upload failed' });
  }
}
export { adminLogin,check_auth,adminLogout ,change_password,profile_img_change};
