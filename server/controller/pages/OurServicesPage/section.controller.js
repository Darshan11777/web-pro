
import db from '../../../database/db.js'
// get History Form
export const getItServicesHeader = (req, res) => {
    const query = "SELECT * FROM our_services_it_services_header WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results[0]);
    });
  };
  
  // Update history Form
  export const UpdateItServicesHeader = (req, res) => {
    const {header_line_1,header_line_2, image, description,tags} = req.body;
  
    // Assuming you're updating the About Us Hero Section with id = 1
    const id = 1;
  
    const query =  `
    UPDATE our_services_it_services_header 
    SET header_line_1 = ?, 
        header_line_2 = ?,
        image = ?, 
        description = ? ,
        tags= ?
    WHERE id = ?`;
    db.query(
      query,
      [ header_line_1,header_line_2, image, description,tags, id],
      (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Database query error", details: err });
        }
  
        // Check if any rows were affected
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: "it services header not found." });
        }
  
        return res
          .status(200)
          .json({ message: "it services header updated successfully!" });
      }
    );
  };


  // Get all slides
export const getOurServicesSlides = (req, res) => {
    const query = "SELECT * FROM it_services_details_section";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
    });
  };
  
  // Add a new slide
  export const addOurServicesSlide = (req, res) => {
    const { title, description, tags, imgUrl } = req.body;
    const query =
      "INSERT INTO it_services_details_section (title, description, tags, imgUrl) VALUES (?, ?, ?, ?)";
    db.query(query, [title, description, tags, imgUrl], (err, results) => {
      if (err) return res.status(500).json({ "addSlide error": err });
      return res.status(201).json({ message: "Slide added successfully!" });
    });
  };
  
  // Update a slide
  export const updateOurServicesSlide = (req, res) => {
    const { title, description, tags, imgUrl } = req.body;
    const query =
      "UPDATE it_services_details_section SET title = ?, description = ?, tags = ?, imgUrl = ? WHERE id = ?";
    db.query(
      query,
      [title, description, tags, imgUrl, req.params.id],
      (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Slide updated successfully!" });
      }
    );
  };
  
  // Delete a slide
  export const deleteOurServicesSlide = (req, res) => {
    const query = "DELETE FROM it_services_details_section WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Slide deleted successfully!" });
    });
  };


  // Get our work header data
export const getOurWorkHeader = (req, res) => {
    const query = "SELECT * FROM it_services_our_work_header_section WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
    });
  };
  
  // Update our work header
  export const updateOurWorkHeader = (req, res) => {
    const { section_name, header, highlighted_word } = req.body;
    const query =
      "UPDATE it_services_our_work_header_section SET section_name = ?, header = ?, highlighted_word = ? WHERE id = ?";
    const id = 1; // Assuming you're updating the header with id 1
  
    db.query(
      query,
      [section_name, header, highlighted_word, id],
      (err, results) => {
        if (err) return res.status(500).json(err);
  
        // Check if any rows were affected
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: "Work header not found." });
        }
  
        return res
          .status(200)
          .json({ message: "Work header updated successfully!" });
      }
    );
  };


  
// Get all works
export const getWorks = (req, res) => {
    const query = "SELECT * FROM our_services_it_services_our_work";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
    });
  };
  
  // Add a new work
  export const addWork = (req, res) => {
    const { description, tags, imgUrl } = req.body;
    const query =
      "INSERT INTO our_services_it_services_our_work (description, tags, imgUrl) VALUES (?, ?, ?)";
    db.query(query, [description, tags, imgUrl], (err, results) => {
      if (err) return res.status(500).json({ "addWork error": err });
      return res.status(201).json({ message: "Work added successfully!" });
    });
  };
  
  // Update a work
  export const updateWork = (req, res) => {
    const { description, tags, imgUrl } = req.body;
    console.log({ description, tags, imgUrl });
    `INSERT INTO our_services_it_services_our_work (description, tags, imgUrl) VALUES ('Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy' ,'Website design,Ui/Ux,Mock up','https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197202/webpro/siatxp8tykyxdiubsu3x.png' )`;
    const query =
      "UPDATE our_services_it_services_our_work SET description = ?, tags = ?, imgUrl = ? WHERE id = ?";
    db.query(
      query,
      [description, tags, imgUrl, req.params.id],
      (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Work updated successfully!" });
      }
    );
  };
  
  // Delete a work
  export const deleteWork = (req, res) => {
    const query = "DELETE FROM our_services_it_services_our_work WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Work deleted successfully!" });
    });
  };
  
  
  