import React from "react";
import "./Pilot.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReactCountryFlag from "react-country-flag";
import ferrariLogo from "../images/ferrariLogo.png";
import mercedesLogo from "../images/mercedesLogo.png";
import redBullLogo from "../images/redBullLogo.png";
import mclarenLogo from "../images/mclarenLogo.png";
import aplineLogo from "../images/alpineLogo.png";
import astonMartinLogo from "../images/astonMartinLogo.png";
import alphaTauriLogo from "../images/alphaTauriLogo.png";
import alfaLogo from "../images/alfaLogo.png";
import haasLogo from "../images/haasLogo.png";
import williamsLogo from "../images/williamsLogo.png";

function Pilot(props) {
   const {
      bestTeam,
      position,
      teamName,
      firstPilot,
      secondPilot,
      team,
      country,
      points,
      increaseFunc,
      decreaseFunc,
      firstPilotImage,
      secondPilotImage,
   } = props;

   const teamLogo = (team) => {
      switch (team) {
         default:
         case "Mercedes AMG F1":
            return mercedesLogo;
         case "RED BULL RACING":
            return redBullLogo;
         case "MCLAREN RACING":
            return mclarenLogo;
         case "ALPINE F1":
            return aplineLogo;
         case "ASTON MARTIN F1 TEAM":
            return astonMartinLogo;
         case "SCUDERIA FERRARI":
            return ferrariLogo;
         case "SCUDERIA ALPHA TAURI":
            return alphaTauriLogo;
         case "ALFA ROMEO RACING":
            return alfaLogo;
         case "HAAS F1":
            return haasLogo;
         case "WILLIAMS RACING":
            return williamsLogo;
      }
   };

   return (
      <>
         {bestTeam ? (
            <div className="bestTeamCard">
               <img src={teamLogo(teamName)}></img>
               <div className="bestTeamInfos">
                  <div className="bestTeamPoints">
                     <p>Total points: {points}</p>
                  </div>
                  <div className="bestTeamPilots">
                     <div>
                        <p>{firstPilot.toUpperCase()}</p>
                        <img
                        className="pilotsimg"
                           src={firstPilotImage}
                           alt=""
                           id="bestTeamPilot1"
                        ></img>
                     </div>
                     <div>
                        <p>{secondPilot.toUpperCase()}</p>
                        <img
                           src={secondPilotImage}
                           alt=""
                           id="bestTeamPilot2"
                        ></img>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className="pilot">
               <img src={teamLogo(team)}></img>
               <img src={firstPilotImage} alt="" className="pilotImage"></img>
               <div className="pilotInfos">
                  <p className="position">{position}</p>
                  <p>{firstPilot.toUpperCase()}</p>
                  <ReactCountryFlag countryCode={country} svg />
                  <p>{points}</p>
                  <div className="buttons">
                     <IconButton
                        onClick={increaseFunc}
                        variant="contained"
                        href="#contained-buttons"
                        sx={{
                           color: "white",
                           backgroundColor: "#FF0000",
                           "&:hover": {
                              backgroundColor: "#A40000",
                           },
                        }}
                     >
                        <AddIcon />
                     </IconButton>
                     <IconButton
                        onClick={decreaseFunc}
                        variant="contained"
                        href="#contained-buttons"
                        sx={{
                           color: "white",
                           backgroundColor: "#FF0000",
                           "&:hover": {
                              backgroundColor: "#A40000",
                           },
                        }}
                     >
                        <RemoveIcon />
                     </IconButton>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default Pilot;
