# Ahmed's Portfolio Website

A modern, fully responsive portfolio website showcasing articles, gallery, services, team members, and more. Built with semantic HTML5, modern CSS3, and vanilla JavaScript with performance optimization techniques.

---

## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Sections Overview](#sections-overview)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)

---

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Countdown Timer**: Tracks days, hours, minutes, and seconds to upcoming events
- **Dynamic Stat Counter**: Auto-counting animation for statistics visible on viewport
- **Animated Skill Bars**: Progressive width animation for skill visualization
- **Video Preview Switcher**: Click-based video preview with dynamic title updates
- **Mega Menu Navigation**: Enhanced keyboard-accessible dropdown menu
- **Smooth Scrolling**: Animated scroll-to-top button for better UX
- **Optimized Performance**: IntersectionObserver for lazy animations (no scroll events)
- **SEO Ready**: Semantic HTML, meta tags, Open Graph, Twitter Card, JSON-LD structured data
- **Accessible**: ARIA labels, semantic roles, keyboard navigation support

---

## 📸 Screenshots


### Landing Page

---

## 📁 Project Structure

```
Design-Three/
├── index.html                 # Main HTML file with all sections
├── README.md                  # Project documentation
├── js/
│   └── main.js                # JavaScript functionality
├── styles/
│   └── style.css              # Complete stylesheet
├── images/
│   ├── articles/              # Article preview images
│   ├── discount/              # Discount section visuals
│   ├── events/                # Event-related images
│   ├── features/              # Feature images
│   ├── gallerys/              # Gallery images
│   ├── hero/                  # Hero section illustration
│   ├── nav/                   # Navigation assets
│   ├── pricing/hosting/       # Pricing plan icons
│   ├── skills/                # Skills visualization image
│   ├── status/                # Status section assets
│   ├── teams/                 # Team member photos
│   ├── testimonials/          # Customer testimonial avatars
│   ├── video/                 # Video preview images
│   └── works/                 # Work process images
└── favicon.ico                # Website favicon
```

---

## 🛠️ Technologies Used

### Frontend

- **HTML5**: Semantic markup with accessibility best practices
- **CSS3**: BEM methodology, Flexbox, Grid, animations
- **Vanilla JavaScript (ES6+)**: No frameworks, pure functionality
- **Font Awesome 6**: Icon library for visual elements
- **Google Fonts**: Typography (Cairo, Open Sans, Work Sans)

### Pre-installed Fonts

- Cairo (weights: 300, 400, 500, 600, 800)
- Open Sans (weights: 300, 400, 600, 700, 800)
- Work Sans (weights: 100-800)

---

## 🚀 Installation

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build process or dependencies required

### Setup

1. **Clone or download the project**

   ```bash
   git clone <repository-url>
   cd Design-Three
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - For local development, use a local server:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Python 2
     python -m SimpleHTTPServer 8000

     # Using Node.js (http-server)
     npx http-server
     ```

3. **Access the site**
   - Open `http://localhost:8000` in your browser

---

## 💡 Usage

### Main Features

#### 1. **Navigation**

- Click "Other Links" in the header to access the mega menu
- Use keyboard arrow keys for mega menu navigation
- Press `Escape` to close the mega menu

#### 2. **Countdown Timer**

- Event countdown displays automatically for "Tech Masters Event 2028"
- Updates every second with days, hours, minutes, and seconds
- Located in the Events section

#### 3. **Stat Counter**

- Stats animate when the Stats section comes into view
- Numbers count up from 0 to their target value
- No page reload required

#### 4. **Skill Bars**

- Skill bars animate to their target widths on viewport entry
- Each bar respects its `data-width` attribute

#### 5. **Video Preview**

- Click on any video in the "Top Videos" list
- Preview image and title update dynamically

#### 6. **Scroll to Top**

- Button appears when scrolling down 300px
- Click to smoothly scroll back to top

---

## 📑 Sections Overview

