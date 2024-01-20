/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import bgVideo from "./bg.mp4";

import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [{ x, y }] = useWindowScroll();
  const viewportHeight = window.innerHeight;
  const scrollPercentage =
    (y / (document.documentElement.scrollHeight - viewportHeight)) * 100;

  useEffect(() => {
    const video = videoRef.current;
    if (isNaN(scrollPercentage) || isNaN(video.duration)) {
      return;
    }

    const calculatedCurrentTime = (video.duration * scrollPercentage) / 100;
    if (!isFinite(calculatedCurrentTime)) {
      console.error("Non-finite currentTime calculated!");
      return;
    }

    video.currentTime = calculatedCurrentTime;
  }, [scrollPercentage]);

  return (
    <div className="App">
      <div className="video">
        <video
          ref={videoRef}
          src={bgVideo}
          loop
          muted
          style={{ position: "fixed", top: 0, left: 0, height: "100%" }}
        />
      </div>
      <div className="One">
        <h1>hello {scrollPercentage?.toFixed(2)}%</h1>
      </div>
      <div className="Two">
        <h1>hello2 {scrollPercentage?.toFixed(2)}%</h1>
      </div>
      <div className="Three">
        <h1>hello3 {scrollPercentage?.toFixed(2)}%</h1>
      </div>
      <div className="Four">
        <h1>hello4 {scrollPercentage?.toFixed(2)}%</h1>
      </div>
    </div>
  );
}

export default App;
