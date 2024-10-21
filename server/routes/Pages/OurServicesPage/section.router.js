import express from 'express'
import { validate } from '../../../middleware/validate-middleware.js'
import { our_services_it_services_header_schema } from '../../../validators/OurServices/our-services-section.validtor.js'
import { addOurServicesSlide, addWork, deleteOurServicesSlide, deleteWork, getItServicesHeader, getOurServicesSlides, getOurWorkHeader, getWorks, UpdateItServicesHeader, updateOurServicesSlide, updateOurWorkHeader, updateWork } from '../../../controller/pages/OurServicesPage/section.controller.js'
import authenticateAdmin from './../../../middleware/authenticateAdmin.js';
import { our_servicesSchema, our_WorkSchema } from '../../../validators/HomePage/slides.validator.js';
import { our_work_header_dataSchema } from '../../../validators/HomePage/section-header.validator.js';
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


// our Work header
router.get("/our-work/header", getOurWorkHeader);

router.put(
  "/our-work/header",
  validate(our_work_header_dataSchema),
  updateOurWorkHeader
);


// our work slides

router.get("/our-work", getWorks);

router.post("/our-work", validate(our_WorkSchema), addWork);

router.put("/our-work/:id", validate(our_WorkSchema), updateWork);

router.delete("/our-work/:id", deleteWork);

export default router


