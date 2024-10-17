import db from "../../../database/db.js";
// get HeroSection Form
export const getAboutUsHeroSection = (req, res) => {
  const query = "SELECT * FROM about_hero_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update Footer Form
export const UpdateAboutUsHeroSection = (req, res) => {
  const {
    header,
    blueHighLight,
    transparentHighLight,
    shortDescription,
    image, // Background video or image URL
    image_2, // Below image URL
  } = req.body;

  // Assuming you're updating the About Us Hero Section with id = 1
  const id = 1;

  const query = `
      UPDATE about_hero_section 
      SET 
        header = ?, 
        blueHighLight = ?, 
        transparentHighLight = ?, 
        shortDescription = ?, 
        image = ?, 
        image_2 = ?
      WHERE id = ?
    `;

  db.query(
    query,
    [
      header,
      blueHighLight,
      transparentHighLight,
      shortDescription,
      image,
      image_2,
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

// get project Form
export const getProjectSection = (req, res) => {
  const query = "SELECT * FROM about_project_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update project Form
export const UpdateProjectSection = (req, res) => {
  const { year_of_experience, complete_projects, happy_clients } = req.body;

  // Assuming you're updating the About Us Hero Section with id = 1
  const id = 1;

  const query = `
      UPDATE about_project_section 
      SET complete_projects= ?,
        year_of_experience= ?,
        happy_clients=? 
        WHERE id = ?
    `;

  db.query(
    query,
    [complete_projects, year_of_experience, happy_clients, id],
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
// get project Form
export const getImageProjectSection = (req, res) => {
  const query = "SELECT * FROM about_image_project_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update project Form
export const UpdateImageProjectSection = (req, res) => {
  const { image_1, image_2, image_3 } = req.body;

  // Assuming you're updating the About Us Hero Section with id = 1
  const id = 1;

  const query = `
      UPDATE about_image_project_section 
      SET image_1= ?,
        image_2= ?,
        image_3=? 
        WHERE id = ?
    `;

  db.query(query, [image_1, image_2, image_3, id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Database query error", details: err });
    }

    // Check if any rows were affected
    if (results.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "image about section not found." });
    }

    return res
      .status(200)
      .json({ message: "image about section updated successfully!" });
  });
};
// get History Form
export const getHistory = (req, res) => {
  const query = "SELECT * FROM about_history_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update history Form
export const UpdateHistorySection = (req, res) => {
  const { header_line_1, header_line_2, shortDescription } = req.body;

  // Assuming you're updating the About Us Hero Section with id = 1
  const id = 1;

  const query = `
      UPDATE about_history_section 
      SET header_line_1 = ?, 
          header_line_2 = ?, 
          shortDescription = ? 
      WHERE id = ?
    `
  db.query(
    query,
    [header_line_1, header_line_2, shortDescription, id],
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
// get History Form
export const getHistoryDetailes = (req, res) => {
  const query = "SELECT * FROM about_history_detailes_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update history Form
export const UpdateHistoryDetailesSection = (req, res) => {
  const { header, image, shortDescription } = req.body;

  // Assuming you're updating the About Us Hero Section with id = 1
  const id = 1;

  const query = `
      UPDATE about_history_detailes_section 
      SET header = ?, 
          image = ?, 
          shortDescription = ? 
      WHERE id = ?
    `
  db.query(
    query,
    [ header, image, shortDescription, id],
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
// get History Form
export const getQuote = (req, res) => {
  const query = "SELECT * FROM about_quote_section WHERE id = 1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update history Form
export const UpdateQuoteSection = (req, res) => {
  const { headerLine1,headerLine2, image, shortDescription,highLight } = req.body;

  // Assuming you're updating the About Us Hero Section with id = 1
  const id = 1;

  const query = `
      UPDATE about_quote_section 
      SET headerLine1 = ?, 
        headerLine2 = ?,
          image = ?, 
          shortDescription = ? ,
          highLight = ?
      WHERE id = ?
    `
  db.query(
    query,
    [ headerLine1,headerLine2, image, shortDescription,highLight, id],
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

// get Team Header Form
export const getTeamHeader = (req, res) => {
    const query = "SELECT * FROM about_team_header_section WHERE id = 1";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results[0]);
    });
  };
  
  // Update team header Form
  export const UpdateTeamHeader = (req, res) => {
    const {header, shortDescription,highLight } = req.body;
  
   
    const id = 1;
  
    const query = `
        UPDATE about_team_header_section 
        SET header = ?, 
            shortDescription = ? ,
            highLight = ?
        WHERE id = ?
      `
    db.query(
      query,
      [ header,shortDescription,highLight, id],
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
// Get all team members
export const getTeamMembers = (req, res) => {
  const query = "SELECT * FROM about_team_details"; // Assuming your table name is "about_team_details"
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Add a new team member
export const addTeamMember = (req, res) => {
  const { name, role, image } = req.body;
  const query =
    "INSERT INTO about_team_details (name, role, image) VALUES (?, ?, ?)";
  db.query(query, [name, role, image], (err, results) => {
    if (err) return res.status(500).json({ "addTeamMember error": err });
    return res.status(201).json({ message: "Team member added successfully!" });
  });
};

// Update a team member
export const updateTeamMember = (req, res) => {
  const { name, role, image } = req.body;
  const query =
    "UPDATE about_team_details SET name = ?, role = ?, image = ? WHERE id = ?";
  db.query(
    query,
    [name, role, image, req.params.id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Team member updated successfully!" });
    }
  );
};

// Delete a team member
export const deleteTeamMember = (req, res) => {
  const query = "DELETE FROM about_team_details WHERE id = ?";
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Team member deleted successfully!" });
  });
};
