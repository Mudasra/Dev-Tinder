import { useState } from 'react';

function TaskFilter({ assignees = [], onFilterChange }) {
  const [keyword, setKeyword] = useState('');
  const [priority, setPriority] = useState('');
  const [type, setType] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleChange = () => {
    onFilterChange({ keyword, priority, type, assignee });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered"
        value={keyword}
        onChange={e => { setKeyword(e.target.value); handleChange(); }}
      />

      <select className="select select-bordered" value={priority} onChange={e => { setPriority(e.target.value); handleChange(); }}>
        <option value="">All Priorities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select className="select select-bordered" value={type} onChange={e => { setType(e.target.value); handleChange(); }}>
        <option value="">All Types</option>
        <option>Bug</option>
        <option>Feature</option>
        <option>Task</option>
      </select>

      <select className="select select-bordered" value={assignee} onChange={e => { setAssignee(e.target.value); handleChange(); }}>
        <option value="">All Assignees</option>
        {assignees.map(a => <option key={a}>{a}</option>)}
      </select>
    </div>
  );
}

export default TaskFilter;
