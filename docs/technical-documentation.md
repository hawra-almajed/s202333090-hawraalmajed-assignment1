# Technical Documentation - Personal Portfolio Website

## Overview

This is a responsive, single-page portfolio website built with HTML5, CSS3, and vanilla JavaScript. The website showcases personal projects and provides a contact method. It is a front-end only application with no backend integration.

## Architecture & Technology Stack

### Frontend Technologies
- **HTML5:** Semantic markup for structure and accessibility
- **CSS3:** Modern styling with CSS variables, Flexbox, Grid, and media queries for responsiveness
- **JavaScript (Vanilla ES6+):** No frameworks or libraries; pure JavaScript for interactivity
- **LocalStorage API:** For persisting user preferences (theme selection)

### Design Approach
- **Progressive Enhancement:** Core functionality works without JavaScript; enhancements layer on top
- **Mobile-First Responsive Design:** Prioritizes mobile experience, scales up to larger screens
- **CSS Variables:** Dynamic theming without duplicating CSS rules

---

## Project Structure

```
js/
├── script.js           # All JavaScript functionality

css/
├── style.css          # All styling and responsive design

assets/
├── images/            # Project showcase images

index.html            # Single HTML file (SPA-style)

docs/
├── ai-usage-report.md
├── technical-documentation.md (this file)
```

---

## Code Components & Implementation

### 1. HTML Structure (index.html)

The website is organized into semantic sections:

#### Navigation Bar
```html
<nav>
    <h2>Portfolio</h2>
    <button id="themeToggle">🌙</button>
</nav>
```
- Contains the site title and theme toggle button
- Fixed or sticky positioning for easy access

#### About Section
```html
<section id="about">
    <div class="container">
        <h1 id="greeting"></h1>
        <h2>About Me</h2>
        <p>Content about skills and aspirations</p>
    </div>
</section>
```
- The `<h1 id="greeting">` is populated dynamically by JavaScript
- `container` class provides consistent max-width and padding

#### Projects Section
```html
<section id="projects">
    <div class="projects-grid">
        <div class="project-card">
            <div class="project-img"><img src="..."></div>
            <h3>Project Title</h3>
            <p>Project description</p>
        </div>
    </div>
</section>
```
- Uses CSS Grid for responsive layout
- Each project is a self-contained card component
- Images are contained in a dedicated div for consistent sizing

#### Contact Section
```html
<section id="contact">
    <form id="contactForm">
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
    </form>
    <p id="formMessage"></p>
</section>
```
- HTML5 form validation (required attributes, email type)
- Success message displayed below form

---

### 2. CSS Styling (style.css)

#### CSS Architecture
The stylesheet follows a modular approach with these key patterns:

**CSS Variables for Theming**
```css
:root {
    --color-primary: #333;
    --color-background: #fff;
    --color-accent: #007bff;
    /* ... more color variables */
}

body.dark {
    --color-primary: #f0f0f0;
    --color-background: #1a1a1a;
    --color-accent: #0056b3;
}
```
- Single source of truth for colors
- Theme switching only requires changing CSS variable values
- Eliminates code duplication between light and dark themes

**Responsive Design Strategy**
- **Mobile-first approach:** Base styles target mobile (320px+)
- **Media queries:** Breakpoints for tablet (768px) and desktop (1024px)
- **Flexible layouts:** Flexbox and Grid adapt to screen sizes

**Key CSS Features**
- `flex-wrap: wrap` for flexible card layouts
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for responsive grid
- `transition: background-color 0.3s ease` for smooth theme switching
- `max-width: 1200px` containers for optimal line length on large screens

#### Component Styling
- **Navigation:** Full-width sticky header with flex layout
- **Sections:** Padding and max-width for consistent spacing
- **Cards:** Shadow effects, rounded corners, hover states
- **Form:** Full-width inputs with focus states and validation styling
- **Buttons:** Hover and active states for better UX

---

### 3. JavaScript Functionality (script.js)

#### Feature 1: Time-Based Greeting

```javascript
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) greeting.textContent = 'Good Morning!';
else if (hour < 18) greeting.textContent = 'Good Afternoon!';
else greeting.textContent = 'Good Evening!';
```

**How it works:**
- Runs on page load
- Gets the current hour using `new Date().getHours()`
- Sets greeting text based on time of day
- Updates dynamically if user has page open across time boundaries (would need interval for continuous update)

**Implementation details:**
- Uses 24-hour format: 0-11 (morning), 12-17 (afternoon), 18-23 (evening)
- Simple conditional logic for easy maintenance
- No external dependencies

---

#### Feature 2: Dark/Light Theme Toggle

```javascript
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
```

**How it works:**
1. **On page load:**
   - Checks `localStorage` for saved theme preference
   - Applies 'dark' class to body if previously selected
   
