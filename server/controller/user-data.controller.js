import db from '../database/db.js';  // Use '.js' extension for ES modules

const userData = async(req,res)=>{
    console.log('GET / - Request received');
  
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ message: 'Server error' });
      }
  
      console.log('Database query results:', results);
      res.json(results);
    });
  }
  export default userData;