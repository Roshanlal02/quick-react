// Theme variables for type safety and autocomplete
export const theme = {
  // Colors
  colors: {
    primary: 'var(--primary)',
    secondaryBg: 'var(--secondaryBg)',
    secondary1: 'var(--secondary1)',
    secondary2: 'var(--secondary2)',
    secondary3: 'var(--secondary3)',
    LGery: 'var(--LGery)',
    Dblack: 'var(--Dblack)',
    black: 'var(--black)',
    grey: 'var(--grey)',
    white: 'var(--white)',
  },

  // Fonts
  fonts: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },

  // Spacing
  spacing: {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    '2xl': 'var(--spacing-2xl)',
    '3xl': 'var(--spacing-3xl)',
  },

  // Border radius
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    full: 'var(--radius-full)',
  },

  // Shadows
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },

  // Animation durations
  duration: {
    fast: 'var(--duration-fast)',
    normal: 'var(--duration-normal)',
    slow: 'var(--duration-slow)',
  },

  // Z-index
  zIndex: {
    dropdown: 'var(--z-dropdown)',
    modal: 'var(--z-modal)',
    popover: 'var(--z-popover)',
    tooltip: 'var(--z-tooltip)',
    toast: 'var(--z-toast)',
  },
} as const;

// Helper function to get theme values
export const getThemeValue = (path: string): string => {
  return `var(--${path})`;
};

// CSS custom properties for inline styles
export const cssVars = {
  // Example usage: style={{ color: cssVars.primary }}
  primary: 'var(--primary)',
  secondaryBg: 'var(--secondaryBg)',
  secondary1: 'var(--secondary1)',
  secondary2: 'var(--secondary2)',
  secondary3: 'var(--secondary3)',
  LGery: 'var(--LGery)',
  Dblack: 'var(--Dblack)',
  black: 'var(--black)',
  grey: 'var(--grey)',
  white: 'var(--white)',
  spacingXs: 'var(--spacing-xs)',
  spacingSm: 'var(--spacing-sm)',
  spacingMd: 'var(--spacing-md)',
  spacingLg: 'var(--spacing-lg)',
  spacingXl: 'var(--spacing-xl)',
  radiusSm: 'var(--radius-sm)',
  radiusMd: 'var(--radius-md)',
  radiusLg: 'var(--radius-lg)',
  shadowSm: 'var(--shadow-sm)',
  shadowMd: 'var(--shadow-md)',
  shadowLg: 'var(--shadow-lg)',
} as const;

// Type definitions for better autocomplete
export type ThemeColor = keyof typeof theme.colors;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeRadius = keyof typeof theme.radius;
export type ThemeShadow = keyof typeof theme.shadows;
export type ThemeDuration = keyof typeof theme.duration;
export type ThemeZIndex = keyof typeof theme.zIndex;
