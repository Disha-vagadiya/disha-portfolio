# Disha Vagadiyaa - Portfolio Website

A modern, visually stunning portfolio website built with React, TypeScript, and CSS3 featuring 3D animations, glassmorphism design, and smooth interactions.

## ✨ Features

- 🎨 **Modern Dark Theme** with cyan/purple gradient accents
- 🎭 **3D CSS Animations** with floating geometric shapes and particles
- 💎 **Glassmorphism Design** with backdrop blur effects
- ⚡ **Smooth Animations** and micro-interactions
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- 🎯 **TypeScript** with strict mode for type safety
- ♿ **Accessible** with proper ARIA labels and keyboard navigation
- 🚀 **Optimized Performance** with smooth 60fps animations

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **CSS3** - Custom styling with CSS variables
- **CSS Modules** - Scoped component styles

## 📦 Installation

Since npm scripts are disabled on your system, you'll need to enable PowerShell script execution first:

### Option 1: Enable PowerShell Scripts (Recommended)
Open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install dependencies:
```bash
npm install
```

### Option 2: Use Command Prompt
Alternatively, use Command Prompt (cmd) instead of PowerShell:
```bash
npm install
```

## 🚀 Running the Project

Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar/          # Navigation with scroll detection
│   │   ├── Hero/            # Hero section with 3D animations
│   │   ├── About/           # About section
│   │   ├── Skills/          # Skills showcase
│   │   ├── Projects/        # Featured projects
│   │   ├── Experience/      # Professional timeline
│   │   ├── Contact/         # Contact form
│   │   └── Footer/          # Footer section
│   ├── styles/
│   │   └── variables.css    # CSS custom properties
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
└── package.json             # Dependencies
```

## 🎨 Design Highlights

### Hero Section
- 3D floating geometric shapes with CSS animations
- Particle system with random positioning
- Rotating 3D code card with syntax highlighting
- Animated text with gradient effects
- Social media links with glassmorphism

### Skills Section
- Categorized skill cards (Frontend, Mobile, Tools, Other)
- Hover effects with 3D transforms and glow
- Staggered fade-in animations
- Responsive grid layout

### Projects Section
- 5 featured projects with unique gradients
- Depth effects on hover
- Technology badges
- Detailed descriptions from resume

### Experience Section
- Animated timeline with gradient line
- Pulsing timeline dots
- Glassmorphism cards
- Detailed responsibilities

### Contact Section
- Form validation (email format, required fields)
- Animated input focus states
- Contact info cards
- Social links

## 🎯 Key Features Implemented

✅ **TypeScript Strict Mode** - Full type safety  
✅ **Responsive Design** - Mobile-first approach  
✅ **Glassmorphism** - Modern frosted glass effects  
✅ **3D Animations** - CSS-based 3D transforms  
✅ **Smooth Scrolling** - Native smooth scroll behavior  
✅ **Active Section Detection** - Navbar highlights current section  
✅ **Mobile Menu** - Hamburger menu with smooth transitions  
✅ **Form Validation** - Client-side validation with error messages  
✅ **SEO Optimized** - Proper meta tags and semantic HTML  
✅ **Performance** - Optimized animations and lazy loading ready  

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Colors
Edit `src/styles/variables.css` to customize the color scheme:
```css
--color-accent-cyan: #13b0f5;
--color-accent-purple: #a78bfa;
--gradient-cyan-purple: linear-gradient(135deg, #13b0f5 0%, #e70faa 100%);
```

### Content
Update personal information in the respective component files:
- `src/components/Hero/Hero.tsx` - Name and title
- `src/components/About/About.tsx` - Professional summary
- `src/components/Skills/Skills.tsx` - Skills list
- `src/components/Projects/Projects.tsx` - Project details
- `src/components/Experience/Experience.tsx` - Work experience
- `src/components/Contact/Contact.tsx` - Contact information

## 🚀 Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📄 License

This project is created for Disha Vagadiyaa's personal portfolio.

---

**Built with ❤️ using React and TypeScript**
