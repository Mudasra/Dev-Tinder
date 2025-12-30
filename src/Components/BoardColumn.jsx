import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';

function BoardColumn({ column, tasks = [] }) {
  return (
    <div className="bg-base-200 rounded p-2 flex flex-col min-w-[250px]">
      <h3 className="font-semibold mb-2">{column}</h3>

      <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-2">
          {tasks.length
            ? tasks.map(task => <TaskCard key={task.id} task={task} />)
            : <p className="text-sm text-gray-500">No tasks</p>}
        </div>
      </SortableContext>
    </div>
  );
}

export default BoardColumn;
