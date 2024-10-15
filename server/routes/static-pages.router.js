import express  from "express";
import db from '../database/db.js'
const router=express.Router()


router.get('/',(req,res)=>{

const query=`select * from static_pages`

db.query(query,(err,result)=>{

    if(err){
        console.log(err)
        return res.status(500).json({message:"Error fetching static pages"})
    }
    res.status(200).json(result)
})
})



// Create a new static page
router.post('/', (req, res) => {
    const { header, short_text, long_text,status } = req.body;
    const query = `INSERT INTO static_pages (header, short_text, long_text,status) VALUES (?, ?, ?, ?)`;
    db.query(query, [header, short_text, long_text,status], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error creating static page" });
        }
        res.status(201).json({ message: "Static page created", id: result.insertId });
    });
});

// Update a static page
router.put('/:id', (req, res) => {
    const { header, short_text, long_text, status } = req.body;
    const query = `UPDATE static_pages SET header = ?, short_text = ?, long_text = ?, status = ? WHERE id = ?`;
    db.query(query, [header, short_text, long_text, status, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating static page" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Static page not found" });
        }
        res.status(200).json({ message: "Static page updated" });
    });
});

// Delete a static page
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM static_pages WHERE id = ?`;
    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error deleting static page" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Static page not found" });
        }
        res.status(200).json({ message: "Static page deleted" });
    });
});
/// Update a static page status
router.put('/:id/status', (req, res) => {
    const { status } = req.body;
    const query = `UPDATE static_pages SET  status = ? WHERE id = ?`;
    db.query(query, [ status, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating static page" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Static page not found" });
        }
        res.status(200).json({ message: "Static page updated" });
    });
});
export default router
