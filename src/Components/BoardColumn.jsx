import TaskCard from './TaskCard';
import useAppStore from '../store/useAppStore';

function BoardColumn({ column }) {
  const tasks = useAppStore((s) =>
    s.tasks.filter((t) => t.column === column)
  );

  return (
    <div className="bg-base-200 rounded p-2 flex flex-col min-w-[250px]">
      <h3 className="font-semibold mb-2">{column}</h3>
      <div className="flex flex-col gap-2">
        {tasks.length
          ? tasks.map((task) => <TaskCard key={task.id} task={task} />)
          : <p className="text-sm text-gray-500">No tasks</p>}
      </div>
    </div>
  );
}

export default BoardColumn;
