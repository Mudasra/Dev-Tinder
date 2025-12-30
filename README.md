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

## Development
```bash
npm install
npm run dev
