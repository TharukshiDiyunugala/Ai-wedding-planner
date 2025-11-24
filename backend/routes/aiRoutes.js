import express from 'express';
import { generateAIResponse, generateBudget, generateTimeline, generateTheme } from '../controllers/aiController.js';

const router = express.Router();

// AI Chat endpoint
router.post('/chat', generateAIResponse);

// Generate budget recommendations
router.post('/generateBudget', generateBudget);

// Generate wedding timeline
router.post('/generateTimeline', generateTimeline);

// Generate theme suggestions
router.post('/generateTheme', generateTheme);

export default router;
