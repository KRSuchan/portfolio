# Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS that showcases professional experience with seamless dark mode integration. The website features a clean, accessible design with smooth transitions and dynamic content loading.

This portfolio website provides a professional platform for developers to showcase their work with features like theme switching, responsive design, and project showcasing. It leverages modern web technologies to create a fast, SEO-friendly, and accessible user experience with server-side rendering capabilities.

## Repository Structure

```
.
├── app/                      # Next.js 13+ app directory containing page components and routing
│   ├── components/          # App-specific components (navbar, mode-toggle)
│   ├── projects/           # Project-related pages and components
│   └── layout.tsx          # Root layout component with theme provider
├── components/              # Reusable UI components
│   ├── ui/                 # Core UI components (button, card, badge)
│   └── theme-provider.tsx  # Theme context provider
├── data/                    # Static data files (projects information)
├── lib/                     # Utility functions and shared code
└── public/                  # Static assets and images
```

## Usage Instructions

### Prerequisites

-   Node.js 20.x or later
-   npm 8.x or later
-   Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm start
```

### Quick Start

1. Configure your personal information:

```typescript
// data/projects.tsx
export const projects = {
    // Add your projects here
    project1: {
        title: "Project Name",
        description: "Project Description",
        // ...other project details
    },
};
```

2. Add your profile image:

```bash
# Add your profile image to public directory
cp your-profile-image.jpg public/
```

3. Update the layout configuration:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
    title: "Your Name - Portfolio",
    description: "Your Role Description",
};
```

### More Detailed Examples

Custom Theme Implementation:

```typescript
// components/theme-provider.tsx
import { ThemeProvider } from "next-themes";

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
```

### Troubleshooting

Common Issues:

1. Build Errors

    - Error: `Module not found`
    - Solution: Ensure all dependencies are installed with `npm install`

2. Theme Toggle Not Working

    - Issue: Theme doesn't persist after refresh
    - Solution: Check localStorage permissions and theme provider setup

3. Image Loading Issues
    - Problem: Images not displaying
    - Solution: Verify image paths and Next.js image optimization settings

## Data Flow

The portfolio website follows a simple data flow pattern for managing content and theme state.

```ascii
[Theme Provider] --> [Layout Component] --> [Page Components]
       ↓                     ↓                     ↓
[Theme State] -----> [Global Styles] -----> [UI Components]
```

Component Interactions:

-   Theme Provider manages application-wide theme state
-   Layout component provides consistent structure across pages
-   Page components render dynamic content from data files
-   UI components adapt to current theme settings
-   Project data flows from static files to dynamic page renders

## Infrastructure

The application uses GitHub Actions for continuous deployment:

GitHub Actions Resources:

-   Workflow: `nextjs.yml`
    -   Builds and deploys to GitHub Pages
    -   Uses Node.js 20.x environment
    -   Caches dependencies and build artifacts
    -   Configures static site generation
    -   Sets up GitHub Pages deployment
