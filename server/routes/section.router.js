import express from "express";
import { getSection } from "../controller/section.controller.js";


const router = express.Router();

// Get all slides
router.get("/", getSection);

export default router;