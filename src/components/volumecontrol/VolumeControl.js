import React, { useState } from 'react'

function VolumeControl(url) {
const[volume,setVolume]=useState(0.6);





    return (
        <div className="volume-cont">
        <div className="inner-round volume">
          <button
            className="play-btn plus"
            onClick={() => {
              console.log(url);
              url.volume=0.3;

            }}
          >
            +
          </button>
          </div>
          <div className="volume-display-cont">
              <div className="vol one"></div>
              <div className="vol two"></div>
              <div className="vol three"></div>
              <div className="vol four"></div>
              <div className="vol five"></div>
          </div>
          <div className="inner-round volume">
          <button
            className="play-btn plus"
            onClick={() => {
              console.log("plus +");
              url.volume=0.8;
            }}
          >
            +
          </button>
          </div>
        </div>
    )
}

export default VolumeControl
