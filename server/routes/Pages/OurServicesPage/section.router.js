import express from 'express'
import { validate } from '../../../middleware/validate-middleware.js'
import { our_services_it_services_header_schema } from '../../../validators/OurServices/our-services-section.validtor.js'
import { addOurServicesSlide, deleteOurServicesSlide, getItServicesHeader, getOurServicesSlides, UpdateItServicesHeader, updateOurServicesSlide } from '../../../controller/pages/OurServicesPage/section.controller.js'
import authenticateAdmin from './../../../middleware/authenticateAdmin.js';
import { our_servicesSchema } from '../../../validators/HomePage/slides.validator.js';
const router = express.Router()
// it services header
router.get('/it-services-header',getItServicesHeader)
router.put('/it-services-header',authenticateAdmin,validate(our_services_it_services_header_schema),UpdateItServicesHeader)


// it services Detailes section
// Get all slides
router.get("/our-services", getOurServicesSlides);

// Add a new slide
router.post("/our-services",authenticateAdmin, validate(our_servicesSchema), addOurServicesSlide);

// Update a slide
router.put("/our-services/:id",authenticateAdmin, validate(our_servicesSchema), updateOurServicesSlide);

// Delete a slide
router.delete("/our-services/:id",authenticateAdmin, deleteOurServicesSlide);

export default router


