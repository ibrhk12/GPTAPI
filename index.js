require(dotenv).config();
const axios = require("axios");

async function callOpenAI(prompt) {
  const API_KEY = process.env.OPENAI_API_KEY;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        prompt: prompt,
        max_tokens: 100,
        temprature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response", response.data.choices[0].text);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
  }
}

callOpenAI("Please respond that you received this text");
