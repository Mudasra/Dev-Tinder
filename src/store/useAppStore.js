import { create } from 'zustand';
import { createProjectSlice } from './slices/projectSlice';
import { createUISlice } from './slices/uiSlice';

const useAppStore = create((set, get) => ({
  ...createProjectSlice(set, get),
  ...createUISlice(set, get)
}));

export default useAppStore;
