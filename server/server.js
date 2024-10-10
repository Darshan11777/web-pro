// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
import cors from 'cors'
import express from 'express';
import db from './database/db.js';
import itemRouter from './routes/user.router.js';
import adminRouter from './routes/admin.router.js'
import userDatarouter from './routes/user-data.router.js';
// const bodyParser = require('body-parser');
import bodyParser  from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import  errorMiddleware  from './middleware/error-middleware.js';
import slidesRouter from './routes/slides.router.js'
import imageUploadRouter from './routes/image.router.js'
import PagesRouter from './routes/pages.router.js'
import sectionHeaderRouter from './routes/section-header.router.js'

dotenv.config();

const app = express();

console.log(errorMiddleware);

// app.use(
//   cors({
//     origin:'https://webproreact.netlify.app',
//     // origin: 'http://localhost:5173',
//     credentials: true, // allow credentials (cookies)
//   })
// );

const allowedOrigins = [
  'https://webproreact.netlify.app',
  'http://localhost:5173'
];
app.use(
  cors({
    origin: (origin, callback) => {
      // Check if the origin is in the allowed list
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // allow credentials (cookies)
  })
);



app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/items', itemRouter);
app.use ('/user',userDatarouter)
app.use('/admin',adminRouter)
app.use('/slides',slidesRouter)
app.use('/image',imageUploadRouter)
app.use('/pages',PagesRouter)
app.use('/section/header',sectionHeaderRouter)
// db.query('select * from item',(err,res)=>{
//   console.log(err)
//   console.log(res);
  
  
// })

app.get('/users', (req, res) => {

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

const sql=`
RENAME TABLE sections TO home_page;
  

`

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
app.get('/', (req, res) => {
  res.send('Hello, World!');
})


// Add new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'User added successfully!', userId: result.insertId });
  });
});

// get all data from table
app.get('/aa', (req, res) => {
  const sql=`SHOW TABLES;`
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);

    const tables = result.map(row => row.Tables_in_railway);
    console.log(tables);
    
    const queries = tables.map(tb => {
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
      .then(data => {
        console.log(data); // Log the results from all tables
        res.json(data); // Send the results as JSON
      })
      .catch(err => {
        res.status(500).send(err); // Handle errors
      });
  });
  
})

app.use(errorMiddleware)
// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
