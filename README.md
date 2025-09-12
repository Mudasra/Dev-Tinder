# DevTinder

- create vite + react application
- remove unnecessary code 
- install tailwid css
- install daisyUI
- install react router dom
- create browser router > Routes="/" > RouteChildren 
- create outlet in body component
- create footer
- create login page
- install react-redux and @reduxjs/toolkit
- configure store 
- create store
- add provider to app.js or main.js
- add reducer to store
- shows a login form with email and password
- input validation
- protected routes > If user isn’t logged in, trying to visit /feed, /profile, or /contact → redirects back to /login
- presisted login state > user info saved in local storage
- dynamic navbar - login / logout functionality depending on whether the user is logged in or logged out.
- redux integration > global login/ logout state management
- swipe-like profile browsing
- loop profiles in cicular fashion
- match popup
- like / pass action

# Matches Page 
→ displays all liked profiles.
- clears the whole match page in one go 
- remove matches individually

# contact page 
- split into two sections - contact info & contact form
- Form feedback: After submission, a success alert is shown.

# Profile page 
 Allows the logged-in user to view and edit their profile.
- Left panel: Editable fields for the logged-in user.
- Right panel: Live preview of the profile that updates dynamically as the user types.

# Chat Page
- Clicking a match opens the Chat Page for that profile
- real-time chat (frontend-only)
- Chat history is persisted in localStorage
- Messages are styled as chat bubbles
- Messages are stored in Redux and synced with localStorage
- Navigation is handled with React Router → /chat/:id
- Limitations: 
- No backend or WebSocket support (currently frontend-only simulation)











# Tech Stack

- React + React Router
- Redux Toolkit
- DaisyUI + TailwindCSS
- LocalStorage for persistence



# Setup Instructions

- Clone repo
- Install dependencies → npm install
- Run → npm run dev