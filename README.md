# IEMRS

Integrated Electronic Medical Records System - Dashboard portal for Adare General Hospital (Fullanke).

## Tech Stack

- React 18 + TypeScript (client)
- Vite (build tool)
- Tailwind CSS
- Nginx (serves static files directly in production)

## Project Structure

```
IEMRS/
├── client/                 # Frontend (React + Vite)
│   ├── public/             # Static assets (logo, favicon, video bg)
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
├── server/                 # Backend (Express - optional, for dev/testing)
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

## Production Build

```bash
cd client
npm run build
```

The build outputs to `client/dist/`. Nginx serves these files directly.

## Nginx Config

Nginx serves the dashboard at `/iemrs/` directly from `client/dist/`:

```nginx
location /iemrs/ {
    alias "C:/App file/IEMRS/client/dist/";
    try_files $uri $uri/ /iemrs/index.html;
}
```

## Manual Troubleshooting

### 502 Bad Gateway (Nginx can't serve IEMRS)

This means Nginx lost its config or needs a restart.

**Run as Administrator PowerShell:**
```cmd
cd C:\nginx-1.28.0
.\nginx.exe -t
Restart-Service nginx
```

### After Computer Restart

- Nginx starts automatically as a Windows Service
- No Node.js server is needed for IEMRS (Nginx serves static files directly)
- If you get 502 after restart, run `Restart-Service nginx` as Administrator

### Rebuild After Code Changes

```bash
cd client
npm run build
```

No server restart needed -- Nginx picks up the new files automatically.

### Check Nginx Status

**Run as Administrator PowerShell:**
```cmd
sc query nginx
```

### Restart All Services

**Run as Administrator PowerShell:**
```cmd
Restart-Service nginx
```

### Check Nginx Error Logs

```cmd
Get-Content C:\nginx-1.28.0\logs\error.log -Tail 20
```

### Other Services (cpams, isbar, qippms)

These run separately via PM2/NSSM and are not affected by IEMRS changes:

```bash
pm2 status
pm2 restart cpams
pm2 restart isbar
pm2 restart qippms
```

## Adding a New Module

1. Add the module to `client/src/config/apps.tsx`
2. Add the URL to `.env` (e.g., `VITE_URL_NEWMODULE=http://...`)
3. Add a custom icon in `client/src/components/icons/Icons.tsx` and register it in `getIconByAppId` and `getIconColorByAppId`
4. Rebuild: `cd client && npm run build`
