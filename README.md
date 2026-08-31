# IEMRS

Integrated Electronic Medical Records System - Dashboard portal for Adare General Hospital (Fullanke).

## Tech Stack

- React 18 + TypeScript (client)
- Vite (build tool)
- Tailwind CSS
- Express 5 (production server)
- PM2 (process manager)

## Project Structure

```
IEMRS/
├── client/                 # Frontend (React + Vite)
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/     # App shell (Dashboard, TopBar)
│   │   │   ├── dashboard/  # Module cards grid
│   │   │   ├── icons/      # Custom SVG icons
│   │   │   └── ui/         # Shared UI (ErrorBoundary)
│   │   ├── config/
│   │   │   └── apps.tsx    # Hospital module registry
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── server/                 # Backend (Express)
│   ├── server.js
│   ├── ecosystem.config.cjs
│   └── package.json
├── .env                    # Network URLs (git-ignored)
├── .gitignore
├── package.json            # Root scripts
└── README.md
```

## Development

```bash
npm run install:all
npm run dev
```

## Production

```bash
npm run build
npm start
```

## PM2

```bash
cd server
pm2 start ecosystem.config.cjs
pm2 restart iemrs
```

## Adding a New Module

1. Add the module to `client/src/config/apps.tsx`
2. Add a custom icon in `client/src/components/icons/Icons.tsx` and register it in `getIconByAppId` and `getIconColorByAppId`
