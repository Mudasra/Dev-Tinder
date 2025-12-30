import { loadState, persistState } from '../persist';

const STORAGE_KEY = 'jira-ui';

const initialUI = loadState(STORAGE_KEY, {
  theme: 'light'
});

export const createUISlice = (set) => ({
  theme: initialUI.theme,

  setTheme: (theme) => {
    set({ theme });
    persistState(STORAGE_KEY, { theme });
    document.documentElement.setAttribute('data-theme', theme);
  }
});
