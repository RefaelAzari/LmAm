# PayrollPro Landing Page

A modern, responsive landing page for a freelance payroll accountant built with **Nuxt 4** and **Tailwind CSS**.

## Features

- 🎨 **Modern Design**: Clean, professional design with Hebrew RTL support
- 📱 **Responsive**: Mobile-first responsive design
- ✨ **Animations**: Smooth scroll animations and hover effects
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🚀 **Performance**: Built with Nuxt 4 for optimal performance
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development

## Tech Stack

- **Nuxt 4** - Vue.js framework
- **Vue 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd payroll-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## Project Structure

```
payroll-landing-page/
├── pages/
│   └── index.vue          # Main landing page
├── assets/
│   └── css/
│       └── main.css       # Global styles and Tailwind imports
├── app.vue                # Root component
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Customization

### Colors
The project uses a custom brand color palette defined in `tailwind.config.js`:

- **Brand Colors**: Blue-based palette from 50-900
- **Ink**: Dark text color (#0f172a)

### Fonts
- **Primary Font**: Assistant (Google Fonts)
- **Fallbacks**: System fonts for optimal performance

### Animations
- **Scroll Animations**: Intersection Observer-based reveal effects
- **Hover Effects**: Smooth transitions on interactive elements
- **Custom Keyframes**: Fade-in animations in multiple directions

## Deployment

### Static Generation
```bash
npm run generate
```

### Production Build
```bash
npm run build
npm run preview
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or support, please contact the development team.
