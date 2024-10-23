import db from "../../../database/db.js";
// Get hero_section

export const getInquiryHeader = (req, res) => {
    const query = "SELECT * FROM inquiry_header_section WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results[0]);
    });
  };
  
  // Update  inquiry Header
  export const updateInquiryHeader = (req, res) => {
    const {
      header,
      redHighLight,
      transparentHighLight,
      shortDescription,
      image
     
    } = req.body;
  
    // Assuming you're updating the About Us Hero Section with id = 1
    const id = 1;
  
    const query = `
        UPDATE inquiry_header_section 
        SET 
          header = ?, 
          redHighLight = ?, 
          transparentHighLight = ?, 
          shortDescription = ?, 
          image=?
          WHERE id = ?
      `;
  
    db.query(
      query,
      [
        header,
        redHighLight,
        transparentHighLight,
        shortDescription,
        image,
       
        id,
      ],
      (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Database query error", details: err });
        }
  
        // Check if any rows were affected
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: "Hero section not found." });
        }
  
        return res
          .status(200)
          .json({ message: "Hero section updated successfully!" });
      }
    );
  };


  
// get contact us Form
export const getInquiryFormDetails = (req, res) => {
    const query = "SELECT * FROM inquiry_page_form_details WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
    });
  };
  
  // Update contact us Form
  export const updateInquiryFormDetails = (req, res) => {
    const { email, phone_number, open_time,  } = req.body;
    const query =
      "UPDATE inquiry_page_form_details SET email = ?, phone_number = ? ,open_time = ? WHERE id = ?";
    const id = 1; // Assuming you're updating the header with id 1
  
    db.query(
      query,
      [email, phone_number, open_time, id],
      (err, results) => {
        if (err) return res.status(500).json(err);
  
        // Check if any rows were affected
        if (results.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: "contact us header not found." });
        }
  
        return res
          .status(200)
          .json({ message: "contact us header updated successfully!" });
      }
    );
  };
  