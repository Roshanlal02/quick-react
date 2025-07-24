# Tailwind Custom Variables Guide

This project uses Tailwind CSS v4 with custom CSS variables defined in `app/app.css`. These variables provide a consistent design system throughout the application.

## 🎨 Available Variables

### Colors

#### Primary Colors
- `--color-primary` (#3b82f6) - Main brand color
- `--color-primary-light` (#60a5fa) - Lighter variant
- `--color-primary-dark` (#1d4ed8) - Darker variant

#### Secondary Colors
- `--color-secondary` (#6366f1)
- `--color-secondary-light` (#818cf8)
- `--color-secondary-dark` (#4338ca)

#### Semantic Colors
- `--color-success` / `--color-success-light` / `--color-success-dark`
- `--color-warning` / `--color-warning-light` / `--color-warning-dark`
- `--color-error` / `--color-error-light` / `--color-error-dark`
- `--color-info` / `--color-info-light` / `--color-info-dark`

#### Background & Surface
- `--color-background` (#00263e) - Main background
- `--color-background-light` / `--color-background-dark`
- `--color-surface` - Card/container backgrounds
- `--color-surface-light` / `--color-surface-dark`

#### Text Colors
- `--color-text-primary` - Main text color
- `--color-text-secondary` - Secondary text
- `--color-text-muted` - Muted/disabled text
- `--color-text-disabled` - Disabled text

#### Border Colors
- `--color-border` - Default borders
- `--color-border-light` - Lighter borders
- `--color-border-focus` - Focus states

### Spacing
- `--spacing-xs` (4px)
- `--spacing-sm` (8px)
- `--spacing-md` (16px)
- `--spacing-lg` (24px)
- `--spacing-xl` (32px)
- `--spacing-2xl` (48px)
- `--spacing-3xl` (64px)

### Border Radius
- `--radius-sm` (4px)
- `--radius-md` (6px)
- `--radius-lg` (8px)
- `--radius-xl` (12px)
- `--radius-2xl` (16px)
- `--radius-full` (9999px)

### Shadows
- `--shadow-sm` - Small shadow
- `--shadow-md` - Medium shadow
- `--shadow-lg` - Large shadow
- `--shadow-xl` - Extra large shadow

### Animation Durations
- `--duration-fast` (150ms)
- `--duration-normal` (300ms)
- `--duration-slow` (500ms)

### Z-Index Scale
- `--z-dropdown` (1000)
- `--z-modal` (1050)
- `--z-popover` (1100)
- `--z-tooltip` (1150)
- `--z-toast` (1200)

## 🚀 Usage Methods

### Method 1: Direct CSS Variables in Tailwind Classes
```jsx
<div className="bg-[var(--color-primary)] text-white p-[var(--spacing-lg)] rounded-[var(--radius-md)]">
  Primary colored box
</div>
```

### Method 2: Using the Theme Helper (TypeScript)
```jsx
import { theme, cssVars } from './theme';

// With inline styles
<div style={{
  backgroundColor: cssVars.colorPrimary,
  padding: cssVars.spacingLg,
  borderRadius: cssVars.radiusMd
}}>
  Styled with theme helpers
</div>
```

### Method 3: Custom CSS Classes
```css
.my-button {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--duration-normal);
}

.my-button:hover {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
}
```

## 🎯 Benefits

1. **Consistency**: All components use the same color palette and spacing
2. **Maintainability**: Change variables in one place to update the entire theme
3. **Type Safety**: TypeScript helpers provide autocomplete and type checking
4. **Performance**: CSS variables are computed at runtime and very efficient
5. **Dark Mode Ready**: Easy to implement theme switching by updating CSS variables

## 🔧 Customization

To customize the theme, edit the variables in `app/app.css`:

```css
@theme {
  --color-primary: #your-color;
  --spacing-lg: 2rem;
  /* Add or modify variables */
}
```

## 📝 Best Practices

1. **Prefer CSS variables over hardcoded values** for consistency
2. **Use semantic color names** (primary, success, error) rather than specific colors
3. **Maintain the spacing scale** - use predefined spacing variables
4. **Group related styles** using the same variable categories
5. **Test color contrast** to ensure accessibility

## 🌙 Dark Mode Implementation

To add dark mode support, you can conditionally apply different CSS variable values:

```css
@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #0a0a0a;
    --color-text-primary: #ffffff;
    /* Override other variables for dark mode */
  }
}
```

Or use a class-based approach:

```css
.dark {
  --color-background: #0a0a0a;
  --color-text-primary: #ffffff;
}
```
