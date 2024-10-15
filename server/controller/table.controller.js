import db from '../database/db.js'

export const getFormData = (req, res) => {
    const {table} = req.params;
    


    const query = `SELECT * FROM ${table}`;
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
    });
  };
