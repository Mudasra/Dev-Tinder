function TaskCard({ task }) {
  return (
    <div className="bg-base-100 p-2 rounded shadow hover:shadow-md cursor-grab">
      <p>{task?.title || 'Placeholder Task'}</p>
    </div>
  );
}

export default TaskCard;
