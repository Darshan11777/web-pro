import express from 'express';
import {getSlides,addSlide,updateSlide,deleteSlide, getProcesses, addProcess, updateProcess, deleteProcess, getWorks, addWork, updateWork, deleteWork, getReviews, addReview, updateReview, deleteReview, getFAQs, addFAQ, updateFAQ, deleteFAQ, getNews, addNews, updateNews, deleteNews} from '../controller/data.controller.js'
const router = express.Router();

// Get all slides
router.get('/our-service', getSlides);

// Add a new slide
router.post('/our-service', addSlide);

// Update a slide
router.put('/our-service/:id', updateSlide);

// Delete a slide
router.delete('/our-service/:id', deleteSlide);

// our process slides 

router.get('/our-process', getProcesses);


router.post('/our-process', addProcess);

router.put('/our-process/:id', updateProcess);


router.delete('/our-process/:id', deleteProcess);

// our work slides

router.get('/our-work', getWorks);


router.post('/our-work', addWork);

router.put('/our-work/:id', updateWork);


router.delete('/our-work/:id', deleteWork);


// Review slides

router.get('/reviews', getReviews);


router.post('/reviews', addReview);

router.put('/reviews/:id', updateReview);


router.delete('/reviews/:id', deleteReview);

// faqs slides

router.get('/faqs', getFAQs);


router.post('/faqs', addFAQ);

router.put('/faqs/:id', updateFAQ);


router.delete('/faqs/:id', deleteFAQ);
// news slides

router.get('/news', getNews);


router.post('/news', addNews);

router.put('/news/:id', updateNews);


router.delete('/news/:id', deleteNews);
export default router;
