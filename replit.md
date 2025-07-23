# Portfolio Website for April Shyne Palacios

## Overview

This is a professional portfolio website built for April Shyne Palacios, an IT Specialist with 5+ years of experience. The application is a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing her professional experience, skills, and qualifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation with smooth scrolling between sections
2. **Hero Section**: Introduction and contact call-to-action
3. **Experience Section**: Professional work history with achievements
4. **Skills Section**: Categorized technical and soft skills
5. **Education Section**: Certifications and training background
6. **Contact Section**: Multiple contact methods with interactive buttons

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory implementation
2. **User Management**: Basic user schema and CRUD operations
3. **Route Registration**: Centralized API route management
4. **Development Tools**: Vite integration for hot module replacement

### UI Component Library
- Complete shadcn/ui component library integration
- Radix UI primitives for accessibility
- Consistent design system with CSS custom properties
- Dark mode support built-in

## Data Flow

### Current Implementation
1. **Static Content**: Portfolio content is hardcoded in React components
2. **Contact Interactions**: Direct browser APIs (mailto, tel, window.open)
3. **Navigation**: Client-side smooth scrolling with active section tracking

### Planned Data Flow
1. **Database**: User authentication and content management
2. **API Layer**: RESTful endpoints under `/api` prefix
3. **Client State**: TanStack Query for caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Client-side data fetching and caching
- **wouter**: Lightweight React routing
- **@radix-ui/***: Accessible UI primitives

### Development Dependencies
- **Vite**: Development server and build tool
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Development**: `tsx` for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with Node.js
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server execution
- `db:push`: Database schema synchronization

### File Structure
- `client/`: React frontend application
- `server/`: Express.js backend application  
- `shared/`: Common TypeScript types and schemas
- `migrations/`: Database migration files
- `attached_assets/`: Static assets and requirements

The application follows a monorepo structure with clear separation between client and server code, enabling efficient development and deployment workflows.