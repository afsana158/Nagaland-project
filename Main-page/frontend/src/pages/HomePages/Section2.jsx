import React from "react"
import "./../../styles/HomeStyles.css"
import { useNavigate } from "react-router-dom"
import bgImage from './../../assets/section2/bg3section2.png'
import Lottie from "lottie-react"
import robotAnimation from './../../assets/section2/robot.json' 

function Section2() {
  const navigate = useNavigate();

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
        <div className="section2-right">
                <h2 className="ai-heading">
            Your Smart AI Travel Companion
          </h2>

          <p className="ai-subtext">
            Plan, explore, and discover Nagaland — powered by AI.
          </p>

          {/* CLICKABLE TEXT BAR */}
          <div
            className="ai-chatbar"
            onClick={() => navigate("/chatbot")}
          >
            <span>Ask anything about Nagaland…</span>
            <i className="bi bi-arrow-right"></i>
          </div>
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
