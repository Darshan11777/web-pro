import express, { query } from "express"
import db from "../database/db.js"

const router=express.Router()

router.get("/aa", (req, res) => {
  const sql = `SHOW TABLES`
  
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err)
      console.log({result});

    const tables = result.map((row) => row.Tables_in_defaultdb)
    console.log(tables)

    const queries = tables.map((tb) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM \`${tb}\``, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve({ table: tb, data: result })
          }
        })
      })
    })

    // Wait for all queries to finish
    Promise.all(queries)
      .then((data) => {
        console.log(data) // Log the results from all tables
        res.json(data) // Send the results as JSON
      })
      .catch((err) => {
        res.status(500).send(err) // Handle errors
      })
  })
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
    // )
    // `
  
    // how to create table
  
    // const sql= `SHOW CREATE TABLE hero_section`
  
    // all tabel name
  
    // const sql = `DELETE FROM pages;`
const sql=  `INSERT INTO about_us_page (id, section_name, details, navigation_link) VALUES
(1, 'Hero Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'hero-section'),
(2, 'Project Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'project'),
(3, 'Image Project Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'image-project'),
(4, 'Our History Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'history'),
(5, 'History Detailes Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'history-detailes'),
(6, 'Quote Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'quote'),
(7, 'Team Header Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'team-header'),
(8, 'Team Details Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'team-details');

`


  
    // size of database
  
    // const sql= `SELECT table_schema AS "Database",
    //        SUM(data_length + index_length) / 1024 / 1024 AS "Size (MB)"
    // FROM information_schema.tables
    // WHERE table_schema = 'railway'
    // GROUP BY table_schema
    // `
  
    db.query(sql, (err, result) => {
      if (err) return res.status(500).send(err)
  
      res.json(result)
    })
  })

  
  


// const createTableQueries =  [
//   `CREATE TABLE IF NOT EXISTS about_hero_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     header VARCHAR(255) NOT NULL,
//     blueHighLight VARCHAR(255),
//     transparentHighLight VARCHAR(255),
//     shortDescription TEXT,
//     image VARCHAR(255),
//     image_2 VARCHAR(255)
//   )`,
  
//   `CREATE TABLE IF NOT EXISTS about_history_detailes_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     header VARCHAR(255),
//     image VARCHAR(255),
//     shortDescription TEXT
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_history_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     header_line_1 VARCHAR(255),
//     header_line_2 VARCHAR(255),
//     shortDescription TEXT
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_image_project_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     image_1 VARCHAR(255),
//     image_2 VARCHAR(255),
//     image_3 VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_project_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     complete_projects INT,
//     happy_clients INT,
//     year_of_experience INT
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_quote_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     header VARCHAR(255),
//     image VARCHAR(255),
//     shortDescription TEXT,
//     highLight VARCHAR(255),
//     headerLine1 VARCHAR(255),
//     headerLine2 VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_team_details (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     role VARCHAR(255),
//     image VARCHAR(255),
//     created_at DATETIME
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_team_header_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     header VARCHAR(255),
//     shortDescription TEXT,
//     highLight VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_us_page (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     section_name VARCHAR(255),
//     details TEXT,
//     navigation_link VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS about_us_section (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     tags TEXT,
//     description TEXT,
//     years_of_experience INT,
//     img_url VARCHAR(255),
//     section_name VARCHAR(255),
//     header VARCHAR(255),
//     highlighted_word VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS admin (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(255),
//     password VARCHAR(255),
//     email VARCHAR(255),
//     created_at DATETIME,
//     profile_image VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS chat_mitra_enquiry (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     email VARCHAR(255),
//     phone VARCHAR(20),
//     message TEXT,
//     mobileNo VARCHAR(20)
//   )`,

//   `CREATE TABLE IF NOT EXISTS chat_mitra_feedback (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     rating INT,
//     name VARCHAR(255),
//     feedback TEXT
//   )`,

