# Jira Clone (Frontend Only)

## Tech Stack
- React 18
- Vite
- JavaScript
- Tailwind CSS + DaisyUI
- Zustand (state management)
- React Router

## Architecture Overview

### State Management
- Zustand slices:
  - projectSlice: manages projects CRUD
  - uiSlice: manages theme
- State persisted manually via localStorage

### Routing
- `/` → Project List
- `/projects/:id/board` → Kanban Board
- `/projects/:id/backlog` → Backlog
- `/projects/:id/settings` → Project Settings

### Components
- `ProjectCard` → displays project info with edit/delete actions
- `ProjectModal` → reusable modal for creating or editing projects

### Styling
- Tailwind CSS for utilities and layout
- DaisyUI for components and themes
- Responsive grid for project list

## Kanban Board

- Columns dynamically loaded from project state  
- Tasks normalized in Zustand store:
  - id, title, priority, type, assignee, column, projectId
- TaskModal handles creation and editing:
  - title, priority, type, assignee, column assignment
- Tasks persist to localStorage
- BoardColumn renders tasks per column
- Responsive and themeable via Tailwind + DaisyUI

- Implemented sortable TaskCards with useSortable

- Added reorderTasks to Zustand task slice for state updates

- BoardPage handles onDragEnd to reorder tasks

- Tasks persist to localStorage

- Handles cross-column moves and vertical reordering

## Development
```bash
npm install
npm run dev
