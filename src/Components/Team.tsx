import { Gb } from "react-flags-select";

function Team() {
  return (
     <div className="bg-white w-[100%] flex flex-row justify-between items-center mx-auto mt-[3%] rounded-[12px]">
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
           <p className="text-2xl font-bold">122pct</p>
           <p className="text-2xl font-bold">George Russel</p>
        </div>
        <img
           className="w-[35.3%]"
           src="https://i.ibb.co/f4zt6Jq/russel.png"
        ></img>
     </div>
  );
}

export default Team