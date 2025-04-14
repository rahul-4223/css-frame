# UI Library Framework

A custom UI framework built from scratch for web development, inspired by Bootstrap but without any dependencies on third-party libraries. This framework provides a comprehensive set of tools to build responsive, modern websites with minimal effort.

## Features

- Responsive 12-column grid system
- Comprehensive utility classes (margin, padding, text alignment, etc.)
- Base design system (spacing, colors, typography)
- Reusable components (buttons, cards, forms, navigation)
- Dark mode support
- Minimal documentation
- Clean, lightweight codebase

## Project Structure

```
ui-library/
├── css/
│   └── main.css               (complete CSS framework)
├── js/
│   └── ui-library.js          (minimal JS for interactive components)
├── demo/
│   ├── index.html             (showcase all components)
│   ├── docs.html              (documentation)
│   └── examples/
│       ├── dashboard.html     (example dashboard layout)
│       ├── landing-page.html  (example landing page)
│       └── blog.html          (example blog layout)
└── index.html                 (main entry point/redirects to demo)
```

## File Contents Overview

### CSS (css/main.css)
The main CSS file contains all styling for the framework, organized into these logical sections:
1. CSS Reset & Base Styles
2. Root Variables (colors, spacing, typography)
3. Typography Styles
4. Grid System
5. Component Styles
   - Buttons
   - Cards
   - Forms
   - Navbar
   - Alerts
   - Badges
   - Tables
6. Utility Classes
   - Spacing (margin/padding)
   - Display properties
   - Flex utilities
   - Text utilities
   - Color utilities
7. Dark Mode Theming

### JavaScript (js/ui-library.js)
Contains minimal JavaScript for interactive components:
1. DOM utilities
2. Component initialization
3. Dark mode toggle functionality
4. Responsive navigation handling
5. Form validation
6. Modal/dialog functionality
7. Dropdown menu functionality
8. Tab component functionality
9. Accordion component functionality

### Demo Files
- **index.html**: Main component showcase with live examples
- **docs.html**: Documentation for using the framework
- **examples/**: Real-world usage examples showing layouts built with the framework

## Getting Started

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/ui-library.git
   ```

2. Navigate to the project directory:
   ```
   cd ui-library
   ```

3. Start using the library by including the CSS and JS files in your HTML:
   ```html
   <link rel="stylesheet" href="path/to/ui-library/css/main.css">
   <script src="path/to/ui-library/js/ui-library.js"></script>
   ```

## Usage Examples

### Grid System

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Half width on medium screens and up</div>
    <div class="col-md-6">Half width on medium screens and up</div>
  </div>
</div>
```

### Buttons

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline-danger">Outline Danger</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">Card Header</div>
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
  <div class="card-footer">Card Footer</div>
</div>
```

## Dark Mode

The framework includes a built-in dark mode. To enable it:

```html
<body class="dark-mode">
  <!-- Your content -->
</body>
```

Or toggle it with JavaScript:

```javascript
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Bootstrap's grid system and utility classes
- Created as part of a college hackathon project
