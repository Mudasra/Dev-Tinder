import { useState, useEffect } from 'react';

function TaskModal({ isOpen, onClose, onSubmit, task, columns, assignees }) {
  const [title, setTitle] = useState(task?.title || '');
  const [priority, setPriority] = useState(task?.priority || 'Medium');
  const [type, setType] = useState(task?.type || 'Task');
  const [assignee, setAssignee] = useState(task?.assignee || '');
  const [column, setColumn] = useState(task?.column || columns[0]);

  useEffect(() => {
    setTitle(task?.title || '');
    setPriority(task?.priority || 'Medium');
    setType(task?.type || 'Task');
    setAssignee(task?.assignee || '');
    setColumn(task?.column || columns[0]);
  }, [task, columns]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">
          {task ? 'Edit Task' : 'New Task'}
        </h2>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full mb-2"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="select select-bordered w-full mb-2"
        >
          {['Low', 'Medium', 'High'].map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="select select-bordered w-full mb-2"
        >
          {['Task', 'Bug', 'Feature'].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="select select-bordered w-full mb-2"
        >
          <option value="">Unassigned</option>
          {assignees.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <select
          value={column}
          onChange={(e) => setColumn(e.target.value)}
          className="select select-bordered w-full mb-4"
        >
          {columns.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div className="flex justify-end gap-2">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button
            className="btn btn-primary"
            onClick={() => {
              if (!title.trim()) return;
              onSubmit({ title: title.trim(), priority, type, assignee, column });
              onClose();
            }}
          >
            {task ? 'Save' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
