import './SeasonDisplay.css'
import React from "react";

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
  
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName}`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName}`} />
      </div>
    );
  };


const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun icon",
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake icon",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};



export default SeasonDisplay;
