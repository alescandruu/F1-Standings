import React from "react";

function Pilot() {
   return (
      <div className="bg-stone-500 text-white w-[40%] h-auto flex flex-row justify-between items-end">
         <img className="w-[20%]" src="https://raw.githubusercontent.com/alescandruu/Formula1Standing/master/src/images/mercedesLogo.png"></img>
         <img className="w-[30%]" src="https://i.ibb.co/f4zt6Jq/russel.png"></img>
         <div>
            <h4>Pilot Name</h4>
            <p>Points: 10</p>
            <div>
               <button>+</button>
               <button>-</button>
            </div>
         </div>
      </div>
   );
}

export default Pilot;
