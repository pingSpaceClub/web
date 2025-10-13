# App Support Website - React + Vite

A modern, fast support website for the mobile app, built with React and Vite.

## 🚀 Features

- **React 19** with modern hooks and functional components
- **Vite** for lightning-fast development and optimized builds
- **React Router** for client-side routing with clean URLs
- **SCSS** with organized variables and mixins
- **Responsive Design** - mobile-first approach
- **GitHub Pages** deployment with automatic builds
- **Hot Module Replacement** for instant development updates

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Footer.jsx       # Site footer with links
│   └── Layout.jsx       # Main layout wrapper
├── pages/
│   ├── Home.jsx         # Homepage with hero and features
│   ├── Privacy.jsx      # Privacy policy page
│   └── Terms.jsx        # Terms of service page
├── styles/
│   ├── variables.scss   # SCSS variables and configuration
│   └── main.scss        # Main stylesheet with all components
├── App.jsx              # Main app component with routing
└── main.jsx             # Application entry point
```

## 🛠 Development

### Prerequisites

- Node.js
- npm

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm run deploy   # Build and deploy to GitHub Pages
```

## 🔗 Routing

React Router provides clean URL routing:

- `/` - Home page
- `/privacy` - Privacy Policy  
- `/terms` - Terms of Service

All routes work with:
- Direct URL access
- Page refreshes
- Back/forward navigation
- GitHub Pages deployment

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project includes GitHub Actions for automatic deployment:

1. Push code to your GitHub repository
2. GitHub Actions automatically builds and deploys
3. Your site is available at `https://pingspaceclub.github.io/web/`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```