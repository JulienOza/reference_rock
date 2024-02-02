/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import oldTvImage from "./assets/photos/old_tv_frame_dark.png";

function App() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <>
      <Navbar />
      <main className="main_container">
        <button className="sound_toggle" onClick={toggleMute}>
          {isMuted ? "Mute" : "Sound"}
        </button>
        <img
          className="tv_frame"
          src={oldTvImage}
          alt="vieux poste de tv"
          draggable="false"
        />
        <video
          className="teaser_rr"
          width="320"
          height="240"
          autoPlay
          loop
          muted={isMuted}
        >
          <source src="../src/assets/videos/teaser_rr.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  );
}

export default App;
