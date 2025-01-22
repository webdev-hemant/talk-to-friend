const WebSocket = require('ws')

// Replace with the actual OpenAI WebSocket endpoint
const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17";

// Ensure your OpenAI API key is securely stored (e.g., in environment variables)
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("API key not found in environment variables.");
  process.exit(1);
}

const ws = new WebSocket(url, {
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Beta": "realtime=v1",
  },
});

// When the WebSocket connection opens
ws.on("open", () => {
  console.log("Connected to ChatGPT server.");

  // Sending an initial message to the model
  const initialMessage = {
    role: "user",
    content: "Hello, ChatGPT!",
  };

  ws.send(JSON.stringify(initialMessage));
});

// Handling incoming messages from the server
ws.on("message", (data) => {
  try {
    const message = JSON.parse(data);
    console.log("Received response:", message);
  } catch (error) {
    console.error("Error parsing incoming message:", error);
  }
});

// Handle connection errors
ws.on("error", (error) => {
  console.error("WebSocket error:", error);
});

// To send events, create a JSON-serializeable data structure that
// matches a client-side event (see API reference)
const event = {
  type: "response.create",
  response: {
    modalities: ["audio", "text"],
    instructions: "Give me a haiku about code.",
  }
};

ws.send(JSON.stringify(event));

// Handle connection closure
ws.on("close", (code, reason) => {
  console.log(`Connection closed (Code: ${code}, Reason: ${reason})`);
});
