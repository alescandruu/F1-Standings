import React from "react";
import "./Pilot.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReactCountryFlag from "react-country-flag";

function Pilot(props) {
   const {
      bestTeam,
      position,
      teamName,
      firstPilot,
      secondPilot,
      team,
      number,
      country,
      points,
      increaseFunc,
      decreaseFunc,
      firstPilotImage,
      secondPilotImage,
   } = props;

   return (
      <>
         {bestTeam ? (
            <div className="bestTeamCard">
               <p>{team}</p>
               <p>{teamName}</p>
               <p>{firstPilot}</p>
               <p>{secondPilot}</p>
               <p>{points}</p>
               <img src={firstPilotImage} className="bestTeamPilots"></img>
               <img src={secondPilotImage} className="bestTeamPilots"></img>
            </div>
         ) : (
            <div className="pilot">
               <p>{position}</p>
               <p>{firstPilot}</p>
               <img src={firstPilotImage} alt="image"></img>
               <p>{team}</p>
               <p>{number}</p>
               {/* <p>{country}</p> */}
               <ReactCountryFlag countryCode={country} svg />
               <p>{points}</p>
               <Button
                  onClick={increaseFunc}
                  variant="contained"
                  href="#contained-buttons"
               >
                  <AddIcon />
               </Button>
               <Button
                  onClick={decreaseFunc}
                  variant="contained"
                  href="#contained-buttons"
               >
                  <RemoveIcon />
               </Button>
            </div>
         )}
      </>
   );
}

export default Pilot;
