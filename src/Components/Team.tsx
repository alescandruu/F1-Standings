function Team() {
   return (
      <div className="bg-white w-[120%] flex flex-row justify-between mx-auto mt-[50%] rounded-[12px]">
         <img
            className="w-[27%]"
            src="https://raw.githubusercontent.com/alescandruu/Formula1Standing/master/src/images/mercedesLogo.png"
         ></img>
         <div className="flex flex-col justify-between">
            <p className="text-base font-bold">Total points: 122</p>
            <div className="flex justify-around">
               <div className="flex flex-col justify-center items-center">
                  <p className="text-base font-bold">George Russel</p>
                  <img
                     className="w-[75%]"
                     src="https://i.ibb.co/f4zt6Jq/russel.png"
                  ></img>
               </div>
               <div className="flex flex-col justify-between items-center">
                  <p className="text-base font-bold">George Russel</p>
                  <img
                     className="w-[75%]"
                     src="https://i.ibb.co/f4zt6Jq/russel.png"
                  ></img>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Team;
