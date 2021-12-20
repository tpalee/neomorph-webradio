import React, { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import Station from "../station/Station";
import "../radio/Radio.css";

export default function Radio() {
  const api = new RadioBrowserApi("My Radio App");
  const [stations, setStations] = useState();






  useEffect(() => {
    async function getStations() {
      try {
        const result = await api.searchStations({
          countryCode: "NL",
          limit: 100,
          offset: 0,

          tag: "dance",
        });
        console.log(result);
        setStations(result);
      } catch (e) {
        console.error(e);
      }
    }

    getStations();
  }, []);

  return (
    <div className="radio-cont">


      {stations && stations.map((station)=>

    <Station
    key={station.id}
    url={station.url}
    stationName={station.name}
    favicon={station.favicon}
    />

      )}




    </div>
  );
}
