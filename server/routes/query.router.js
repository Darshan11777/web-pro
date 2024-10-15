import express from "express";
import db from "../database/db.js";

const router=express.Router();

router.get("/aa", (req, res) => {
  const sql = `SHOW TABLES;`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);

    const tables = result.map((row) => row.Tables_in_railway);
    console.log(tables);

    const queries = tables.map((tb) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM \`${tb}\``, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve({ table: tb, data: result });
          }
        });
      });
    });

    // Wait for all queries to finish
    Promise.all(queries)
      .then((data) => {
        console.log(data); // Log the results from all tables
        res.json(data); // Send the results as JSON
      })
      .catch((err) => {
        res.status(500).send(err); // Handle errors
      });
  });
})

router.get("/users", (req, res) => {
    // const sql=`INSERT INTO sections (section_name, details, navigation_link) VALUES ('Hero Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'hero-section')`
    // const sql=`select * from hero_section`
    // const sql=`INSERT INTO hero_section (header, subheader, description, bg_video_url, below_img_url)
    // VALUES (
    //     'Welcome to Our Amazing Product!',
    //     'Experience the Future of Technology',
    //     'Welcome to Our Amazing Product! Experience the future of technology with our state-of-the-art solution designed to enhance your productivity and creativity.
    //      Whether you are a small business owner or a creative professional, our product offers intuitive features that cater to all your needs. Discover powerful tools, seamless integration, and exceptional support that empower you to achieve your goals.
    //      Join our community of innovators and take the first step towards transforming your workflow today!',
    //     'https://example.com/background-video.mp4',
    //     'https://example.com/image.jpg'
    // );
    // `
  
    // how to create table
  
    // const sql= `SHOW CREATE TABLE hero_section;`
  
    // all tabel name
  
    const sql = `
INSERT INTO static_pages (header, short_text, long_text, status) VALUES
('Header 1', 'Short text 1', 'Long text 1', true),
('Header 2', 'Short text 2', 'Long text 2', false),
('Header 3', 'Short text 3', 'Long text 3', true),
('Header 4', 'Short text 4', 'Long text 4', false),
('Header 5', 'Short text 5', 'Long text 5', true),
('Header 6', 'Short text 6', 'Long text 6', false),
('Header 7', 'Short text 7', 'Long text 7', true),
('Header 8', 'Short text 8', 'Long text 8', false),
('Header 9', 'Short text 9', 'Long text 9', true),
('Header 10', 'Short text 10', 'Long text 10', false),
('Header 11', 'Short text 11', 'Long text 11', true),
('Header 12', 'Short text 12', 'Long text 12', false),
('Header 13', 'Short text 13', 'Long text 13', true),
('Header 14', 'Short text 14', 'Long text 14', false),
('Header 15', 'Short text 15', 'Long text 15', true),
('Header 16', 'Short text 16', 'Long text 16', false),
('Header 17', 'Short text 17', 'Long text 17', true),
('Header 18', 'Short text 18', 'Long text 18', false),
('Header 19', 'Short text 19', 'Long text 19', true),
('Header 20', 'Short text 20', 'Long text 20', false),
('Header 21', 'Short text 21', 'Long text 21', true),
('Header 22', 'Short text 22', 'Long text 22', false),
('Header 23', 'Short text 23', 'Long text 23', true),
('Header 24', 'Short text 24', 'Long text 24', false),
('Header 25', 'Short text 25', 'Long text 25', true),
('Header 26', 'Short text 26', 'Long text 26', false),
('Header 27', 'Short text 27', 'Long text 27', true),
('Header 28', 'Short text 28', 'Long text 28', false),
('Header 29', 'Short text 29', 'Long text 29', true),
('Header 30', 'Short text 30', 'Long text 30', false);

  `;
  
    // size of database
  
    // const sql= `SELECT table_schema AS "Database",
    //        SUM(data_length + index_length) / 1024 / 1024 AS "Size (MB)"
    // FROM information_schema.tables
    // WHERE table_schema = 'railway'
    // GROUP BY table_schema;
    // `
  
    db.query(sql, (err, result) => {
      if (err) return res.status(500).send(err);
  
      res.json(result);
    });
  });
export default router;