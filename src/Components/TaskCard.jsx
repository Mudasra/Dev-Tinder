import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}
      className="bg-base-100 p-2 rounded shadow hover:shadow-md cursor-grab">
      <p className="font-medium">{task.title}</p>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{task.type}</span>
        <span>{task.priority}</span>
      </div>
      {task.assignee && <div className="text-xs mt-1">Assigned: {task.assignee}</div>}
    </div>
  );
}

export default TaskCard;
