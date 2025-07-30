# Banner Component

A reusable banner component with parallax effects, responsive design, and customizable gradient overlays.

## Features

- **Parallax Effect**: Background image moves as user scrolls
- **Responsive Design**: Adapts aspect ratio for different screen sizes
- **Gradient Overlay**: Optional customizable gradient overlay
- **Customizable Text**: Bold, uppercase text with text shadow
- **Secondary Text**: Optional subtitle with smaller, readable font
- **CSS Custom Properties**: Support for CSS variables in gradients
- **Performance Optimized**: Uses `will-change` and smooth transitions

## Props

| Prop                | Type    | Default                                | Description                      |
| ------------------- | ------- | -------------------------------------- | -------------------------------- |
| `imageSrc`          | string  | required                               | Path to the background image     |
| `text`              | string  | required                               | Text to display on the banner    |
| `secondaryText`     | string  | optional                               | Subtitle text below main text    |
| `gradient`          | boolean | false                                  | Whether to show gradient overlay |
| `gradientDirection` | string  | "to bottom"                            | CSS gradient direction           |
| `gradientColors`    | array   | ["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"] | Array of gradient colors         |
| `className`         | string  | ""                                     | Additional CSS classes           |

## Responsive Behavior

- **Desktop (>1200px)**: 21:9 aspect ratio
- **Large screens (768-1200px)**: 16:9 aspect ratio
- **Tablet (480-768px)**: 4:3 aspect ratio
- **Mobile (<480px)**: 3:4 aspect ratio (taller)

## Usage Examples

### Basic Banner

```jsx
<Banner imageSrc="/path/to/image.jpg" text="TRANSFORM YOUR BODY, ELEVATE YOUR LIFE" />
```

### Banner with Secondary Text

```jsx
<Banner
  imageSrc="/path/to/image.jpg"
  text="BUILT FOR GLORY — BORN TO MOVE"
  secondaryText="Join our community and discover your true potential"
  gradient={true}
  gradientDirection="to bottom"
  gradientColors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]}
/>
```

### Banner with CSS Custom Property Gradient

```jsx
<Banner
  imageSrc="/path/to/image.jpg"
  text="DISCOVER STRENGTH AND VERSATILITY"
  secondaryText="Elevate your fitness journey with top-notch equipment and expert guidance"
  gradient={true}
  gradientDirection="to bottom"
  gradientColors={["transparent", "var(--bg-color)"]}
/>
```

### Custom Gradient Direction

```jsx
<Banner
  imageSrc="/path/to/image.jpg"
  text="YOUR FITNESS JOURNEY STARTS HERE!"
  secondaryText="Experience the difference with our expert coaches"
  gradient={true}
  gradientDirection="45deg"
  gradientColors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.9)"]}
/>
```

## Gradient Direction Options

- `"to bottom"` - Top to bottom
- `"to top"` - Bottom to top
- `"to right"` - Left to right
- `"to left"` - Right to left
- `"45deg"` - Diagonal
- `"135deg"` - Diagonal (opposite)
- Any valid CSS gradient direction

## CSS Custom Properties

The component supports CSS custom properties in gradient colors:

- `"var(--bg-color)"` - Uses the current background color
- `"var(--primary)"` - Uses the primary color
- Any other CSS custom property

## Styling

The component uses CSS modules and follows the project's design system:

- **Main Text**: Font weight: 700 (bold), uppercase, white with text shadow
- **Secondary Text**: Font weight: 400, smaller size, white with lighter text shadow
- **Text Transform**: Uppercase for main text, normal case for secondary text
- **Letter Spacing**: 0.05em for main text
- **Responsive Font Sizing**: Scales appropriately for all screen sizes
