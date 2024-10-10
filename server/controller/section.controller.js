import db from '../database/db.js'
export const getSection = (req, res) => {
    db.query('SELECT * FROM sections', (err, results) => {
        if (err) {
            console.error('Error fetching sections:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Fetched sections:', results); // Log the results
        res.json(results);
    });
}