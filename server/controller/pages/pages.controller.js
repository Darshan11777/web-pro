import db from '../../database/db.js'
export const getHomePage = (req, res) => {
    db.query('SELECT * FROM home_page', (err, results) => {
        if (err) {
            console.error('Error fetching sections:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
       
        res.json(results);
    });
}
export const getPages = (req, res) => {
    db.query('SELECT * FROM pages', (err, results) => {
        if (err) {
            console.error('Error fetching sections:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        res.json(results);
    });
}