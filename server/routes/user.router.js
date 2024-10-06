// backend/routes/items.js
import express from 'express';
import db from '../database/db.js';  // Use '.js' extension for ES modules

const router = express.Router();

// Get all items (Read)
router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new item (Create)
router.post('/', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO items (name) VALUES (?)', [name], (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, name });
  });
});

// Update an item (Update)
router.put('/:id', (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  db.query('UPDATE items SET name = ? WHERE id = ?', [name, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Item updated' });
  });
});

// Delete an item (Delete)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM items WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Item deleted' });
  });
});

export default router;
