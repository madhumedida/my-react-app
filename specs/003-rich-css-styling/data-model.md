# CSS Design System - Data Model

**Phase**: 1 - Design  
**Feature**: 003-rich-css-styling  
**Date**: April 5, 2026  
**Created from**: [research.md](research.md)

## Overview

This document defines the CSS design system entities, their attributes, relationships, and constraints that form the foundation for consistent styling across all pages in the application.

---

## Design System Entities

### 1. Design Tokens (CSS Variables)

**Description**: Fundamental design variables that define the visual language of the application.

#### Entity: Color Token
```
- id: string (e.g., "color.primary", "color.neutral.gray-500")
- name: string (e.g., "Primary Blue", "Neutral Gray 500")
- category: enum [primary, secondary, success, warning, error, neutral]
- hexValue: string (e.g., "#2563eb")
- semanticName: string (e.g., "--color-primary")
- wcagContrast: number (e.g., 4.5, 3.0) - for text contrast validation
- usedOn: string[] (list of components: ["buttons", "links", "text"])
```

#### Entity: Spacing Token
```
- id: string (e.g., "spacing.sm", "spacing.2xl")
- name: string (e.g., "Small", "Extra Large")
- pxValue: number (e.g., 8, 48)
- remValue: string (e.g., "0.5rem", "3rem")
- semanticName: string (e.g., "--spacing-sm")
- usedFor: string[] (e.g., ["padding", "margin", "gap"])
```

#### Entity: Typography Token
```
- id: string (e.g., "typography.heading-1", "typography.body")
- name: string
- fontSize: string (e.g., "2.25rem", "1rem")
- fontWeight: number (e.g., 400, 700)
- lineHeight: number (e.g., 1.2, 1.6)
- letterSpacing: string (e.g., "-0.01em", "normal")
- semanticName: string (e.g., "--font-heading-1")
```

#### Entity: Shadow Token
```
- id: string (e.g., "shadow.sm", "shadow.lg")
- name: string
- cssValue: string (e.g., "0 1px 2px rgba(0,0,0,0.05)")
- elevation: enum [xs, sm, md, lg, xl]
- semanticName: string (e.g., "--shadow-sm")
- usedOn: string[] (e.g., ["cards", "modals", "popups"])
```

---

### 2. Component Classes

**Description**: Reusable CSS classes that apply design tokens to create consistent UI components.

#### Entity: Button Component
```
- id: string (e.g., "btn.primary", "btn.secondary-sm")
- className: string (e.g., ".btn-primary")
- variant: enum [primary, secondary, danger, ghost]
- size: enum [sm, md, lg]
- styles: {
    background: color-token-ref,
    color: color-token-ref,
    padding: spacing-token-ref,
    borderRadius: "0.375rem",
    transition: "150ms ease-in-out",
    fontWeight: 500
  }
- states: {
    default: { ... },
    hover: { ... },
    focus: { ... },
    active: { ... },
    disabled: { ... }
  }
- accessibility: {
    minWidth: "44px",
    minHeight: "44px",
    focusRing: "2px solid currentColor"
  }
```

#### Entity: Form Input Component
```
- id: string (e.g., "input.text", "input.email")
- className: string (e.g., ".form-input")
- type: enum [text, email, password, tel, number]
- styles: {
    padding: spacing-token-ref,
    borderWidth: "1px",
    borderColor: color-token-ref,
    borderRadius: "0.25rem",
    fontSize: "1rem",
    lineHeight: "1.5"
  }
- states: {
    default: { ... },
    hover: { ... },
    focus: { ... },
    disabled: { ... },
    error: { ... },
    success: { ... }
  }
- constraints: {
    minHeight: "44px",
    minWidth: "auto",
    maxWidth: "100%"
  }
```

#### Entity: Card Component
```
- id: string (e.g., "card.default", "card.elevated")
- className: string (e.g., ".card")
- variant: enum [default, elevated, outlined]
- styles: {
    background: color-token-ref,
    padding: spacing-token-ref,
    borderRadius: "0.5rem",
    shadow: shadow-token-ref,
    border: "optional"
  }
- sections: [header, body, footer]
- responsiveness: {
    mobile: { gridColumns: 1, padding: "1rem" },
    tablet: { gridColumns: 2, padding: "1.5rem" },
    desktop: { gridColumns: 3, padding: "2rem" }
  }
```

