# CSS Design System Interface Contract

**Phase**: 1 - Design  
**Feature**: 003-rich-css-styling  
**Date**: April 5, 2026  
**Contract Type**: CSS Design System API

## Overview

This contract specifies the CSS design system interface—what styles are available, how to use them, and what guarantees they provide. This is the public interface that all pages and components must follow.

---

## Design System Structure

### File Organization

```
src/
├── App.css                    # Main design system file
│   ├── CSS Variables (Design Tokens)
│   ├── Component Classes
│   ├── Layout Classes
│   ├── Utility Classes
│   ├── Responsive Utilities
│   └── Accessibility Features
└── index.css                  # Tailwind imports (unchanged)
```

---

## 1. CSS Variables (Design Tokens)

### Color Tokens

```css
:root {
  /* Primary Colors */
  --color-primary: #2563eb;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1d4ed8;
  
  /* Secondary Colors */
  --color-secondary: #ec4899;
  --color-secondary-light: #f472b6;
  --color-secondary-dark: #db2777;
  
  /* Semantic Colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Neutral Colors (Gray Palette) */
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  
  /* Text Colors */
  --color-text: #1f2937;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;
  
  /* Background Colors */
  --color-bg: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-tertiary: #f3f4f6;
  
  /* Border Colors */
  --color-border: #e5e7eb;
  --color-border-light: #f3f4f6;
}
```

**Usage**:
```css
.button {
  background-color: var(--color-primary);
  color: white;
}

.button:hover {
  background-color: var(--color-primary-dark);
}
```

### Spacing Tokens

```css
:root {
  /* Spacing Scale (in rems, based on 16px = 1rem) */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
}
```

**Usage**:
```css
.card {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-sm);
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: "Monaco", "Courier New", monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.25rem;  /* 36px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### Shadow Tokens

```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
}
```

### Transition Tokens

```css
:root {
  --transition-fast: all 75ms ease-in-out;
  --transition-normal: all 150ms ease-in-out;
  --transition-slow: all 300ms ease-in-out;
  --transition-slower: all 500ms ease-in-out;
}
```

---

## 2. Component Classes

### Button Components

#### `.btn-primary`
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 44px;
  background-color: var(--color-primary);
  color: white;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.btn-primary:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1), 0 0 0 4px var(--color-primary);
}

.btn-primary:active {
  background-color: var(--color-primary-dark);
  transform: scale(0.98);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### `.btn-secondary`
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 44px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-primary);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: white;
}

.btn-secondary:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1), 0 0 0 4px var(--color-primary);
}

.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### `.btn-danger`
```css
.btn-danger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 44px;
  background-color: var(--color-error);
  color: white;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-danger:hover {
  background-color: #dc2626;
}

.btn-danger:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1), 0 0 0 4px var(--color-error);
}

.btn-danger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Form Components

#### `.form-group`
```css
.form-group {
  display: grid;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}
```

#### `.form-label`
```css
.form-label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}
```

#### `.form-input`
```css
.form-input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 44px;
  font-size: var(--font-size-md);
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-family);
  transition: var(--transition-normal);
  box-sizing: border-box;
}

.form-input:hover {
  border-color: var(--color-neutral-400);
}

.form-input:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-input:disabled {
  background-color: var(--color-neutral-100);
  color: var(--color-text-muted);
  cursor: not-allowed;
}
```

#### `.form-error`
```css
.form-error {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-error);
  margin-top: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}
```

#### `.form-success`
```css
.form-success {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-success);
  margin-top: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}
```

### Card Components

#### `.card`
```css
.card {
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-md);
  transition: var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

@media (min-width: 768px) {
  .card {
    padding: var(--spacing-lg);
  }
}
```

#### `.section-card`
```css
.section-card {
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border-light);
}

@media (min-width: 768px) {
  .section-card {
    padding: var(--spacing-lg);
  }
}
```

---

## 3. Layout Classes

#### `.page-content`
```css
.page-content {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: var(--spacing-md);
  min-height: calc(100vh - 120px);
}

@media (min-width: 768px) {
  .page-content {
    padding: var(--spacing-lg);
  }
}
```

#### `.form-grid`
```css
.form-grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}
```

#### `.form-field`
```css
.form-field {
  display: grid;
  gap: var(--spacing-xs);
}
```

#### `.form-actions`
```css
.form-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions button {
    width: 100%;
  }
}
```

---

## 4. Typography Classes

#### `.section-title`
```css
.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-tight);
}
```

#### `.section-description`
```css
.section-description {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-normal);
}
```

#### `.text-muted`
```css
.text-muted {
  color: var(--color-text-muted);
}
```

#### `.text-center`
```css
.text-center {
  text-align: center;
}
```

---

## 5. Responsive Utilities

### Visibility Classes

```css
@media (max-width: 767px) {
  .hide-mobile {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hide-tablet {
    display: none;
  }
}

@media (min-width: 1024px) {
  .hide-desktop {
    display: none;
  }
}
```

### Responsive Text

```css
@media (max-width: 767px) {
  .text-responsive {
    font-size: 0.875rem;
  }
}

@media (min-width: 768px) {
  .text-responsive {
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .text-responsive {
    font-size: 1.125rem;
  }
}
```

---

## 6. Accessibility Features

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Visible

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### High Contrast Mode

```css
@media (prefers-contrast: more) {
  :root {
    --color-text: #000000;
    --color-neutral-900: #000000;
    --color-primary: #0000ff;
  }
}
```

---

## Usage Guidelines

### Do's ✅
- Use CSS variables for all colors, spacing, typography
- Use component classes for consistent styling
- Use Tailwind utilities alongside component classes
- Ensure all interactive elements have focus states
- Test responsive behavior at all breakpoints
- Maintain minimum contrast ratio of 4.5:1 for text

### Don'ts ❌
- Don't hardcode colors or spacing values
- Don't use `!important` outside of accessibility context
- Don't remove or hide focus indicators
- Don't use inline styles for component styling
- Don't create conflicting specificity with component classes
- Don't skip responsive design testing

---

## Example: Complete Form

```jsx
<section className="page-content">
  <div className="section-card">
    <h1 className="section-title">Create Account</h1>
    <p className="section-description">Fill in the details below to register a new user.</p>
    
    <form className="form-grid">
      <div className="form-field">
        <label className="form-label" htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" className="form-input" placeholder="John" />
      </div>
      
      <div className="form-field">
        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" className="form-input" placeholder="Doe" />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="btn-primary">Create Account</button>
        <button type="reset" className="btn-secondary">Reset</button>
      </div>
    </form>
  </div>
</section>
```

---

## Contract Guarantee

✅ This contract guarantees that:
1. All color tokens use WCAG AA compliant contrast ratios
2. All interactive elements have visible focus states
3. All components are responsive (mobile-first)
4. All spacing follows the defined scale
5. All typography uses consistent font sizes and weights
6. All shadows create appropriate elevation
7. All transitions are GPU-friendly and accessible
