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
│   ├── main.css               (compiled from SCSS)
│   └── main.min.css           (minified version)
├── scss/
│   ├── base/
│   │   ├── _reset.scss        (CSS reset)
│   │   ├── _typography.scss   (font styles)
│   │   ├── _variables.scss    (global variables)
│   │   └── _root.scss         (CSS variables)
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _forms.scss
│   │   └── _navbars.scss
│   ├── layout/
│   │   └── _grid.scss         (12-column grid system)
│   ├── utilities/
│   │   ├── _spacing.scss      (margin, padding)
│   │   ├── _display.scss      (display properties)
│   │   ├── _flex.scss         (flexbox utilities)
│   │   ├── _text.scss         (text alignment, etc.)
│   │   └── _colors.scss       (color utilities)
│   ├── themes/
│   │   └── _dark-mode.scss    (dark theme variables)
│   └── main.scss              (imports all SCSS files)
├── js/
│   └── ui-library.js          (minimal JS for interactive components)
└── demo/
    ├── index.html             (showcase all components)
    ├── docs.html              (documentation)
    └── examples/              (example layouts)
```

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

3. If you have SASS installed globally, compile the SCSS files:
   ```
   sass scss/main.scss css/main.css
   ```

4. For minified version:
   ```
   sass scss/main.scss css/main.min.css --style compressed
   ```

### Usage

Include the CSS in your HTML:

```html
<link rel="stylesheet" href="path/to/ui-library/css/main.css">
```

Include the JavaScript file (optional, for interactive components):

```html
<script src="path/to/ui-library/js/ui-library.js"></script>
```

## Core Components

### Grid System

The framework uses a 12-column responsive grid system:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Half width on medium screens and up</div>
    <div class="col-md-6">Half width on medium screens and up</div>
  </div>
</div>
```

### Typography

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p class="lead">Lead paragraph</p>
<p>Regular paragraph</p>
<p class="text-muted">Muted text</p>
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

## Utility Classes

### Spacing

- Margin: `m-1`, `mt-2`, `mr-3`, `mb-4`, `ml-5`, `mx-auto`
- Padding: `p-1`, `pt-2`, `pr-3`, `pb-4`, `pl-5`

### Display

- `d-block`, `d-inline`, `d-flex`, `d-none`
- Responsive variants: `d-sm-block`, `d-md-none`, etc.

### Text

- Alignment: `text-left`, `text-center`, `text-right`
- Transform: `text-uppercase`, `text-lowercase`, `text-capitalize`
- Weight: `fw-light`, `fw-normal`, `fw-bold`

### Colors

- Text: `text-primary`, `text-danger`, etc.
- Background: `bg-primary`, `bg-success`, etc.

## Dark Mode

The framework includes a built-in dark mode. To enable it:

```html
<body class="dark-mode">
  <!-- Your content -->
</body>
```

Or toggle it with JavaScript:

```javascript
document.body.classList.toggle('dark-mode');
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


This is the complete thing we will be making from scratch ok :

the steps or procedure we are going to follow :
1. Responsive 12-column grid system

2. Utility classes (spacing, typography, flex)

3. Design tokens (color, spacing, fonts)

4. Dark mode (optional bonus)

5. Reusable components (buttons, cards, navbars, etc.)

6. Documentation/Demo site
   
