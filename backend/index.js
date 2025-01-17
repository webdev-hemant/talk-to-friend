require('dotenv').config();
const express = require('express');
// const { Configuration, OpenAIApi } = require('openai');
const OpenAI = require('openai');
const openai = new OpenAI();

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// OpenAI Configuration
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// POST route to interact with ChatGPT
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // const response = await openai.createChatCompletion({
    //   model: "gpt-4",
    //   messages: [{ role: "user", content: prompt }],
    // });

    // const message = response.data.choices[0].message.content;
    const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        store: true,
        messages: [
            {"role": "user", "content": "write a haiku about ai"}
        ]
    });
    console.log(completion);
    res.json({ reply: completion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
