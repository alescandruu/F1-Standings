import React from "react";
import "./Racer.css";

function Pilot(props) {
   const { position, name, team, number, country, points } = props;

   return (
      <div className="racer">
         <p>{position}</p>
         <p>{name}</p>
         <p>{team}</p>
         <p>{number}</p>
         <p>{country}</p>
         <p>{points}</p>
         <button>+</button>
         <button>-</button>
      </div>
   );
}

export default Pilot;
