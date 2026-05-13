import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const FLASK_URL = "https://naga-bot-oid3.onrender.com/api/chatbot";

const CHIPS = [
  "Top places",
  "Local food",
  "Hotels",
  "3-day itinerary",
  "Transport",
];

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);

    try {
      const res = await fetch(`${FLASK_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ Cannot reach assistant. Is Flask running?",
          error: true,
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div className="fcb-window">
          {/* HEADER */}
          <div className="fcb-header">
            <div className="fcb-header-left">
              <span className="fcb-header-icon">🧭</span>
              <div>
                <p className="fcb-header-title">Nagaland Assistant</p>
                <p className="fcb-header-sub">Ask me anything</p>
              </div>
            </div>
            <button
              className="fcb-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="fcb-messages">
            {messages.length === 0 && (
              <div className="fcb-empty">
                <span>🌄</span>
                <p>Discover Nagaland with AI</p>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`fcb-msg ${m.role} ${m.error ? "error" : ""}`}
              >
                {m.text.split("\n").map((line, j) =>
                  line ? (
                    <span key={j}>
                      {line}
                      <br />
                    </span>
                  ) : null,
                )}
              </div>
            ))}

            {loading && (
              <div className="fcb-msg bot">
                <span className="fcb-dots">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* QUICK CHIPS */}
          {messages.length === 0 && (
            <div className="fcb-chips">
              {CHIPS.map((c) => (
                <button key={c} onClick={() => sendMessage(c)}>
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* INPUT */}
          <div className="fcb-input-bar">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message…"
              disabled={loading}
              autoFocus
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              aria-label="Send"
            >
              &#10148;
            </button>
          </div>
        </div>
      )}

      {/* TOGGLE BUTTON */}
      <button
        className={`fcb-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle chatbot"
      >
        {open ? "✕" : "🧭"}
      </button>
    </>
  );
}
