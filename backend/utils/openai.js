import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Generate AI response using OpenAI
 * @param {string} prompt - The user's prompt
 * @param {string} systemMessage - System message to set context
 * @param {number} maxTokens - Maximum tokens for response
 * @returns {Promise<string>} - AI generated response
 */
export const generateOpenAIResponse = async (prompt, systemMessage = 'You are a helpful AI wedding planning assistant.', maxTokens = 1000) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemMessage
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate AI response');
  }
};

/**
 * Generate AI response with conversation history
 * @param {Array} messages - Array of message objects with role and content
 * @param {number} maxTokens - Maximum tokens for response
 * @returns {Promise<string>} - AI generated response
 */
export const generateOpenAIResponseWithHistory = async (messages, maxTokens = 1000) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: maxTokens,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate AI response');
  }
};

/**
 * Generate structured JSON response from OpenAI
 * @param {string} prompt - The user's prompt
 * @param {string} systemMessage - System message to set context
 * @returns {Promise<Object>} - Parsed JSON response
 */
export const generateStructuredResponse = async (prompt, systemMessage) => {
  try {
    const response = await generateOpenAIResponse(prompt, systemMessage, 2000);
    
    // Try to parse JSON from the response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('No valid JSON found in response');
  } catch (error) {
    console.error('Structured response error:', error);
    throw error;
  }
};

export default {
  generateOpenAIResponse,
  generateOpenAIResponseWithHistory,
  generateStructuredResponse
};
