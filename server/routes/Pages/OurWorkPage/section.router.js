
import express from 'express';
// Import your controller function here
import { validate } from '../../../middleware/validate-middleware.js';
import { portfolio_header_section_dataSchema, portfolio_snapshot_slides, project_highlights_section_dataSchema, project_info_section_dataSchema, project_overview_section_dataSchema } from '../../../validators/OurWorkPage/section.validator.js';
import { addPortfolioSnapshotSlide, deletePortfolioSnapshotSlide, getPortfolioHeaderSection, getPortfolioSnapshotSlides, getProjectHighlights, getProjectHighlightsSection2, getProjectInfo, getProjectOverview, updatePortfolioHeaderSection, updatePortfolioSnapshotSlide, updateProjectHighlights, updateProjectHighlightsSection2, updateProjectInfo, updateProjectOverview } from '../../../controller/pages/OurWorkPage/section.controller.js';
import authenticateAdmin from '../../../middleware/authenticateAdmin.js';

const router = express.Router();

// Define your route and HTTP method
router.get('/portfolio-header', getPortfolioHeaderSection); 
router.put('/portfolio-header',authenticateAdmin,validate(portfolio_header_section_dataSchema), updatePortfolioHeaderSection); 
// Define your route and HTTP method
router.get('/project-highlights', getProjectHighlights); 
router.put('/project-highlights',authenticateAdmin,validate(project_highlights_section_dataSchema), updateProjectHighlights); 
// Define your route and HTTP method
router.get('/project-highlights-section-2', getProjectHighlightsSection2); 
router.put('/project-highlights-section-2',authenticateAdmin,validate(project_highlights_section_dataSchema), updateProjectHighlightsSection2); 
// Define your route and HTTP method
router.get('/project-overview', getProjectOverview); 
router.put('/project-overview',authenticateAdmin,validate(project_overview_section_dataSchema), updateProjectOverview); 
// Define your route and HTTP method
router.get('/project-info', getProjectInfo); 
router.put('/project-info',authenticateAdmin,validate(project_info_section_dataSchema), updateProjectInfo); 


// news slides

router.get("/portfolio-snapshot-slides", getPortfolioSnapshotSlides);

router.post("/portfolio-snapshot-slides", authenticateAdmin,validate(portfolio_snapshot_slides), addPortfolioSnapshotSlide);

router.put("/portfolio-snapshot-slides/:id",authenticateAdmin, validate(portfolio_snapshot_slides), updatePortfolioSnapshotSlide);

router.delete("/portfolio-snapshot-slides/:id", authenticateAdmin,deletePortfolioSnapshotSlide);
export default router;
