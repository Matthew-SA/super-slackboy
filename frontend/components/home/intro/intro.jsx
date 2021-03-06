import React from 'react';
import {Link} from 'react-router-dom';

function Intro() {

  return (
    <div>
      <div className="intro-banner">
        <video autoPlay playsInline loop muted className="background-vid" poster="https://a.slack-edge.com/59662/marketing/img/homepage/video/brand-campaign_hero-poster.jpg">
          <source src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4" type="video/mp4" />
        </video>
        <header className="intro-header">
          <h1>Super SlackBoy replaces email inside your company</h1>
          <p>Keep conversations organized in Super SlackBoy, the smart alternative to email.</p>
          <div className="intro-buttons">
            <Link to="/login">
              <button className="purple-button" style={{ height: "57px", width: "155px" }}>
                TRY DEMO
              </button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Intro;
