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


ALTER TABLE about_team_details
CHANGE imgUrl image VARCHAR(255) NOT NULL;


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