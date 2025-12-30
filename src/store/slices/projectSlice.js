import { loadState, persistState } from '../persist';
import { seedProjects } from '../../data/seed';

const STORAGE_KEY = 'jira-projects';

const initialProjects = loadState(STORAGE_KEY, seedProjects);

export const createProjectSlice = (set, get) => ({
  projects: initialProjects,

  addProject: (name) => {
    const newProject = {
      id: crypto.randomUUID(),
      name,
      columns: ['Backlog', 'In Progress', 'Done']
    };

    const updated = [...get().projects, newProject];
    set({ projects: updated });
    persistState(STORAGE_KEY, updated);
  },

  deleteProject: (projectId) => {
    const updated = get().projects.filter((p) => p.id !== projectId);
    set({ projects: updated });
    persistState(STORAGE_KEY, updated);
  },

  updateProjectName: (projectId, name) => {
    const updated = get().projects.map((p) =>
      p.id === projectId ? { ...p, name } : p
    );
    set({ projects: updated });
    persistState(STORAGE_KEY, updated);
  }
});
