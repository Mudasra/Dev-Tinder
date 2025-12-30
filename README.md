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
Global state is handled using Zustand with slice-based architecture.

Slices:
- projectSlice: manages project CRUD and persistence
- uiSlice: manages UI state such as theme

State is persisted to localStorage manually to keep control explicit and debuggable.

### Routing
React Router with nested layouts:
- `/` Project list
- `/projects/:id/board`
- `/projects/:id/backlog`
- `/projects/:id/settings`

### Styling
- Tailwind CSS for layout and utilities
- DaisyUI for accessible components and theming
- Light and dark themes supported

## Development
```bash
npm install
npm run dev
