import React, { useState } from "react";
import styles from "./Chat.module.css";
import rehypeHighlight from "rehype-highlight";
import { Button, Input, Textarea } from "@heroui/react";
import ReactMarkdown from "react-markdown";

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async () => {
    if (!inputMessage.trim()) {
      setError("Please enter a message");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: inputMessage }],
          temperature: 0.7,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || "API request failed");
      }

      setResponse(
        data.choices?.[0]?.message?.content || "No response generated"
      );
    } catch (err) {
      setError(err.message || "An error occurred");
      console.error("API Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <div className={styles.qBlock}>
          <div className={styles.text}>
            <Input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Type your message..."
              disabled={isLoading}
            ></Input>
          </div>
          <div className={styles.send}>
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              color="primary"
              variant="shadow"
              className={isLoading ? "loading" : ""}
            >
              {isLoading ? "Thinking..." : "Ask"}
            </Button>
          </div>
        </div>
        <div className={styles.ans}>
          {error && <div className="error-message">Error: {error}</div>}
          {response && (
            <div className="response-box">
              <strong>Response:</strong>
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {response}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
