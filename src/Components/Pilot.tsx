import { Gb } from "react-flags-select";

function Pilot() {
   return (
      <div className="bg-white w-[90%] flex flex-row justify-between items-center mx-auto mt-[3%] rounded-[12px]">
         <img
            className="w-[25%]"
            src="https://raw.githubusercontent.com/alescandruu/Formula1Standing/master/src/images/mercedesLogo.png"
         ></img>
         <img
            className="w-[35.3%]"
            src="https://i.ibb.co/f4zt6Jq/russel.png"
         ></img>
         <div className="flex flex-col justify-center items-center gap-5 mr-5">
            <p className="text-2xl font-bold">George Russel</p>
            <span className="flex justify-center items-center gap-3">
               <span className="text-3xl">
                  <Gb />
               </span>
               <p className="text-lg font-bold">63</p>
            </span>
            <p className="text-lg font-bold">Points: 10</p>
         </div>
      </div>
   );
}

export default Pilot;
