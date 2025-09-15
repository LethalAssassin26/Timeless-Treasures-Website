# Replit.md

## Overview

TechFlow Solutions is a modern full-stack web application built with React and Express that showcases technology products and services. The application serves as a business website featuring product catalogs, company information, and contact functionality. It implements a clean, professional design using shadcn/ui components and provides both desktop and mobile-responsive experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript running on Vite for fast development and building
- **Routing**: Wouter for client-side routing with page-based navigation (Home, Products, About, Contact)
- **UI Framework**: shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Tailwind CSS with custom CSS variables for theming and consistent design tokens

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Data Storage**: In-memory storage implementation with seeded product data (designed for easy database migration)
- **API Design**: RESTful endpoints for products and contact form submissions
- **Request Handling**: JSON middleware for parsing requests with comprehensive error handling
- **Development Tools**: Custom Vite integration for hot module replacement in development

### Database Schema
- **Products Table**: Stores product information including name, description, price, category, image, rating, and featured status
- **Contacts Table**: Captures contact form submissions with user details and timestamps
- **Schema Validation**: Drizzle-zod integration for runtime validation and type safety
- **Database Migration**: Drizzle ORM configured for PostgreSQL with migration support

### API Structure
- **GET /api/products**: Retrieve all products with optional category filtering
- **GET /api/products/category/:category**: Filter products by specific category
- **GET /api/products/:id**: Fetch individual product details
- **POST /api/contact**: Submit contact form with validation

### Development & Build System
- **Build Tool**: Vite for fast development server and optimized production builds
- **TypeScript**: Strict type checking across frontend, backend, and shared schemas
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)
- **Hot Reload**: Development server with automatic refresh for code changes

## External Dependencies

### UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for building the component library
- **Tailwind CSS**: Utility-first CSS framework for responsive design and consistent styling
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **React Icons**: Additional icon sets for social media and brand icons

### Data Management
- **TanStack React Query**: Powerful data fetching and caching library for managing server state
- **React Hook Form**: Performant form library with minimal re-renders and easy validation
- **Zod**: TypeScript-first schema validation for runtime type checking

### Database & ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support for database operations
- **Neon Database**: Serverless PostgreSQL database service for cloud hosting
- **Drizzle Kit**: Migration and introspection tools for database schema management

### Development Tools
- **Replit Plugins**: Integration with Replit development environment for enhanced debugging and development experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility