# MedDash - Bahmni-Style Hospital Management Platform

A modern, production-ready hospital management platform inspired by Bahmni, featuring a card-based module system that integrates multiple existing applications through a unified interface.

## Features

### 🏥 Core Functionality
- **Card-Based Modules**: Bahmni-style dashboard with intuitive module cards
- **Unified Interface**: Single entry point for multiple hospital applications  
- **Iframe Integration**: Seamless integration with existing apps running on different subpaths
- **Smooth Transitions**: Fade animations when switching between applications
- **Dashboard Overview**: Statistics and quick actions on the home screen
- **Responsive Design**: Optimized for desktop and tablet use

### 🔐 Authentication & Security
- **Single Sign-On**: Login once to access all applications
- **Token Passing**: Secure authentication token sharing with iframe applications
- **Session Management**: Persistent login state with automatic session restoration

### 🎨 User Experience
- **Bahmni-Inspired Design**: Card-based module layout with healthcare-focused aesthetics
- **Interactive Cards**: Hover effects and visual feedback for better engagement
- **Dark Mode**: Toggle between light and dark themes
- **Statistics Dashboard**: Real-time hospital metrics and quick actions
- **Loading States**: Smooth loading indicators for better user experience
- **Error Boundaries**: Graceful error handling with retry functionality

### 📱 Responsive Features
- **Card Grid Layout**: Responsive module cards that adapt to screen size
- **Mobile-First**: Responsive design principles throughout
- **Touch-Friendly**: Optimized for tablet interaction

## Quick Start

### Demo Credentials
```
Email: demo@hospital.com
Password: demo
```

### Installation
```bash
npm install
npm run dev
```

## Configuration

### Adding New Applications

To add a new hospital application, update the `src/config/apps.ts` file:

```typescript
export const hospitalApps: AppConfig = {
  // Existing apps...
  newApp: {
    id: 'newApp',
    name: 'New Application',
    url: '/new-app',
    icon: '🏥',
    description: 'Description of the new application',
    category: 'admin'
  }
};
```

### Authentication Token Passing

The dashboard automatically generates and passes authentication tokens to iframe applications via query parameters:

```
/app1?token=base64EncodedToken
```

Applications can decode this token to authenticate users automatically.

## Architecture

### Project Structure
```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard container
│   ├── DashboardHome.tsx # Home screen with module cards
│   ├── ModuleCard.tsx   # Individual module card component
│   ├── TopBar.tsx       # Top navigation bar
│   ├── AppFrame.tsx     # Iframe wrapper with error handling
│   ├── LoginForm.tsx    # Authentication form
│   └── ...
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication state management
│   └── ThemeContext.tsx # Theme management
├── config/             # Configuration files
│   └── apps.ts         # Application registry
├── types/              # TypeScript type definitions
└── ...
```

### Key Components

- **Dashboard**: Main container coordinating top bar and app content
- **DashboardHome**: Home screen with statistics and module cards
- **ModuleCard**: Individual application cards with hover effects and category styling
- **TopBar**: Navigation with breadcrumbs, notifications, and user profile
- **AppFrame**: Iframe wrapper with loading states, error boundaries, and token passing
- **ErrorBoundary**: Graceful error handling with retry functionality

## Security Considerations

- **Iframe Sandboxing**: Controlled permissions for embedded applications
- **Token-Based Auth**: Secure token generation and passing
- **HTTPS Ready**: Production-ready security configurations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Configure your web server to serve the built files
3. Ensure your existing hospital applications are accessible at the configured subpaths
4. Update authentication configuration for your production environment

## Customization

### Theming
The dashboard uses Tailwind CSS with custom color schemes defined in `tailwind.config.js`. Modify the color palette to match your hospital's branding.

### Adding Features
- **New Module Categories**: Extend the `category` type in `src/types/index.ts`
- **Custom Module Icons**: Replace emoji icons with custom SVGs or icon libraries
- **Dashboard Widgets**: Add new statistics or quick action cards
- **Additional Auth Methods**: Extend the AuthContext for SSO integration

## Support

For questions or support, please refer to the documentation or contact the development team.