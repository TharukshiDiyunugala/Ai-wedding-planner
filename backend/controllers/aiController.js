import { generateOpenAIResponse, generateOpenAIResponseWithHistory, generateStructuredResponse } from '../utils/openai.js';

/**
 * Generate AI chat response
 */
export const generateAIResponse = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Build conversation history for context
    const messages = [
      {
        role: 'system',
        content: `You are an expert AI wedding planning assistant. You help couples plan their perfect wedding by providing advice on venues, budgets, timelines, themes, vendors, and all aspects of wedding planning. Be helpful, enthusiastic, and provide detailed, practical advice. Keep responses concise but informative.`
      }
    ];

    // Add conversation history if provided
    if (history && Array.isArray(history)) {
      history.forEach(msg => {
        messages.push({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.text
        });
      });
    }

    // Add current message
    messages.push({
      role: 'user',
      content: message
    });

    const response = await generateOpenAIResponseWithHistory(messages);

    res.json({ response });
  } catch (error) {
    console.error('AI Chat Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      message: error.message 
    });
  }
};

/**
 * Generate budget recommendations
 */
export const generateBudget = async (req, res) => {
  try {
    const { totalBudget, preferences, guestCount } = req.body;

    if (!totalBudget) {
      return res.status(400).json({ error: 'Total budget is required' });
    }

    const prompt = `Generate a detailed wedding budget breakdown for a total budget of $${totalBudget}. ${guestCount ? `The wedding will have ${guestCount} guests.` : ''} ${preferences ? `Preferences: ${preferences}` : ''}
    
    Return the response as a JSON object with this structure:
    {
      "total": ${totalBudget},
      "categories": [
        {"name": "Venue", "allocated": amount, "spent": 0},
        {"name": "Catering", "allocated": amount, "spent": 0},
        {"name": "Photography", "allocated": amount, "spent": 0},
        {"name": "Flowers", "allocated": amount, "spent": 0},
        {"name": "Music/DJ", "allocated": amount, "spent": 0},
        {"name": "Dress & Attire", "allocated": amount, "spent": 0},
        {"name": "Decorations", "allocated": amount, "spent": 0},
        {"name": "Invitations", "allocated": amount, "spent": 0},
        {"name": "Miscellaneous", "allocated": amount, "spent": 0}
      ]
    }`;

    const systemMessage = 'You are a wedding budget planning expert. Provide realistic budget allocations based on industry standards.';

    const budget = await generateStructuredResponse(prompt, systemMessage);

    res.json({ budget });
  } catch (error) {
    console.error('Budget Generation Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate budget',
      message: error.message 
    });
  }
};

/**
 * Generate wedding timeline
 */
export const generateTimeline = async (req, res) => {
  try {
    const { weddingType, startTime, duration } = req.body;

    const prompt = `Generate a detailed wedding day timeline for a ${weddingType || 'traditional'} wedding starting at ${startTime || '10:00 AM'} lasting approximately ${duration || '8 hours'}.
    
    Return the response as a JSON array with this structure:
    [
      {"time": "10:00 AM", "event": "Guest Arrival", "duration": "30 min", "status": "pending"},
      {"time": "10:30 AM", "event": "Ceremony Begins", "duration": "45 min", "status": "pending"}
    ]
    
    Include all major events: arrival, ceremony, photos, cocktail hour, reception, dinner, speeches, first dance, cake cutting, dancing, and send-off.`;

    const systemMessage = 'You are a wedding timeline planning expert. Create realistic, well-paced wedding day schedules.';

    const timeline = await generateStructuredResponse(prompt, systemMessage);

    res.json({ timeline });
  } catch (error) {
    console.error('Timeline Generation Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate timeline',
      message: error.message 
    });
  }
};

/**
 * Generate wedding theme suggestions
 */
export const generateTheme = async (req, res) => {
  try {
    const { preferences, season, venue } = req.body;

    const prompt = `Generate 3-5 wedding theme suggestions based on these details:
    ${preferences ? `Preferences: ${preferences}` : ''}
    ${season ? `Season: ${season}` : ''}
    ${venue ? `Venue type: ${venue}` : ''}
    
    Return the response as a JSON array with this structure:
    [
      {
        "name": "Romantic Garden",
        "description": "Beautiful description",
        "primaryColor": "#hex",
        "secondaryColor": "#hex",
        "colors": ["#hex1", "#hex2", "#hex3"],
        "elements": ["flowers", "candles", "fairy lights"]
      }
    ]`;

    const systemMessage = 'You are a wedding theme and design expert. Create beautiful, cohesive theme suggestions.';

    const themes = await generateStructuredResponse(prompt, systemMessage);

    res.json({ themes });
  } catch (error) {
    console.error('Theme Generation Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate themes',
      message: error.message 
    });
  }
};

export default {
  generateAIResponse,
  generateBudget,
  generateTimeline,
  generateTheme
};