2. **On button click:**
   - Toggles the 'dark' class on the body element
   - CSS variables automatically update via the dark theme selector
   - Button emoji changes (🌙 to ☀️ or vice versa)
   - Saves preference to `localStorage` for persistence

**Key design decisions:**
- Uses CSS classes instead of inline styles (separation of concerns)
- `classList.toggle()` for clean class management
- `localStorage` persists theme across browser sessions
- Emoji icon provides visual feedback of current theme

---

#### Feature 3: Form Interaction

```javascript
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = 'Message sent successfully!';
    form.reset();
});
```

**How it works:**
1. **On form submission:**
   - `e.preventDefault()` stops the default form submission behavior (page reload)
   - Success message appears below the form
   - `form.reset()` clears all input fields
   
2. **User feedback:**
   - Immediate visual confirmation that the form was processed
   - Message could be enhanced with timeout to auto-dismiss

**Current limitations:**
- No backend integration, so messages are not actually sent
- Could be extended in future to send data to a backend service via fetch API

**Technical notes:**
- Uses event bubbling (event listener on form captures submit event)
- `preventDefault()` is essential for client-side form handling
- `reset()` method clears form without page reload

---

## Responsive Design Implementation

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

### Responsive Elements
1. **Navigation:** Full-width, items stack on mobile
2. **Container:** Max-width 1200px, 100% width on smaller screens
3. **Projects Grid:** 
   - Mobile: 1 column
   - Tablet: 2 columns
   - Desktop: 3+ columns (auto-fit)
4. **Form:** Adjusts input width and spacing per screen size
5. **Images:** Responsive with `max-width: 100%`

### CSS Media Query Pattern
```css
/* Mobile first (default styles) */
.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

## Styling Features

### Color Scheme
- **Primary:** Dark text/light background (light mode), light text/dark background (dark mode)
- **Accent:** Blue for interactive elements (links, buttons)
- **Neutral:** Grays for secondary text

### Typography
- **Headings:** Larger font size with increased line-height
- **Body:** Standard size with good contrast ratio for accessibility
- **Font stacks:** System fonts for fast loading (no external font requests)

### Interactive States
- **Buttons:** Hover color change, cursor pointer
- **Links:** Underline on hover
- **Form inputs:** Border color on focus, visual feedback
- **Cards:** Subtle shadow on hover

### Transitions
- Smooth theme switching: `transition: background-color 0.3s ease`
- Hover effects use transitions for polish
- Duration: 300ms (perceptible but not sluggish)

---

## Performance Considerations

### Optimizations
1. **Minimal Dependencies:** No external libraries or frameworks
2. **CSS Variables:** Efficient theme switching without DOM manipulation
3. **LocalStorage:** Lightweight persistence without database calls
4. **Semantic HTML:** Built-in accessibility features
5. **Image Optimization:** Use compressed/appropriately sized images

### Potential Improvements
1. Lazy load images (especially for mobile)
2. Minify CSS and JavaScript for production
3. Add service worker for offline functionality
4. Compress images to WebP format
5. Consider critical rendering path optimization

---

## Browser Compatibility

### Supported Features
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest versions)
- **HTML5 Features Used:**
  - Semantic elements (section, nav, article)
  - Form validation attributes
  - LocalStorage API
- **CSS Features Used:**
  - CSS Grid and Flexbox
  - CSS Custom Properties (variables)
  - Media queries
  - CSS transitions

### Fallbacks
- Browsers without CSS Grid support will still display content but may have suboptimal layout
- LocalStorage is supported in all modern browsers

---

## Future Enhancement Opportunities

### Backend Integration
- Connect contact form to email service
- Store form submissions in database

### Additional Features
- Blog section with Markdown support
- Skills section
- Testimonials/reviews
- Dark mode auto-detection (prefers-color-scheme media query)

---

## File Dependencies

```
index.html
  ├── css/style.css
  └── js/script.js
```

- HTML loads CSS in `<head>` for above-the-fold content
- JavaScript loaded at end of `<body>` for non-blocking execution
- No external library dependencies

---

## Testing & Debugging Tips

### Manual Testing Checklist
- [ ] Theme toggle works and persists on refresh
- [ ] Greeting updates correctly for different times
- [ ] Form submission shows success message
- [ ] Form resets input fields after submission
- [ ] Layout looks good on mobile, tablet, desktop
- [ ] Images load correctly
- [ ] All text is readable in both themes

---

## Conclusion

This portfolio website demonstrates fundamental web development skills including semantic HTML, modern CSS techniques, and vanilla JavaScript. It prioritizes user experience with responsive design and accessibility while maintaining clean, maintainable code without unnecessary dependencies.