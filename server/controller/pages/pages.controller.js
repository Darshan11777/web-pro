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
export const getOurSErvicesPage = (req, res) => {
    db.query('SELECT * FROM our_services_page', (err, results) => {
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
export const getContactUsPage = (req, res) => {
    db.query('SELECT * FROM contact_us_page', (err, results) => {
        if (err) {
            console.error('Error fetching sections:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        res.json(results);
    });
}
export const getInquiryPage = (req, res) => {
    db.query('SELECT * FROM inquiry_page', (err, results) => {
        if (err) {
            console.error('Error fetching sections:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        res.json(results);
    });
}
export const getWorkPage = (req, res) => {
    db.query('SELECT * FROM work_page', (err, results) => {
        if (err) {
            console.error('Error fetching sections:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        res.json(results);
    });
}