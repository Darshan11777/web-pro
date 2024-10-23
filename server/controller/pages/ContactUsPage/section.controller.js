import db from '../../../database/db.js'

// get History Form
export const getContactUsHeader = (req, res) => {
    const query = "SELECT * FROM contact_us_page_header_section WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results[0]);
    });
  };
  
  // Update history Form
  export const updateContactUsHeader = (req, res) => {
    const { headerLine1,headerLine2, image, shortDescription } = req.body;
  
    // Assuming you're updating the About Us Hero Section with id = 1
    const id = 1;
  
    const query = `
        UPDATE contact_us_page_header_section 
        SET headerLine1 = ?, 
          headerLine2 = ?,
            image = ?, 
            shortDescription = ? 
            
        WHERE id = ?
      `
    db.query(
      query,
      [ headerLine1,headerLine2, image, shortDescription, id],
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
export const getContactUsForm = (req, res) => {
    const query = "SELECT * FROM contact_page_contact_us_form WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
    });
  };
  
  // Update contact us Form
  export const updateContactUsForm = (req, res) => {
    const { email, phone_number, open_time, address } = req.body;
    const query =
      "UPDATE contact_page_contact_us_form SET email = ?, phone_number = ? ,open_time = ?,address = ? WHERE id = ?";
    const id = 1; // Assuming you're updating the header with id 1
  
    db.query(
      query,
      [email, phone_number, open_time, address, id],
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
  



  // Get contact Us form header

export const getContactUsFormHeader = (req, res) => {
  const query = "SELECT * FROM contact_us_form_header_section where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update contact us form header
export const updateContactUsFormHeader = (req, res) => {
  const { section_name, header, highlighted_word } = req.body;
  const query =
    "UPDATE contact_us_form_header_section SET section_name = ?, header = ?,highlighted_word = ? WHERE id = ?";
  const id = 1;
  db.query(
    query,
    [section_name, header, highlighted_word, id],
    (err, results) => {
      if (err) return res.status(500).json(err);

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
