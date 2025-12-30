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
  }
});
