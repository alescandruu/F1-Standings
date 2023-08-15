import CountryIcon from "./CountryIcon"
interface PilotProps {
   firstName: string,
   lastname: string, 
   number: number,
   team: string,
   points: number,
   country: string,
   image: string
}

function Pilot({firstName, lastname, number, team, points, country, image}: PilotProps) {
   return (
      <div className="bg-white w-[60%] flex flex-row justify-between items-center mx-auto mt-[3%] rounded-[12px]">
         <img
            className="w-[25%]"
            src="https://raw.githubusercontent.com/alescandruu/Formula1Standing/master/src/images/mercedesLogo.png"
         ></img>
         <img
            className="w-[35.4%]"
            src={image}
         ></img>
         <div className="flex flex-col justify-center items-center gap-5 mr-5 w-[27%]">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-black">
               <p className="text-xl font-bold">1</p>
            </div>
            <p className="text-2xl font-bold">{`${firstName} ${lastname}`}</p>
            <span className="flex justify-center items-center gap-3">
               <span className="text-2xl">
                  <CountryIcon country={country}/>
               </span>
               <p className="text-lg font-bold">{number}</p>
            </span>
            <div>
               <p className="text-lg font-bold">{`Points: ${points}`}</p>
               <div className="flex justify-center items-center gap-2 mt-1">
                  <button className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-black">
                     <span className="font-bold mb-[10%]">+</span>
                  </button>
                  <button className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-black">
                     <span className="font-bold mb-[10%]">-</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Pilot;
