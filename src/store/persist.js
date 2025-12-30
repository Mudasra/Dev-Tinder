export const persistState = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const loadState = (key, fallback) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
};
