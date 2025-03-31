const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post('/', async (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    
    const response = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
    
    return res.json({ response });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return res.status(500).json({ error: 'Failed to process your request' });
  }
});

module.exports = router;
