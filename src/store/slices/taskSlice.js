import { loadState, persistState } from '../persist';

const STORAGE_KEY = 'jira-tasks';

const initialTasks = loadState(STORAGE_KEY, []);

export const createTaskSlice = (set, get) => ({
  tasks: initialTasks, // normalized array of tasks

  addTask: (task) => {
    const newTask = {
      id: crypto.randomUUID(),
      ...task
    };
    const updated = [...get().tasks, newTask];
    set({ tasks: updated });
    persistState(STORAGE_KEY, updated);
  },

  updateTask: (taskId, updatedFields) => {
    const updated = get().tasks.map((t) =>
      t.id === taskId ? { ...t, ...updatedFields } : t
    );
    set({ tasks: updated });
    persistState(STORAGE_KEY, updated);
  },

  deleteTask: (taskId) => {
    const updated = get().tasks.filter((t) => t.id !== taskId);
    set({ tasks: updated });
    persistState(STORAGE_KEY, updated);
  },

  reorderTasks: ({ taskId, toColumn, toIndex }) => {
  const tasks = get().tasks.slice(); // shallow copy
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  // Remove task from old position
  const oldIndex = tasks.findIndex(t => t.id === taskId);
  tasks.splice(oldIndex, 1);

  // Change column if needed
  task.column = toColumn;

  // Insert at new index (only among tasks of the same column)
  let columnTasks = tasks.filter(t => t.column === toColumn);
  const beforeTask = columnTasks[toIndex];
  const insertIndex = beforeTask ? tasks.indexOf(beforeTask) : tasks.length;
  tasks.splice(insertIndex, 0, task);

  set({ tasks });
  persistState('jira-tasks', tasks);
},

  getTasksByProjectAndColumn: (projectId, column) => 
  get().tasks.filter(t => t.projectId === projectId && t.column === column)
});
