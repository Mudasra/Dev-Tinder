import { useState, useEffect } from 'react';
import useAppStore from '../store/useAppStore';

function TaskDetailsPanel({ taskId, onClose }) {
  const task = useAppStore(s => s.tasks.find(t => t.id === taskId));
  const updateTask = useAppStore(s => s.updateTask);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [assignee, setAssignee] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!task) return;
    setTitle(task.title);
    setDescription(task.description || '');
    setPriority(task.priority || 'Medium');
    setAssignee(task.assignee || '');
    setSubtasks(task.subtasks || []);
    setComments(task.comments || []);
  }, [task]);

  if (!task) return null;

  const handleSave = () => {
    updateTask({
      ...task,
      title,
      description,
      priority,
      assignee,
      subtasks,
      comments
    });
    onClose();
  };

  const toggleSubtask = id => {
    const updated = subtasks.map(st => st.id === id ? { ...st, completed: !st.completed } : st);
    setSubtasks(updated);
  };

  const addComment = text => {
    const newComment = { id: `c-${Date.now()}`, author: 'You', text, createdAt: new Date().toISOString() };
    setComments([...comments, newComment]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        <textarea
          className="textarea textarea-bordered w-full mb-2"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <select className="select select-bordered w-full mb-2" value={priority} onChange={e => setPriority(e.target.value)}>
          {['Low', 'Medium', 'High'].map(p => <option key={p}>{p}</option>)}
        </select>

        <input
          type="text"
          className="input input-bordered w-full mb-2"
          placeholder="Assignee"
          value={assignee}
          onChange={e => setAssignee(e.target.value)}
        />

        <h3 className="font-semibold mt-4 mb-2">Subtasks</h3>
        {subtasks.map(st => (
          <label key={st.id} className="flex items-center gap-2 mb-1">
            <input type="checkbox" checked={st.completed} onChange={() => toggleSubtask(st.id)} className="checkbox" />
            <span className={st.completed ? 'line-through text-gray-400' : ''}>{st.title}</span>
          </label>
        ))}
        <button
          className="btn btn-sm btn-outline mb-2"
          onClick={() => setSubtasks([...subtasks, { id: `sub-${Date.now()}`, title: 'New Subtask', completed: false }])}
        >
          + Add Subtask
        </button>

        <h3 className="font-semibold mt-4 mb-2">Comments</h3>
        {comments.map(c => (
          <div key={c.id} className="mb-1 border-b border-gray-200 pb-1">
            <span className="text-xs text-gray-500">{c.author}</span>
            <p>{c.text}</p>
          </div>
        ))}
        <input
          type="text"
          placeholder="Add comment"
          className="input input-bordered w-full mb-2"
          onKeyDown={e => { if (e.key === 'Enter') { addComment(e.target.value); e.target.value = ''; } }}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPanel;
