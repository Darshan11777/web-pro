import db from "../database/db.js";
// Get hero_section
export const getHeroSection = (req, res) => {
  const query = "SELECT * FROM hero_section where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update a hero section
export const updateHeroSection = (req, res) => {
  const { header, subheader, description, bg_video_url, below_img_url } =
    req.body;
  const query =
    "UPDATE hero_section SET header = ?, subheader = ?, description = ?, bg_video_url = ?, below_img_url = ? WHERE id = ?";
  const id = 1;
  db.query(
    query,
    [header, subheader, description, bg_video_url, below_img_url, id],
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

// Get hero_section
export const getOurServiceHeader = (req, res) => {
  const query = "SELECT * FROM our_service_header_data where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update a hero section
export const updateOurServiceHeader = (req, res) => {
  const { section_name, header, description, highlighted_word } = req.body;
  const query =
    "UPDATE our_service_header_data SET section_name = ?, header = ?, description = ?, highlighted_word = ?";
  const id = 1;
  db.query(
    query,
    [section_name, header, description, highlighted_word],
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

// Get Our Process

export const getOurProcessHeader = (req, res) => {
  const query = "SELECT * FROM our_process_header_section where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update a hero section
export const updateOurProcessHeader = (req, res) => {
  const { section_name, header, highlighted_word } = req.body;
  const query =
    "UPDATE our_process_header_section SET section_name = ?, header = ?,highlighted_word = ? WHERE id = ?";
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

// Get our work header data
export const getOurWorkHeader = (req, res) => {
  const query = "SELECT * FROM our_work_header_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update our work header
export const updateOurWorkHeader = (req, res) => {
  const { section_name, header, highlighted_word } = req.body;
  const query =
    "UPDATE our_work_header_section SET section_name = ?, header = ?, highlighted_word = ? WHERE id = ?";
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

// Get our client header data
export const getOurClientHeader = (req, res) => {
  const query = "SELECT * FROM our_client_header_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update our client header
export const updateOurClientHeader = (req, res) => {
  const { section_name, header, description, highlighted_word } = req.body;
  const query =
    "UPDATE our_client_header_section SET section_name = ?, header = ?, description = ? ,highlighted_word = ? WHERE id = ?";
  const id = 1; // Assuming you're updating the header with id 1

  db.query(
    query,
    [section_name, header, description, highlighted_word, id],
    (err, results) => {
      if (err) return res.status(500).json(err);

      // Check if any rows were affected
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Client header not found." });
      }

      return res
        .status(200)
        .json({ message: "Client header updated successfully!" });
    }
  );
};

// news header data

export const getNewsHeader = (req, res) => {
  const query = "SELECT * FROM news_header_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update our client header
export const updateNewsHeader = (req, res) => {
  const { section_name, header, highlighted_word } = req.body;
  const query =
    "UPDATE news_header_section SET section_name = ?, header = ? ,highlighted_word = ? WHERE id = ?";
  const id = 1; // Assuming you're updating the header with id 1

  db.query(
    query,
    [section_name, header, highlighted_word, id],
    (err, results) => {
      if (err) return res.status(500).json(err);

      // Check if any rows were affected
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "news header not found." });
      }

      return res
        .status(200)
        .json({ message: "news header updated successfully!" });
    }
  );
};

// Contact us header data

export const getContactUsHeader = (req, res) => {
  const query = "SELECT * FROM contact_us_header_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update our client header
export const updateContactUsHeader = (req, res) => {
  const { section_name, header, highlighted_word } = req.body;
  const query =
    "UPDATE contact_us_header_section SET section_name = ?, header = ? ,highlighted_word = ? WHERE id = ?";
  const id = 1; // Assuming you're updating the header with id 1

  db.query(
    query,
    [section_name, header, highlighted_word, id],
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

// get our result

export const getOurResult = (req, res) => {
  const id = 1;

  db.query("SELECT * FROM our_results WHERE id = ?", [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Entry not found" });
    }
    res.json(results[0]);
  });
};

export const updateOurResult = async (req, res) => {
  const id = 1;

  try {
    const validatedData = req.body; // Validate data

    const {
      tags,
      description,
      rating,
      completed_projects,
      years_Of_experience,
      happy_clients,
      bottom_img_url,
      section_name,
      header,
      highlighted_word,
    } = req.body;
    const id = 1;
    db.query(
      "UPDATE our_results SET tags = ?, description = ?, rating = ?, completed_projects = ?, years_Of_experience = ?, happy_clients = ?, bottom_img_url = ?, section_name = ?, header = ?, highlighted_word = ? WHERE id = ?",
      [
        tags,
        description,
        rating,
        completed_projects,
        years_Of_experience,
        happy_clients,
        bottom_img_url,
        section_name,
        header,
        highlighted_word,
        id,
      ],
      (error) => {
        if (error) {
          return res.status(500).json({ error: "Database update error" });
        }
        res.json({ message: "Entry updated successfully" });
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};
// get about us

export const getAboutUs = (req, res) => {
  const id = 1;

  db.query(
    "SELECT * FROM about_us_section WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Database query error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Entry not found" });
      }
      res.json(results[0]);
    }
  );
};

export const updateAboutUs = async (req, res) => {
  const id = 1;

  try {
    const validatedData = req.body; // Validate data

    const {
      tags,
      description,
      years_Of_experience,
      img_url,
      section_name,
      header,
      highlighted_word,
    } = req.body;
    const id = 1;
    db.query(
      "UPDATE about_us_section SET tags = ?, description = ?, years_Of_experience = ?, img_url = ?, section_name = ?, header = ?, highlighted_word = ? WHERE id = ?",
      [
        tags,
        description,
        
        years_Of_experience,
        img_url,
        section_name,
        header,
        highlighted_word,
        id,
      ],
      (error) => {
        if (error) {
          console.log(error);

          return res.status(500).json({ error: "Database update error" });
        }
        res.json({ message: "Entry updated successfully" });
      }
    );
  } catch (error) {
    console.log(error);
    
    return res.status(400).json({ error: error.errors });
  }
};


// Contact us header data

export const getFAQsHeader = (req, res) => {
  const query = "SELECT * FROM faqs_header_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update our client header
export const updateFAQsHeader = (req, res) => {
  const { section_name, header, highlighted_word } = req.body;
  const query =
    "UPDATE faqs_header_section SET section_name = ?, header = ? ,highlighted_word = ? WHERE id = ?";
  const id = 1; // Assuming you're updating the header with id 1

  db.query(
    query,
    [section_name, header, highlighted_word, id],
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