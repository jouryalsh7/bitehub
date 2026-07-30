# BiteHub

A modern, full-featured food delivery platform UI built as a professional
portfolio project. BiteHub lets users browse restaurants, filter by
category, manage a cart, check out, and track orders — with an admin
dashboard for restaurant/order management.

> **Status:**  In active development. This README is updated at the end
> of every milestone. See [Roadmap](#roadmap) for progress.

## Deployment in progress

_Coming soon — will be deployed via Vercel/Netlify._

## Tech Stack

| Layer            | Technology                          |
| ----------------- | ------------------------------------ |
| Framework         | React 19 (Vite)                     |
| Styling           | Tailwind CSS v4                     |
| Routing           | React Router DOM v7                 |
| HTTP Client       | Axios                                |
| State Management  | React Context API + Hooks           |
| Icons             | lucide-react                        |
| Backend (planned) | Spring Boot REST API (Java)         |

This project intentionally avoids Next.js, TypeScript, and component
libraries (MUI, Chakra, Ant Design, Bootstrap) — every UI element is
hand-built with Tailwind to demonstrate core React + CSS fundamentals.

## Project Structure

```
src/
├── assets/          # Images, icons, static files
├── components/
│   ├── common/      # Generic, reusable UI (Button, Container, PlaceholderPage)
│   ├── layout/       # Navbar, Footer
│   └── home/         # Components specific to the landing/home experience
├── constants/       # Route paths, mock data, fixed lookup values
├── context/         # React Context providers (Auth, Cart — added in later milestones)
├── hooks/           # Custom hooks (added in later milestones)
├── layouts/         # Page-chrome wrappers (MainLayout: Navbar + Outlet + Footer)
├── pages/           # One component per route
├── services/        # Axios instance + future API call functions
├── utils/           # Pure helper functions (added as needed)
├── App.jsx          # Route definitions
├── main.jsx         # App entry point
└── index.css        # Tailwind import + design tokens
```

This structure is designed to scale cleanly as features are added, and to
map directly onto a real Spring Boot backend: `services/` is the only
layer that will need to change when mock data is replaced with live API
calls.

## Design System

| Token       | Value     | Usage                        |
| ----------- | --------- | ----------------------------- |
| Primary     | `#6C63FF` | Buttons, links, accents       |
| Background  | `#F9FAFB` | Page background                |
| Ink (text)  | `#111827` | Headings, body text            |

Defined once in `src/index.css` via Tailwind's `@theme` directive, and
consumed everywhere as standard utility classes (`bg-primary`,
`text-ink`, etc.) rather than hardcoded hex values.

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/bitehub.git
cd bitehub

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------- |
| `npm run dev`       | Start the local development server    |
| `npm run build`     | Create a production build in `dist/`  |
| `npm run preview`   | Preview the production build locally  |
| `npm run lint`      | Run the linter                        |

## Roadmap

- [x] **Phase 1** — Project setup, routing, layout shell, landing page
- [ ] **Phase 2** — Authentication (Login/Register) with Context API
- [ ] **Phase 3** — Restaurant listing, details, and home feed
- [ ] **Phase 4** — Search, category filters, shopping cart
- [ ] **Phase 5** — Checkout flow and order history
- [ ] **Phase 6** — User profile management
- [ ] **Phase 7** — Admin dashboard
- [ ] **Phase 8** — Spring Boot API integration
- [ ] **Milestone 9** — Testing, accessibility pass, deployment

## 📄 License

This project is built for educational and portfolio purposes.
