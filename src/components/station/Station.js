import React, { useState, useRef, useEffect } from "react";
import VolumeControl from "../volumecontrol/VolumeControl";
import "../station/Station.css";
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";
import{BiStation} from "react-icons/bi";

function Station({ url, stationName, favicon, key }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(url));
  let volume = 0.8;

  const volumeFunction = function (value) {
    value === "plus" ? (volume += 0.2) : (volume -= 0.2);
    if (volume < 0) volume = 0;
    if (volume > 1) volume = 1;

    const bars = document.getElementById(stationName).childNodes;
    for (let i = 0; i < bars.length; i++) {
      if (bars[i].classList.contains("active")) {
        bars[i].classList.remove("active");
      }
    }
    for (let i = 0; i < Math.round((volume * 10) / 2); i++) {
      bars[i].classList.add("active");
    }

  };

  const play = () => {
    setPlaying(true);
    audioRef.current.play().catch((error) => {
      console.log(error);
    });
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <article className="station-cont">
      
      <div className="inner-cont">
        <div className="blueScreen">
        {!playing?
        <h4 className="station-name">{stationName}</h4>:
        <h4 className="station-name playing">{stationName}</h4>}
        </div>
     
      </div>
      <div className="inner-round">
        <button
          className="play-btn"
          onClick={() => {
            playing === true ? pause() : play();
            volumeFunction();
          }}
        >
          {playing === true ? <FaPause className="play-icon"/> : <FaPlay className="play-icon" />}
        </button>
      </div>

      <div className="volume-cont">
      
          <button
            className="play-btn plus"
            onClick={() => {
              volumeFunction("min");
              audioRef.current.volume = volume;
            }}
          >
            <p>-</p>
          </button>

        <div id={stationName} className="volume-display-cont">
          <div className="vol one"></div>
          <div className={`vol two ${stationName}`}></div>
          <div className="vol three"></div>
          <div className="vol four"></div>
          <div className="vol five"></div>
        </div>
        
          <button
            className="play-btn plus"
            onClick={() => {
              volumeFunction("plus");
              audioRef.current.volume = volume;
            }}
          >
            <p>+</p>
          </button>
        </div>

        <div className="bottom-cont">
            <button className="favourite-btn"><FaHeart/></button>
            <button className="station-web-btn">
{favicon?<img className="station-img" src={favicon}/>:<BiStation className="bistation"/>}
<p>
  

</p>
</button>
        </div>
      
    </article>
  );
}

export default Station;
