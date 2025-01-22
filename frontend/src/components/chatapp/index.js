import React, { useEffect, useState } from "react";

const ChatGPTSocket = () => {
  const [messages, setMessages] = useState([]); // To store chat messages
  const [input, setInput] = useState(""); // For user input
  const [ws, setWs] = useState(null); // WebSocket instance

  useEffect(() => {
    // Replace with the actual OpenAI WebSocket endpoint
    const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17";

    const socket = new WebSocket(url);

    setWs(socket);

    // On connection open
    socket.onopen = () => {
      console.log("Connected to ChatGPT WebSocket.");
    };

    // On receiving messages
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    // On connection error
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // On connection close
    socket.onclose = (event) => {
      console.log("WebSocket closed:", event.reason);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && input.trim()) {
      const message = { role: "user", content: input };
      ws.send(JSON.stringify(message));
      setMessages((prev) => [...prev, message]);
      setInput(""); // Clear input field
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>ChatGPT WebSocket</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{msg.role === "user" ? "You" : "ChatGPT"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        style={{ width: "80%", padding: "10px", marginRight: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatGPTSocket;
