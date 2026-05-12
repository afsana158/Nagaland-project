import React from "react"
import "./../../styles/HomeStyles.css"
import axios from "axios"
import { useState } from "react"
import bgImage from './../../assets/section2/bg3section2.png'
import Lottie from "lottie-react"
import robotAnimation from './../../assets/section2/robot.json' 

function Section2() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "https://naga-bot-oid3.onrender.com/api/chatbot",
        {
          message,
        }
      );

      setReply(res.data.response);

    } catch (err) {
      console.log(err);
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section
      className="section2"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section2-overlay" />
    <div className="section2-content">
        {/* LEFT: Robot animation */}
        <div className="section2-robot">
          <Lottie
            animationData={robotAnimation}
            loop={true}
            autoplay={true}
          />
        </div>

        {/* RIGHT: empty for now (text later if you want) */}
      <div className="ai-chatbox">

            <div className="ai-chatbar">
              <input
                type="text"
                placeholder="Ask anything about Nagaland..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="ai-input"
              />

              <button
                className="ai-send-btn"
                onClick={sendMessage}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            {/* RESPONSE */}
            {loading && (
              <div className="ai-response">
                Thinking...
              </div>
            )}

            {!loading && reply && (
              <div className="ai-response">
                {reply}
              </div>
            )}

          </div>
        </div>
          
      <div className="section2-bottom-text">
        <h1>Gems of Nagaland</h1>
        <p>Discover the hidden treasures and cultural gems of Nagaland</p>
      </div>
    </section>
  );
}

export default Section2;
