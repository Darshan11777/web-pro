import db from "../../../database/db.js";

// Get hero_section
export const getPortfolioHeaderSection = (req, res) => {
  const query = "SELECT * FROM work_page_portfolio_header_section where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update a hero section
export const updatePortfolioHeaderSection = (req, res) => {
  const {
    header_line_1,
    header_line_2,
    short_description,
    project_video,
    project_img,
  } = req.body;
  const query =
    "UPDATE work_page_portfolio_header_section SET header_line_1 = ?, header_line_2 = ?, short_description = ?, project_video = ?, project_img = ? WHERE id = ?";
  const id = 1;
  db.query(
    query,
    [
      header_line_1,
      header_line_2,
      short_description,
      project_video,
      project_img,
      id,
    ],
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
export const getProjectHighlights = (req, res) => {
  const query = "SELECT * FROM work_page_project_highlights where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update a hero section
export const updateProjectHighlights = (req, res) => {
  const { description, image, projectTitle } = req.body;
  const query =
    "UPDATE work_page_project_highlights SET description = ?, image = ?, projectTitle = ? WHERE id = ?";
  const id = 1;
  db.query(query, [description, image, projectTitle, id], (err, results) => {
    if (err) return res.status(500).json(err);

    // Check if any rows were affected
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Hero section not found." });
    }

    return res
      .status(200)
      .json({ message: "Hero section updated successfully!" });
  });
};

// Get hero_section
export const getProjectHighlightsSection2 = (req, res) => {
  const query =
    "SELECT * FROM work_page_project_highlights_section_2 where id=1";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update a hero section
export const updateProjectHighlightsSection2 = (req, res) => {
  const { description, image, projectTitle } = req.body;
  const query =
    "UPDATE work_page_project_highlights_section_2 SET description = ?, image = ?, projectTitle = ? WHERE id = ?";
  const id = 1;
  db.query(query, [description, image, projectTitle, id], (err, results) => {
    if (err) return res.status(500).json(err);

    // Check if any rows were affected
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Hero section not found." });
    }

    return res
      .status(200)
      .json({ message: "Hero section updated successfully!" });
  });
};

// Get Project Overview section
export const getProjectOverview = (req, res) => {
  const query = "SELECT * FROM work_page_project_overview_section ";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Update Project Overview section
export const updateProjectOverview = (req, res) => {
  const { sections } = req.body;
  const query =
    "UPDATE work_page_project_overview_section SET header = ?, image = ? WHERE id = ?";

  // Use Promise.all to wait for all queries to finish
  Promise.all(
    sections.map((item, index) => {
      const { header, image } = item;
      const id = index + 1;
      return new Promise((resolve, reject) => {
        db.query(query, [header, image, id], (err, results) => {
          if (err) reject(err);
          resolve(results); // Resolve with results if needed
        });
      });
    })
  )
    .then(() => {
      // Send a single success response after all updates
      return res
        .status(200)
        .json({ message: "Project Overview section updated successfully!" });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

// Get Project Overview section
export const getProjectInfo = (req, res) => {
  const query = "SELECT * FROM work_page_project_info ";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results[0]);
  });
};

// Update a hero section
export const updateProjectInfo = (req, res) => {
  const { description } = req.body;
  const query =
    "UPDATE work_page_project_info SET description = ? where id = ?";
  const id = 1;
  db.query(query, [description, id], (err, results) => {
    if (err) return res.status(500).json(err);

    // Check if any rows were affected
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Hero section not found." });
    }

    return res
      .status(200)
      .json({ message: "Hero section updated successfully!" });
  });
};


// PortfolioSnapshotSlides table functions

// Get all portfolio snapshot slides
export const getPortfolioSnapshotSlides = (req, res) => {
  const query = "SELECT id, image FROM work_page_portfolio_snapshort_slides"; // Only selecting 'id' and 'image'
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Add a new portfolio snapshot slide
export const addPortfolioSnapshotSlide = (req, res) => {
  const { image } = req.body; // Only using 'image' field
  const query = "INSERT INTO work_page_portfolio_snapshort_slides (image) VALUES (?)";
  db.query(query, [image], (err, results) => {
    if (err) return res.status(500).json({ "addPortfolioSnapshotSlide error": err });
    return res.status(201).json({ message: "Portfolio snapshot slide added successfully!" });
  });
};

// Update a portfolio snapshot slide
export const updatePortfolioSnapshotSlide = (req, res) => {
  const { image } = req.body; // Only using 'image' field
  const query = "UPDATE work_page_portfolio_snapshort_slides SET image = ? WHERE id = ?";
  db.query(query, [image, req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Portfolio snapshot slide updated successfully!" });
  });
};

// Delete a portfolio snapshot slide
export const deletePortfolioSnapshotSlide = (req, res) => {
  const query = "DELETE FROM work_page_portfolio_snapshort_slides WHERE id = ?";
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Portfolio snapshot slide deleted successfully!" });
  });
};
