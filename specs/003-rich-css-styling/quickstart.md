# Getting Started with CSS Design System

**Phase**: 1 - Design  
**Feature**: 003-rich-css-styling  
**Date**: April 5, 2026  
**Audience**: Frontend developers implementing styled pages

---

## Quick Start (5 minutes)

### Step 1: Import the Design System

All CSS is already imported in your app. The design system is available globally through:
- `src/App.css` - Contains all design system tokens and component classes
- `src/index.css` - Imports Tailwind CSS

**No additional imports needed!** Just start using the classes.

### Step 2: Use Component Classes

Add classes to your HTML to get instant styling:

```jsx
import React, { useState } from 'react'

const LoginPage: React.FC = () => {
  return (
    <section className="page-content">
      <div className="section-card">
        <h1 className="section-title">Sign In</h1>
        <p className="section-description">Enter your credentials to access your account</p>
        
        <form className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="form-input" />
          </div>
          
          <div className="form-field">
            <label className="form-label" htmlFor="password">Password</label>
            <input id="password" type="password" className="form-input" />
          </div>
          
          <div className="form-actions">
            <button className="btn-primary">Sign In</button>
            <button className="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginPage
```

### Step 3: That's It!

Your component now has:
✅ Consistent colors and typography  
✅ Proper spacing and layout  
✅ Interactive button states (hover, focus, active)  
✅ Form input states (focus, disabled, error)  
✅ Mobile responsiveness  
✅ Accessibility features (focus rings, contrast)  

---

## Component Classes Reference

### Layout & Containers

| Class | Purpose | Usage |
|-------|---------|-------|
| `.page-content` | Main page wrapper | Wraps entire page section |
| `.section-card` | Card container with shadow | Content sections, forms |
| `.form-grid` | Multi-column form layout | Responsive form fields |
| `.form-field` | Individual form field wrapper | Groups label + input |
| `.form-actions` | Button action group | Groups action buttons |

### Buttons

| Class | Purpose | Example |
|-------|---------|---------|
| `.btn-primary` | Main action button | "Submit", "Create" |
| `.btn-secondary` | Secondary action button | "Cancel", "Back" |
| `.btn-danger` | Destructive action button | "Delete", "Remove" |

```jsx
<button className="btn-primary">Save Changes</button>
<button className="btn-secondary">Cancel</button>
<button className="btn-danger">Delete</button>
```

### Forms

| Class | Purpose | Example |
|-------|---------|---------|
| `.form-label` | Form input label | `<label className="form-label">` |
| `.form-input` | Text input field | `<input className="form-input" />` |
| `.form-error` | Error message text | Validation error messages |
| `.form-success` | Success message text | Confirmation messages |

```jsx
<div className="form-field">
  <label className="form-label" htmlFor="name">Name</label>
  <input id="name" className="form-input" type="text" />
  {errors.name && <span className="form-error">{errors.name}</span>}
</div>
```

### Typography

| Class | Purpose | Example |
|-------|---------|---------|
| `.section-title` | Page/section heading | Large 36px heading |
| `.section-description` | Subheading/description | 16px secondary text |
| `.text-muted` | Muted/secondary text | Help text, hints |
| `.text-center` | Center align text | Center-aligned content |

```jsx
<h1 className="section-title">Welcome</h1>
<p className="section-description">Create a new account to get started</p>
<p className="text-muted">Already have an account? Sign in</p>
```

---

## Common Patterns

### Basic Form

```jsx
<section className="page-content">
  <div className="section-card">
    <h1 className="section-title">Create Account</h1>
    <p className="section-description">Fill in the details below</p>
    
    <form className="form-grid">
      <div className="form-field">
        <label className="form-label" htmlFor="firstName">First Name</label>
        <input id="firstName" className="form-input" type="text" />
      </div>
      
      <div className="form-field">
        <label className="form-label" htmlFor="email">Email</label>
        <input id="email" className="form-input" type="email" />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="btn-primary">Create</button>
        <button type="reset" className="btn-secondary">Reset</button>
      </div>
    </form>
  </div>
</section>
```

### Form with Validation

```jsx
const [errors, setErrors] = useState({})

return (
  <form className="form-grid">
    <div className="form-field">
      <label className="form-label" htmlFor="email">Email</label>
      <input 
        id="email" 
        className="form-input" 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && (
        <span className="form-error">{errors.email}</span>
      )}
    </div>
    
    <div className="form-actions">
      <button type="submit" className="btn-primary">Submit</button>
    </div>
  </form>
)
```

### Card Grid

```jsx
<div className="form-grid">
  <div className="card">
    <h3 className="section-title">Feature 1</h3>
    <p>Description here...</p>
  </div>
  
  <div className="card">
    <h3 className="section-title">Feature 2</h3>
    <p>Description here...</p>
  </div>
  
  <div className="card">
    <h3 className="section-title">Feature 3</h3>
    <p>Description here...</p>
  </div>
</div>
```

