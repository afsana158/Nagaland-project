import { useState } from "react";
import "./Chatbot.css";

const faqResponses = [
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hi 👋 Welcome to Nagacrafts! How can I help you today?",
  },
  {
    keywords: ["delivery", "shipping"],
    answer:
      "We deliver across India 🇮🇳. Orders usually arrive in 5–7 business days.",
  },
  {
    keywords: ["return", "refund"],
    answer: "Yes! We offer easy returns within 7 days of delivery.",
  },
  {
    keywords: ["payment", "pay", "cod"],
    answer:
      "We accept UPI, debit/credit cards, net banking, and Cash on Delivery.",
  },
  {
    keywords: ["handmade", "authentic"],
    answer:
      "Absolutely! All our products are 100% handcrafted by artisans from Nagaland.",
  },
  {
    keywords: ["jewellery", "necklace"],
    answer: "Our jewellery is handmade using traditional tribal techniques.",
  },
  {
    keywords: ["contact", "support"],
    answer:
      "You can contact us via the Contact page or email support@nagacrafts.com",
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();

    let botReply =
      "Sorry 😅 I didn’t understand that. Try asking about delivery, payment, or products.";

    for (let faq of faqResponses) {
      if (faq.keywords.some((word) => userMessage.includes(word))) {
        botReply = faq.answer;
        break;
      }
    }

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: botReply },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Nagacrafts Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button onClick={() => setInput("Delivery time")}>Delivery</button>
            <button onClick={() => setInput("Payment options")}>Payment</button>
            <button onClick={() => setInput("Return policy")}>Returns</button>
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask about products, orders, delivery..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