#### Entity: Form Wrapper Component
```
- id: string (e.g., "form.default")
- className: string (e.g., ".form-group")
- styles: {
    display: "grid",
    gap: spacing-token-ref,
    padding: spacing-token-ref
  }
- children: [form-input, form-label, form-error, form-success]
```

#### Entity: Label Component
```
- id: string (e.g., "label.form", "label.section")
- className: string (e.g., ".form-label")
- styles: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: color-token-ref
  }
- constraint: labelFor must reference form input id
```

#### Entity: Message Component
```
- id: string (e.g., "message.error", "message.success")
- className: string (e.g., ".form-error", ".form-success")
- type: enum [error, success, warning, info]
- styles: {
    color: color-token-ref (based on type),
    backgroundColor: color-token-ref (lighter shade),
    padding: spacing-token-ref,
    borderRadius: "0.25rem",
    fontSize: "0.875rem"
  }
- displayRules: {
    visibility: conditional (only show if applicable),
    animation: "fadeIn 150ms ease-in-out"
  }
```

---

### 3. Layout Components

**Description**: Container and layout components that manage page structure and responsive behavior.

#### Entity: Page Container
```
- id: string (e.g., "page.content", "page.card")
- className: string (e.g., ".page-content")
- max-width: responsive [100% mobile, 640px tablet, 1024px desktop]
- padding: responsive spacing-tokens
- display: "flex" or "grid"
- purpose: Wraps entire page content
```

#### Entity: Section Card
```
- id: string (e.g., "section.card", "section.form")
- className: string (e.g., ".section-card")
- styles: {
    background: color-token-ref,
    padding: spacing-token-ref,
    borderRadius: "0.5rem",
    boxShadow: shadow-token-ref
  }
- responsive: {
    mobile: { padding: "1rem" },
    desktop: { padding: "2rem" }
  }
```

#### Entity: Responsive Grid
```
- id: string (e.g., "grid.auto", "grid.form")
- className: string (e.g., ".grid-auto")
- gridColumns: {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
- gap: spacing-token-ref
- responsive: uses CSS Grid with auto-fit
```

---

### 4. State & Interactive Elements

#### Entity: Interactive State
```
- id: string (e.g., "state.hover", "state.focus", "state.active", "state.disabled")
- type: enum [hover, focus, active, disabled, loading, error, success]
- properties: {
    property: "background-color" | "color" | "transform" | "box-shadow",
    value: color-token | transform-value,
    transition: transition-duration (150ms-300ms)
  }
- accessibility: {
    visible: boolean (MUST be true for focus state),
    contrastRatio: minimum 4.5:1
  }
```

#### Entity: Transition Animation
```
- id: string (e.g., "transition.fast", "transition.smooth")
- duration: enum [75ms, 150ms, 300ms, 500ms]
- timingFunction: enum [linear, ease-in, ease-out, ease-in-out, cubic-bezier]
- properties: string[] (e.g., ["background-color", "opacity"])
- gpu-friendly: boolean (use transform and opacity only)
```

---

### 5. Responsive Design Contracts

#### Entity: Breakpoint
```
- id: string (e.g., "breakpoint.mobile", "breakpoint.tablet", "breakpoint.desktop")
- name: string (e.g., "Mobile", "Tablet", "Desktop")
- minWidth: number (e.g., 320, 768, 1024)
- maxWidth: number | null
- displayName: string (e.g., "sm", "md", "lg")
- usedStandard: enum [tailwind, custom-css]
  - Tailwind breakpoints: { sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px }
  - Custom: { mobile: 320px, tablet: 768px, desktop: 1024px, ultrawide: 2560px }
```