| Section          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| **Header**       | Navigation with mega menu and branding                        |
| **Hero/Landing** | Welcome message with call-to-action                           |
| **Articles**     | Latest insights with 8 featured articles                      |
| **Gallery**      | Portfolio gallery of 6 showcased projects                     |
| **Features**     | Quality, Time, and Passion highlights                         |
| **Testimonials** | 6 customer testimonials with ratings                          |
| **Team**         | 8 team member profiles with social links                      |
| **Services**     | 6 core services offered                                       |
| **Skills**       | Visual skill proficiency bars (HTML, CSS, JavaScript, Python) |
| **How It Works** | 3-step process explanation                                    |
| **Events**       | Countdown timer for upcoming event                            |
| **Pricing**      | 3 hosting plan tiers                                          |
| **Top Videos**   | Video list with preview switcher                              |
| **Stats**        | 4 key achievement statistics                                  |
| **Discount**     | Newsletter subscription and discount request form             |
| **Footer**       | Contact info, links, and social media                         |

---

## ⚡ Performance Optimizations

### JavaScript Optimizations

- **IntersectionObserver API**: Triggers animations only when elements enter viewport
- **No scroll listeners**: Replaced with IntersectionObserver for better performance
- **IIFE (Immediately Invoked Function Expressions)**: Encapsulated modules prevent global scope pollution
- **Early returns**: Guard clauses prevent unnecessary code execution

### Image Optimization

- **Lazy loading**: Images load only when needed (`loading="lazy"`)
- **Responsive images**: Optimized dimensions and file sizes
- **Modern formats**: PNG, JPG for broad browser compatibility

### CSS Optimization

- **BEM Naming**: Predictable class names reduce CSS specificity issues
- **Minimal repaints**: Efficient animations using transform and opacity
- **Font preload**: Google Fonts preconnected and preloaded

---

## ♿ Accessibility Features

- **ARIA Labels**: Descriptive labels for interactive elements
- **Semantic HTML**: Proper heading hierarchy and semantic tags
- **Keyboard Navigation**: Full keyboard support for menus and buttons
- **Screen Reader Support**: Alt text for images, aria-labels for icons
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus States**: Clear visual indicators for focused elements
- **Structured Data**: JSON-LD schema for search engines

---

## 🌐 Browser Support

| Browser | Support          |
| ------- | ---------------- |
| Chrome  | ✅ Latest        |
| Firefox | ✅ Latest        |
| Safari  | ✅ Latest        |
| Edge    | ✅ Latest        |
| IE 11   | ❌ Not supported |

---

## 📝 Code Organization

### HTML (`index.html`)

- Organized into semantic sections with clear comments
- Unifying comment format: `<!-- ────────────────────────── Section Name ───────────────────────────────── -->`
- BEM class naming convention throughout

### JavaScript (`js/main.js`)

- 5 modular IIFE functions for encapsulation
- Unified comment format: `// ─── Section Name ──────────────────────────────────────────────────────────`
- IntersectionObserver configuration for each section
- No external dependencies

### CSS (`styles/style.css`)

- Mobile-first responsive approach
- BEM methodology for maintainability
- CSS custom properties for consistency
- Organized by component sections

---

## 🔧 Customization

### Update Event Countdown Date

Edit `js/main.js`, line 96:

```javascript
const targetDate = new Date("Dec 31 2028 23:59:59").getTime();
```

### Modify Stat Counter Values

In `index.html`, update the `data-goal` attribute:

```html
<span class="stat-card__number" data-goal="150">0</span>
```

### Adjust Skill Levels

In `index.html`, update the `data-width` attribute:

```html
<span class="skill-bar__fill" style="width: 0" data-width="80%"></span>
```

---

## 📞 Contact Information

**Based in**: Giza, Egypt  
**Available for**: Remote work worldwide  
**Working Hours**: 10:00 AM – 6:00 PM (Sun – Thu)  
**Phone**:

- +20 123 456 789
- +20 198 765 432

---

## 📄 License

This project is part of a portfolio demonstration. Feel free to use it as a reference for your own projects.

---

## 🎯 Project Goals

✅ Demonstrate modern web development best practices  
✅ Showcase responsive design principles  
✅ Implement performance optimization techniques  
✅ Provide accessible, semantic markup  
✅ Create a professional portfolio template

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✨
