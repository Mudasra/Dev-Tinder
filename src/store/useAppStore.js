import { create } from 'zustand';
import { createProjectSlice } from './slices/projectSlice';
import { createTaskSlice } from './slices/taskSlice';

import { createUISlice } from './slices/uiSlice';

const useAppStore = create((set, get) => ({
  ...createProjectSlice(set, get),
  ...createUISlice(set, get),
    ...createTaskSlice(set, get)

}));

export default useAppStore;
