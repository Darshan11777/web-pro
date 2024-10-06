import db from '../database/db.js'
// Get all slides
export const getSlides = (req, res) => {
    const query = "SELECT * FROM our_service";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(results);
    });
};

// Add a new slide
export const addSlide = (req, res) => {
    const { title, description, tags, imgUrl } = req.body;
    const query = "INSERT INTO our_service (title, description, tags, imgUrl) VALUES (?, ?, ?, ?)";
    db.query(query, [title, description, tags, imgUrl], (err, results) => {
        if (err) return res.status(500).json({"addSlide error":err});
        return res.status(201).json({ message: "Slide added successfully!" });
    });
};

// Update a slide
export const updateSlide = (req, res) => {


    const { title, description, tags, imgUrl } = req.body;
    const query = "UPDATE our_service SET title = ?, description = ?, tags = ?, imgUrl = ? WHERE id = ?";
    db.query(query, [title, description, tags, imgUrl, req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Slide updated successfully!" });
    });
};

// Delete a slide
export const deleteSlide = (req, res) => {
    const query = "DELETE FROM our_service WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Slide deleted successfully!" });
    });
};



// Get all processes
export const getProcesses = (req, res) => {
  const query = "SELECT * FROM our_process";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Add a new process
export const addProcess = (req, res) => {
  const { title, description, tags, imgUrl } = req.body;
  const query = "INSERT INTO our_process (title, description, tags) VALUES (?, ?, ?)";
  db.query(query, [title, description, tags], (err, results) => {
    if (err) return res.status(500).json({"addProcess error": err});
    return res.status(201).json({ message: "Process added successfully!" });
  });
};

// Update a process
export const updateProcess = (req, res) => {
  const { title, description, tags } = req.body;
  const query = "UPDATE our_process SET title = ?, description = ?, tags = ? WHERE id = ?";
  db.query(query, [title, description, tags, req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Process updated successfully!" });
  });
};

// Delete a process
export const deleteProcess = (req, res) => {
  const query = "DELETE FROM our_process WHERE id = ?";
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Process deleted successfully!" });
  });
};


// Get all works
export const getWorks = (req, res) => {
    const query = "SELECT * FROM our_work";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(results);
    });
};

// Add a new work
export const addWork = (req, res) => {
    const { description, tags, imgUrl } = req.body;
    const query = "INSERT INTO our_work (description, tags, imgUrl) VALUES (?, ?, ?)";
    db.query(query, [description, tags, imgUrl], (err, results) => {
        if (err) return res.status(500).json({"addWork error": err});
        return res.status(201).json({ message: "Work added successfully!" });
    });
};

// Update a work
export const updateWork = (req, res) => {
    const { description, tags, imgUrl } = req.body;
    console.log({description,tags,imgUrl});
    `INSERT INTO our_work (description, tags, imgUrl) VALUES ('Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy' ,'Website design,Ui/Ux,Mock up','https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728197202/webpro/siatxp8tykyxdiubsu3x.png' )`
    const query = "UPDATE our_work SET description = ?, tags = ?, imgUrl = ? WHERE id = ?";
    db.query(query, [description, tags, imgUrl, req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Work updated successfully!" });
    });
};

// Delete a work
export const deleteWork = (req, res) => {
    const query = "DELETE FROM our_work WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Work deleted successfully!" });
    });
};






// Get all reviews
export const getReviews = (req, res) => {
  const query = "SELECT * FROM reviews"; // Assuming your table name is "reviews"
  db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(results);
  });
};

// Add a new review
export const addReview = (req, res) => {
  const { name, review, email, rating, imgUrl } = req.body;
  const query = "INSERT INTO reviews (name, review, email, rating, imgUrl) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, review, email, rating, imgUrl], (err, results) => {
      if (err) return res.status(500).json({"addReview error":err});
      return res.status(201).json({ message: "Review added successfully!" });
  });
};

// Update a review
export const updateReview = (req, res) => {
  const { name, review, email, rating, imgUrl } = req.body;
  const query = "UPDATE reviews SET name = ?, review = ?, email = ?, rating = ?, imgUrl = ? WHERE id = ?";
  db.query(query, [name, review, email, rating, imgUrl, req.params.id], (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Review updated successfully!" });
  });
};

// Delete a review
export const deleteReview = (req, res) => {
  const query = "DELETE FROM reviews WHERE id = ?";
  db.query(query, [req.params.id], (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Review deleted successfully!" });
  });
};