---

## Design System Variables

### Colors

Access any color using CSS variables:

```css
/* In your custom CSS or inline styles */
background-color: var(--color-primary);      /* Blue #2563eb */
color: var(--color-text);                    /* Text gray #1f2937 */
border-color: var(--color-border);           /* Border gray */
```

### Spacing

```css
padding: var(--spacing-md);      /* 16px */
margin: var(--spacing-lg);       /* 24px */
gap: var(--spacing-sm);          /* 8px */
```

### Typography

```css
font-size: var(--font-size-md);  /* 16px */
font-weight: var(--font-weight-bold);  /* 700 */
line-height: var(--line-height-normal);  /* 1.5 */
```

---

## Combining with Tailwind

You can mix component classes with Tailwind utilities:

```jsx
<div className="section-card md:grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label className="form-label">Name</label>
    <input className="form-input mb-4" type="text" />
  </div>
</div>
```

### Best Practice
- Use **component classes** for consistent styling (buttons, inputs, cards)
- Use **Tailwind utilities** for layout and spacing adjustments
- Avoid duplicating styles between component classes and utilities

---

## Responsive Design

### Breakpoints

The design system uses these breakpoints:
- **Mobile**: 320px - 767px (default)
- **Tablet**: 768px - 1023px (`md:` in Tailwind)
- **Desktop**: 1024px+ (`lg:` in Tailwind)

### Responsive Classes

Most component classes automatically adapt:

```jsx
// form-grid automatically becomes:
// - 1 column on mobile
// - 2 columns on tablet/desktop

<form className="form-grid">
  <div className="form-field">...</div>
  <div className="form-field">...</div>
</form>
```

### Using Tailwind Responsive Modifiers

```jsx
<div className="form-grid md:grid-cols-3 lg:grid-cols-4">
  {/* Adjusts column count at different breakpoints */}
</div>
```

---

## Accessibility Features (Built In)

✅ **Focus States**: All buttons and inputs have visible focus rings  
✅ **Color Contrast**: All text meets WCAG AA standards (4.5:1)  
✅ **Touch Targets**: All interactive elements are 44px minimum on mobile  
✅ **Semantic HTML**: Use proper form labels and heading hierarchy  
✅ **Reduced Motion**: Respects user's motion preferences automatically  

### What You Need to Do

1. **Always use `<label>` for form inputs**:
   ```jsx
   <!-- ✅ Good -->
   <label htmlFor="email" className="form-label">Email</label>
   <input id="email" className="form-input" type="email" />
   
   <!-- ❌ Bad -->
   <div>Email</div>
   <input type="email" className="form-input" />
   ```

2. **Use proper heading hierarchy**:
   ```jsx
   <!-- ✅ Good -->
   <h1 className="section-title">Page Title</h1>
   <h2 className="section-description">Subtitle</h2>
   
   <!-- ❌ Bad -->
   <h1>Page Title</h1>
   <h1>Subtitle</h1>
   ```

3. **Provide error messages**:
   ```jsx
   {errors.email && (
     <span id="email-error" className="form-error">{errors.email}</span>
   )}
   <input aria-describedby="email-error" className="form-input" />
   ```

---

## Troubleshooting

### Styles Not Appearing

1. Check that `App.css` is imported in `src/main.tsx`
2. Verify the class name matches exactly (case-sensitive)
3. Check browser DevTools to confirm the class is applied

### Button Styling Doesn't Match

1. Make sure you're using `.btn-primary`, `.btn-secondary`, or `.btn-danger`
2. Don't use Tailwind bg-* classes on buttons; use component classes instead

### Form Inputs Not Responsive

1. Wrap form fields in `.form-grid` for automatic responsiveness
2. Use `.form-field` for individual fields to get proper spacing

### Focus States Not Visible

1. Don't override `:focus` styles
2. Keep the `outline` property visible
3. If styling focus, ensure contrast ratio is 4.5:1

---

## Next Steps

1. ✅ Update all pages to use `.page-content` wrapper
2. ✅ Convert forms to use `.form-grid` and component classes
3. ✅ Replace buttons with `.btn-primary`, `.btn-secondary`, `.btn-danger`
4. ✅ Test responsive behavior on mobile/tablet/desktop
5. ✅ Verify accessibility with keyboard navigation

---

## Resources

- **Design System API**: [css-design-system.md](../contracts/css-design-system.md)
- **Data Model**: [data-model.md](../data-model.md)
- **Research & Best Practices**: [research.md](../research.md)

---

## Support

For questions or issues with the design system, refer to:
- This quickstart guide for common patterns
- The CSS contract for complete class reference
- The research document for design decisions

Happy styling! 🎨
