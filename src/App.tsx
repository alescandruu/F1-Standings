import Pilot from "./Components/Pilot";

function App() {
   return (
      <div className="flex justify-around">
         <div className="bg-slate-500 w-[30%]">
            <h3>Here is going to be the best team card.</h3>
         </div>
         <div className="bg-slate-500 w-[40%] text-center">
            <h3>Standings</h3>
            <div className="flex flex-col justify-center align-middle">
               <Pilot />
               <Pilot />
            </div>
         </div>
      </div>
   );
}

export default App;