//   `CREATE TABLE IF NOT EXISTS contact_page_contact_us_form (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     email VARCHAR(255),
//     phone_number VARCHAR(20),
//     address TEXT,
//     open_time VARCHAR(255)
//   )`,

//   `CREATE TABLE IF NOT EXISTS contact_us_form (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     email VARCHAR(255),
//     phone_number VARCHAR(20),
//     open_time VARCHAR(255),
//     address TEXT
//   )`
// ];
// const queries = [
//   `INSERT INTO about_hero_section (header, blueHighLight, transparentHighLight, shortDescription, image, image_2) VALUES ('About Us', 'Blue Highlight Text', 'Transparent Highlight Text', 'This is a brief description about our company.', 'image1.jpg', 'image2.jpg')`,
//   `INSERT INTO about_history_detailes_section (header, image, shortDescription) VALUES ('Our History', 'history_image.jpg', 'Short description about our company history.')`,
//   `INSERT INTO about_history_section (header_line_1, header_line_2, shortDescription) VALUES ('Our History', 'The Beginning', 'Short description of our journey, starting from the beginning.')`,
//   `INSERT INTO about_image_project_section (image_1, image_2, image_3) VALUES ('project_image1.jpg', 'project_image2.jpg', 'project_image3.jpg')`,
//   `INSERT INTO about_project_section (complete_projects, happy_clients, year_of_experience) VALUES (150, 1200, 10)`,
//   `INSERT INTO about_quote_section (header, image, shortDescription, highLight, headerLine1, headerLine2) VALUES ('Inspiring Quote', 'quote_image.jpg', 'This is an inspiring quote about our company values.', 'Highlight Text', 'Header Line 1', 'Header Line 2')`,
//   `INSERT INTO about_team_details (name, role, image, created_at) VALUES ('John Doe', 'CEO', 'john_doe_image.jpg', NOW()), ('Jane Smith', 'CTO', 'jane_smith_image.jpg', NOW())`,
//   `INSERT INTO about_team_header_section (header, shortDescription, highLight) VALUES ('Meet Our Team', 'We are a group of professionals dedicated to your success.', 'Highlight Text')`,
//   `INSERT INTO about_us_page (section_name, details, navigation_link) VALUES ('About Section', 'This section contains details about the company, team, and vision.', '/about-us')`,
//   `INSERT INTO about_us_section (tags, description, years_of_experience, img_url, section_name, header, highlighted_word) VALUES ('tag1, tag2', 'This is a description about our section.', 10, 'section_image.jpg', 'About Us', 'Our Story', 'Story')`,
//   `INSERT INTO admin (username, password, email, created_at, profile_image) VALUES ('admin_user', 'hashed_password_here', 'admin@example.com', NOW(), 'admin_profile.jpg')`,
//   `INSERT INTO chat_mitra_enquiry (name, email, phone, message, mobileNo) VALUES ('Alice Johnson', 'alice@example.com', '123-456-7890', 'Inquiry about our services.', '987-654-3210')`,
//   `INSERT INTO chat_mitra_feedback (rating, name, feedback) VALUES (5, 'Bob Brown', 'Excellent service, very satisfied!')`,
//   `INSERT INTO contact_page_contact_us_form (email, phone_number, address, open_time) VALUES ('contact@company.com', '123-456-7890', '123 Company St, City, Country', 'Mon-Fri 9:00 AM - 6:00 PM')`,
//   `INSERT INTO contact_us_form (email, phone_number, open_time, address) VALUES ('contact@company.com', '123-456-7890', 'Mon-Fri 9:00 AM - 6:00 PM', '123 Company St, City, Country')`
// ];

// Route to create tables

