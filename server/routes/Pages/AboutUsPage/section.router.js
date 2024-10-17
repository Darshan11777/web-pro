
import express from 'express';
import { getAboutUsHeroSection, getHistory, getHistoryDetailes, getImageProjectSection, getProjectSection, UpdateAboutUsHeroSection, UpdateHistoryDetailesSection, UpdateHistorySection, UpdateImageProjectSection, UpdateProjectSection,UpdateQuoteSection,getQuote, getTeamHeader, UpdateTeamHeader, getTeamMembers, updateTeamMember, addTeamMember, deleteTeamMember } from '../../../controller/pages/AboutUsPage/section.controller.js';
import authenticateAdmin from './../../../middleware/authenticateAdmin.js';
import { validate } from '../../../middleware/validate-middleware.js';
import { about_hero_section_dataSchema, about_history_detailes_section_dataSchema, about_history_section_dataSchema, about_project_dataSchema, image_project_dataSchema ,about_quote_section_dataSchema,about_team_header_section_dataSchema, about_team_detailes_section_dataSchema} from '../../../validators/AboutUsPage/section.validator.js';

const router = express.Router();

// Define your route and HTTP method
router.get('/hero-section',getAboutUsHeroSection); 
router.put('/hero-section',authenticateAdmin,validate(about_hero_section_dataSchema), UpdateAboutUsHeroSection); 
// project section
router.get('/project',getProjectSection); 
router.put('/project',authenticateAdmin,validate(about_project_dataSchema), UpdateProjectSection); 

// image section
router.get('/image-project',getImageProjectSection); 
router.put('/image-project',authenticateAdmin,validate(image_project_dataSchema), UpdateImageProjectSection); 
// history section
router.get('/history',getHistory); 
router.put('/history',authenticateAdmin,validate(about_history_section_dataSchema), UpdateHistorySection); 

// history detailes section
router.get('/history-detailes',getHistoryDetailes); 
router.put('/history-detailes',authenticateAdmin,validate(about_history_detailes_section_dataSchema), UpdateHistoryDetailesSection); 
//about Quote  section
router.get('/quote',getQuote); 
router.put('/quote',authenticateAdmin,validate(about_quote_section_dataSchema), UpdateQuoteSection); 
//about team header  section
router.get('/team-header',getTeamHeader); 
router.put('/team-header',authenticateAdmin,validate(about_team_header_section_dataSchema), UpdateTeamHeader); 

//about team Detailes  section
router.get('/team-details',getTeamMembers); 
router.put('/team-details/:id',authenticateAdmin,validate(about_team_detailes_section_dataSchema), updateTeamMember); 
router.post('/team-details',authenticateAdmin,validate(about_team_detailes_section_dataSchema), addTeamMember); 
router.delete('/team-details/:id',authenticateAdmin,deleteTeamMember); 



export default router;
