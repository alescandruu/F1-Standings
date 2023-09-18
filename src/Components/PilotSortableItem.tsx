import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities'

const PilotSortableItem = ({ name, id }: { name: string, id: number }) => {
   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

   return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
         <p>{name}</p>
      </div>
   );
};

export default PilotSortableItem;
