import React from 'react';

import { Link } from 'react-router-dom';

import './Video.styles.css';

function Video({ videoId, title, channelName, image }) {
  return (
    <section className="video-wrapper">
      <Link
        to={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        className="nav-links disabledCursor"
      >
        <div className="clip show-play-icon hoverable">
          <section className="preview-container">
            <img src={image} alt="" />
            <span className="time-status">5:15</span>
            <div className="overlay-preview">
              <div className="play-icon">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                >
                  <g className="style-scope yt-icon">
                    <path d="M8 5v14l11-7z" className="style-scope yt-icon" />
                  </g>
                </svg>
              </div>
            </div>
            <section className="content-container">
              <h3 title={title}>{title}</h3>
              <footer>
                <p
                  href="https://www.youtube.com/channel/UCukIPSb0N6_vRVD_5VlzqQg"
                  target="_blank"
                  className="channel-name"
                  title={channelName}
                >
                  {channelName}
                </p>
              </footer>
              <button className="more-button" type="button">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      className="style-scope yt-icon"
                    />
                  </g>
                </svg>
              </button>
            </section>
          </section>
        </div>
      </Link>
    </section>
  );
}

export default Video;
