# Modern React Website

A modern, responsive website built with React, featuring a beautifully designed Contact page with interactive elements and smooth animations.

## Features

### Contact Page
- Modern hero section with gradient background and animated accents
- Interactive contact information cards with hover effects
- Responsive contact form with validation
- Google Maps integration
- FAQ section with hover animations
- Dark accents with light mode interface
- Mobile-responsive design

## Tech Stack

- React
- TypeScript
- CSS3 with modern features:
  - CSS Grid
  - Flexbox
  - CSS Variables
  - CSS Transitions & Animations
  - Gradient effects
- Google Maps API

## Project Structure

```
src/
├── components/
│   ├── Contact/
│   │   ├── Contact.tsx      # Contact page component
│   │   └── Contact.css      # Contact styles
│   ├── Header/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Header.css      # Header styles
│   ├── Projects/
│   │   └── Projects.tsx    # Projects section
│   └── Services/
│       └── Services.tsx    # Services section
├── layouts/
│   └── MainLayout.tsx      # Main layout wrapper
└── utils/
    └── scrollAnimation.ts  # Scroll animation utilities
```

## Styling Guide

The project uses a consistent color scheme:

```css
/* Colors */
--primary: #0ea5e9;        /* Blue accent */
--dark: #18181b;          /* Dark gray */
--light: #fafafa;         /* Light background */
--border: #e2e8f0;        /* Border color */
--text: #18181b;          /* Main text */
--text-secondary: #52525b; /* Secondary text */
```

## Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Development Guidelines

### CSS Conventions
- Use semantic class names
- Follow BEM naming convention where applicable
- Keep styles modular and component-specific
- Use CSS variables for consistent theming
- Implement mobile-first responsive design

### Component Structure
- Keep components focused and single-responsibility
- Implement proper TypeScript types
- Use proper React hooks for state management
- Follow accessibility best practices

## Browser Support

The website is optimized for modern browsers and includes:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