const createTableQueries = [
  `-- Table: our_services_page
  CREATE TABLE our_services_page (
      id INT AUTO_INCREMENT PRIMARY KEY,
      section_name VARCHAR(255) NOT NULL,
      details TEXT,
      navigation_link VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: our_services_project_section
  CREATE TABLE our_services_project_section (
      id INT AUTO_INCREMENT PRIMARY KEY,
      complete_projects INT NOT NULL,
      year_of_experience INT NOT NULL,
      happy_clients INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: our_services_quote_section
  CREATE TABLE our_services_quote_section (
      id INT AUTO_INCREMENT PRIMARY KEY,
      headerLine1 VARCHAR(255),
      headerLine2 VARCHAR(255),
      image VARCHAR(255),
      shortDescription TEXT,
      highLight TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: our_work
  CREATE TABLE our_work (
      id INT AUTO_INCREMENT PRIMARY KEY,
      description TEXT,
      tags VARCHAR(255),
      imgUrl VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: our_work_header_section
  CREATE TABLE our_work_header_section (
      id INT AUTO_INCREMENT PRIMARY KEY,
      header VARCHAR(255) NOT NULL,
      highlighted_word VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      section_name VARCHAR(255) NOT NULL
  );`,

  `-- Table: pages
  CREATE TABLE pages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page_name VARCHAR(255) NOT NULL,
      description TEXT,
      navigation_link VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: reviews
  CREATE TABLE reviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      review TEXT,
      email VARCHAR(255),
      rating INT,
      imgUrl VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: static_pages
  CREATE TABLE static_pages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      header VARCHAR(255) NOT NULL,
      short_text TEXT,
      long_text TEXT,
      status INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: users
  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      profile_image VARCHAR(255)
  );`,

  `-- Table: work_page
  CREATE TABLE work_page (
      id INT AUTO_INCREMENT PRIMARY KEY,
      section_name VARCHAR(255) NOT NULL,
      details TEXT,
      navigation_link VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: work_page_portfolio_header_section
  CREATE TABLE work_page_portfolio_header_section (
      id INT AUTO_INCREMENT PRIMARY KEY,
      short_description TEXT,
      project_video VARCHAR(255),
      header_line_2 VARCHAR(255),
      header_line_1 VARCHAR(255),
      project_img VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: work_page_portfolio_snapshort_slides
  CREATE TABLE work_page_portfolio_snapshort_slides (
      id INT AUTO_INCREMENT PRIMARY KEY,
      image VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: work_page_project_highlights
  CREATE TABLE work_page_project_highlights (
      id INT AUTO_INCREMENT PRIMARY KEY,
      projectTitle VARCHAR(255),
      image VARCHAR(255),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: work_page_project_highlights_section_2
  CREATE TABLE work_page_project_highlights_section_2 (
      id INT AUTO_INCREMENT PRIMARY KEY,
      projectTitle VARCHAR(255),
      image VARCHAR(255),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: work_page_project_info
  CREATE TABLE work_page_project_info (
      id INT AUTO_INCREMENT PRIMARY KEY,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,

  `-- Table: work_page_project_overview_section
  CREATE TABLE work_page_project_overview_section (
      id INT AUTO_INCREMENT PRIMARY KEY,
      header VARCHAR(255),
      image VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`
];


const querys=[
  `INSERT INTO our_services_page (id, section_name, details, navigation_link) VALUES
    (1, 'It Services Header', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'it-services-header'),
    (2, 'It Services details', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'services-slides'),
    (3, 'Our Work', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'our-work'),
    (4, 'Our Word Header', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'our-work-header'),
    (5, 'Project Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'project'),
    (6, 'Quote Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'quote');`,

  `INSERT INTO our_services_project_section (id, complete_projects, year_of_experience, happy_clients) VALUES
    (1, 100, 20, 70);`,

  `INSERT INTO our_services_quote_section (id, headerLine1, headerLine2, image, shortDescription, highLight) VALUES
    (1, 'Start your project', 'with Us?', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729493325/webpro/hinlakf1zqidnryd4orh.png', 'We are creative web design & branding agency based in London We are creative web design & branding agency based in London We are creative web design & ', '');`,

  `INSERT INTO our_work (id, description, tags, imgUrl) VALUES
    (2, 'Learn about the history, usage and variations of Lorem Ipsum, the industry\'s standard dummy', 'Website design,Ui/Ux,Mock up', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197202/webpro/siatxp8tykyxdiubsu3x.png'),
    (3, 'Learn about the history, usage and variations of Lorem Ipsum, the industry\'s standard dummy', 'Website design,Ui/Ux,Mock up', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197339/webpro/ktwczsh3w1l6bluhhgeh.png'),
    (4, 'Learn about the history, usage and variations of Lorem Ipsum, the industry\'s standard dummy', 'Website design,Ui/Ux,Mock up', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197202/webpro/siatxp8tykyxdiubsu3x.png'),
    (5, 'Learn about the history, usage and variations of Lorem Ipsum, the industry\'s standard dummy', 'Website design,Ui/Ux,Mock up', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197838/webpro/t61u92s6kuyj9pnwjl48.png'),
    (6, 'Learn about the history, usage and variations of Lorem Ipsum, the industry\'s standard dummy', 'Website design,Ui/Ux,Mock up', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197202/webpro/siatxp8tykyxdiubsu3x.png'),
    (7, 'Learn about the history, usage and variations of Lorem Ipsum, the industry\'s standard dummy', 'Website design,Ui/Ux,Mock up', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197860/webpro/vf38qlmcu6sb0bnj81dc.png');`,

  `INSERT INTO our_work_header_section (id, header, highlighted_word, section_name) VALUES
    (1, 'Making “brands” a damn site better', '“brands”',  'Our Work');`,

  `INSERT INTO pages (id, page_name, description, navigation_link) VALUES
    (1, 'Home Page', 'This Page provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'home-page'),
    (2, 'About Us Page', 'This Page provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'about-us'),
    (3, 'Our Services Page', 'This Page provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'our-services'),
    (4, 'Contact Us Page', 'This Page provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'contact-us'),
    (5, 'Inquiry Page', 'This Page provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'inquiry'),
    (6, 'Our Work Page', 'This Page provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'our-work');`,

  `INSERT INTO reviews (id, name, review, email, rating, imgUrl) VALUES
    (1, 'Jane Doe, CEO of WEBPRO Corp.', 'Working with Web Pro has been a game-changer for our business. Their team not only resolved our immediate IT issues but also provided.', 'webpro123@gmail.com', 5, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728207439/webpro/ynkx2j604h7qvcgyvgjy.png'),
    (2, 'John Doe', 'This is a great product! I highly recommend it.', 'john.doe@example.com', 4, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728206642/webpro/qfcbxrgkmh5xn0yrvop4.png');`,

  `INSERT INTO static_pages (id, header, short_text, long_text, status) VALUES
    (1, 'Title 1', 'Short text for edit section.', '<p>this is long text&nbsp;</p>', 1),
    (3, 'Title 2', 'lsldf', '<h2>this is ck editor long text detailes.&nbsp;</h2><p>&nbsp;</p>', 1),
    (5, 'Title 3', 'Short tesxt 2', null, 1);`,

  `INSERT INTO users (id, username, email, password_hash, profile_image) VALUES
    (1, 'exampleuser', 'user@example.com', '$2b$10$gF/dq8P4/kQGE21VLENHvOk1i3s6vDjmZu5M2fz3p8oAS/OEgiSZ.', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1727366080/webpro/xmpv9z6olltfax8caca6.png'),
    (2, 'darshan ', 'aa@gmail.com', 'aaa', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1727366080/webpro/xmpv9z6olltfax8caca6.png');`,

  `INSERT INTO work_page (id, section_name, details, navigation_link) VALUES
    (1, 'Portfolio Header', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'portfolio-header'),
    (2, 'Project Highlights Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'project-highlights'),
    (3, 'Project Highlights Section 2', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'project-highlights-section-2'),
    (4, 'Project Overview Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'project-overview'),
    (5, 'Project Details Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'project-info'),
    (6, 'Portfolio Snapshot Section', 'This section provides an overview of the services we offer, highlighting key features and benefits for our clients.', 'portfolio-snapshot');`,

  `INSERT INTO work_page_portfolio_header_section (id, short_description, project_video, header_line_2, header_line_1, project_img) VALUES
    (1, 'Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.', 'https://res.cloudinary.com/dbuuc0cdy/video/upload/v1728538850/webpro/mpe7afwycvs2iqgtaoqm.mp4', 'portfolio', 'Our', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729861649/webpro/zbnx9kwj7e1kayjxqlwb.jpg');`,

  `INSERT INTO work_page_portfolio_snapshort_slides (id, image) VALUES
    (1, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729945523/webpro/wc9fm1c2ahd6dmgtwjdd.png'),
    (2, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729946864/webpro/bzkxhlvzc5unnswruzuz.png'),
    (3, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730092563/webpro/aeuu2ibjvgoruq1hozbg.png'),
    (4, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730092720/webpro/gt3e7m1hl1lacimgtviz.jpg'),
    (5, 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730092812/webpro/rlr8vszjh5shsqiahfb3.png');`,

  `INSERT INTO work_page_project_highlights (id, projectTitle, image, description) VALUES
    (1, 'Crafting digital experiences', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729927854/webpro/gq9xmpxx169ntohzn7vh.png', 'It should be designed to enhance usability and provide easy access to important details. Here’s how to structure the content for your IT website’s footer section:');`,

  `INSERT INTO work_page_project_highlights_section_2 (id, projectTitle, image, description) VALUES
    (1, 'Crafting digital experiences', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729927854/webpro/gq9xmpxx169ntohzn7vh.png', 'It should be designed to enhance usability and provide easy access to important details. Here’s how to structure the content for your IT website’s footer section:');`,

  `INSERT INTO work_page_project_info (id, description) VALUES
    (1, 'It should be designed to enhance usability and provide easy access to important details. Here’s how to structure the content for your IT website’s footer section:');`,

  `INSERT INTO work_page_project_overview_section (id, header, image) VALUES
    (1, 'Crafting digital experiences', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729940688/webpro/uqfjixxkdbvneaopfjcz.png'),
    (2, 'Crafting digital experiences', 'https://res.cloudinary.com/dbuuc0cdy/image/upload/v1729940688/webpro/tb0qo76dnsk4gkei2cke.png');`
];

;
router.get('/create-tables', (req, res) => {
  // for (const query of createTableQueries) {
  //   try {
      
  //       db.query('show tables', (error, results) => {
  //         if (error) {
  //           res.status(500).send(error);
  //         } else {
  //           res.status(200).send(results);
  //         }
  //       });
   
  //     console.log('Table created successfully');
  //   } catch (error) {
  //     console.error('Error creating table:', error.message);
  //   }
  // }


  // createTableQueries.forEach(item=>{
  //   db.query(item, (err, result) => {

  //     if (err) {
  //         console.error('Error creating table:', err);
  //         return res.status(500).json({ error: 'Failed to create table' });
  //     }

  //     console.log('Table created successfully');
   
  // })
  // })
  querys.forEach(item=>{
    db.query(item,(err,result)=>{
      if(err){
        console.error('Error inserting data:', err);
        // return res.status(500).json({ error: 'Failed to insert data' });
      }
      console.log('Data inserted successfully');
    })
  })
  res.json({message:"Tables created and data inserted successfully"})

  })
  // queries.forEach((query) => {
  //   db.query('SHOW TABLES', (err, result) => {
  //     if (err) {
  //       console.error('Error executing query:', err);
  //       res.status(500).send('Error inserting data');

  //     }
  //     console.log('Data inserted:', result);
  //   });
  // });

  // res.send('Data insertion initiated');




export default router