#### Entity: Responsive Behavior
```
- id: string (e.g., "responsive.form-layout", "responsive.navigation")
- affectedElement: string[] (e.g., ["form", "inputs", "buttons"])
- behaviors: {
    mobile: { layout: "single-column", spacing: reduced, touchSize: "44px" },
    tablet: { layout: "two-column", spacing: normal, touchSize: "40px" },
    desktop: { layout: "multi-column", spacing: generous, touchSize: "auto" }
  }
```

---

### 6. Accessibility & Constraints

#### Entity: Accessibility Constraint
```
- id: string (e.g., "a11y.wcag-aa", "a11y.touch-target")
- standard: enum [WCAG-AA, WCAG-AAA, custom]
- rule: string (description of constraint)
- minContrastRatio: number (e.g., 4.5)
- applicableTo: string[] (e.g., ["text", "buttons", "links"])
- testMethod: string (how to verify compliance)
```

#### Entity: Visual Constraint
```
- id: string (e.g., "constraint.button-size", "constraint.spacing-grid")
- property: string (e.g., "minHeight", "padding")
- minValue: string | number (e.g., "44px", 16)
- maxValue: string | number | null
- reason: string (e.g., "Touch target size for mobile usability")
- appliesTo: string[] (component class names)
```

---

## Entity Relationships

```
Design Tokens
  ├── Color Tokens (used by: Components, Messages, Links)
  ├── Spacing Tokens (used by: Buttons, Inputs, Cards, Grid)
  ├── Typography Tokens (used by: Headings, Labels, Body text)
  └── Shadow Tokens (used by: Cards, Modals, Elevation)

Component Classes
  ├── Button
  ├── Form Input
  ├── Form Label
  ├── Form Message (error/success)
  ├── Card
  └── Form Wrapper (contains: inputs, labels, messages)

Layout Components
  ├── Page Container
  ├── Section Card
  └── Responsive Grid

Interactive States
  ├── Hover (applied to: Button, Input, Link, Card)
  ├── Focus (applied to: Button, Input)
  ├── Active (applied to: Button, Link)
  ├── Disabled (applied to: Button, Input)
  └── Transitions (applied to: all interactive elements)

Responsive Design
  ├── Breakpoints (mobile, tablet, desktop, ultrawide)
  └── Responsive Behaviors (forms, navigation, grids)

Accessibility
  ├── Contrast Ratios (apply to: text, buttons, backgrounds)
  ├── Touch Targets (apply to: buttons, inputs, links)
  └── Focus Indicators (apply to: all interactive elements)
```

---

## Constraints & Validation Rules

### Component Constraints
1. **Button**: Minimum 44px height on mobile, minimum text contrast 4.5:1
2. **Input**: Minimum 44px height, 4:1 color contrast, visible focus indicator
3. **Card**: Minimum padding 1rem, shadow elevation defined
4. **Label**: Must be associated with form input (for accessibility)
5. **Message**: Color must indicate type (error=red, success=green, etc.)

### Layout Constraints
1. **Page Content**: Max width responsive, centered on desktop
2. **Section Card**: Padding scales with viewport size
3. **Grid**: Columns adapt: 1 mobile, 2 tablet, 3+ desktop

### Typography Constraints
1. **Body text**: Minimum 16px on mobile, 1.6 line-height
2. **Headings**: Max width 80 characters for readability
3. **Line length**: 50-75 characters optimal for line length

### Responsiveness Constraints
1. **Minimum viewport**: 320px (iPhone SE)
2. **Maximum viewport**: 2560px (ultra-wide monitors)
3. **Touch targets**: Minimum 44px × 44px on touch devices
4. **No horizontal scrolling**: Content must fit within viewport

---

## Summary

This data model defines **7 major entity categories** with **19 core entities** that form the CSS design system. All components use design tokens for consistency, support responsive behavior at multiple breakpoints, and maintain accessibility standards (WCAG AA minimum). This structure enables:

- ✅ Single source of truth (CSS variables)
- ✅ Consistent theming across pages
- ✅ Easy maintenance and updates
- ✅ Accessibility compliance
- ✅ Responsive across all device sizes
- ✅ Predictable, maintainable component library
