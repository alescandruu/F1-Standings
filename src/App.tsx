import Pilot from "./Components/Pilot";
import Team from "./Components/Team";
import backgroundImage from "./track.jpg";

function App() {
   return (
      <div
         style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
         }}
         className="flex justify-around h-screen w-screen"
      >
         <div className="w-[40%] text-center mt-10">
            <h3 className="text-3xl text-white font-bold mb-5">BEST TEAM</h3>
            <Team />
         </div>
         <div className="w-[35%] text-center mt-10">
            <h3 className="text-3xl text-white font-bold mb-5">STANDINGS</h3>
            <div className="flex flex-col">
               <Pilot />
               <Pilot />
               <Pilot />
            </div>
         </div>
      </div>
   );
}

export default App;
