import { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
   arrayMove,
   SortableContext,
   verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import PilotSortableItem from "./PilotSortableItem";
import { mockData } from "../MockData";
import { getMockDataIdentifiers } from "../Utils/UtilityFunctions";

const onDragEndEvent = (event: DragEndEvent) => {
   console.log(event);
}

const SortableStandings = () => {
   const [pilots, setPilots] = useState(mockData);
   const [identifiers, setIdentifiers] = useState(getMockDataIdentifiers(mockData))

   return (
      <div className="bg-white">
         <DndContext collisionDetection={closestCenter} onDragEnd={onDragEndEvent}>
            <SortableContext
               items={identifiers}
               strategy={verticalListSortingStrategy}
            >
               {pilots.map((pilot) => (
                  <PilotSortableItem name={`${pilot.firstName} ${pilot.lastName}`} key={pilot.number} id={pilot.number}/>
               ))}
            </SortableContext>
         </DndContext>
      </div>
   );
};

export default SortableStandings;
