# CSS Lesson: Styling Your Web Pages

## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and visual appearance of documents written in HTML. While HTML provides the structure and content of a web page, CSS controls how that content looks on screen.

### The Three Core Web Technologies

As mentioned in our HTML lesson, modern web development relies on three technologies working together:

1. **HTML** - Structure and content (the skeleton)
2. **CSS** - Appearance and presentation (the skin and clothing)
3. **JavaScript** - Functionality and behavior (the muscles and brain)

## Why CSS Matters

Without CSS, every website would look like a plain text document. CSS allows you to:

- Control colors, fonts, and spacing
- Create layouts and position elements
- Style images and media
- Add animations and transitions
- Make websites responsive to different screen sizes
- Improve user experience and accessibility

## The Three Ways to Use CSS

### 1. Inline CSS ❌

Applies styles directly to HTML elements using the `style` attribute.

```html
<h1 style="color: blue; font-size: 24px;">Welcome</h1>
```

**Pros**: Quick for testing  
**Cons**: Hard to maintain, mixes content with presentation, not reusable  
**When to use**: Only for quick tests or email templates

---

### 2. Internal CSS ⚠️

Placed within a `<style>` tag in the `<head>` section.

```html
<head>
  <style>
    h1 {
      color: blue;
    }
    p {
      line-height: 1.6;
    }
  </style>
</head>
```

**Pros**: All styles in one place, can use all CSS features  
**Cons**: Not reusable across pages, increases HTML file size  
**When to use**: Single-page sites or page-specific styles

---

### 3. External CSS ✅ (Best Practice)

Written in separate `.css` files and linked to HTML.

**styles.css**:

```css
h1 {
  color: blue;
}
p {
  line-height: 1.6;
}
```

**index.html**:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

**Pros**: Reusable, cacheable, clean HTML, easy to maintain  
**Cons**: Requires separate file  
**When to use**: Always! This is the industry standard

### Comparison

| Feature         | Inline  | Internal       | External       |
| --------------- | ------- | -------------- | -------------- |
| Reusability     | ❌      | ⚠️ Single page | ✅ Entire site |
| Maintainability | ❌      | ⚠️             | ✅             |
| Performance     | ⚠️      | ⚠️             | ✅ Cacheable   |
| Best for        | Testing | Single pages   | Production     |

**Recommendation**: Always use external CSS for production websites.

## CSS Syntax

```css
selector {
  property: value;
  property: value;
}
```

**Example**:

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

## CSS Selectors

### Basic Selectors

```css
/* Element selector */
p {
  color: gray;
}

/* Class selector (reusable) */
.highlight {
  background-color: yellow;
}

/* ID selector (unique) */
#header {
  background-color: navy;
}

/* Universal selector */
* {
  margin: 0;
  padding: 0;
}
```

### Combinator Selectors

```css
/* Descendant - elements inside */
article p {
  line-height: 1.8;
}

/* Child - direct children only */
nav > ul {
  list-style: none;
}

/* Multiple selectors */
h1,
h2,
h3 {
  font-family: Georgia, serif;
}
```

### Pseudo-classes

```css
a:hover {
  color: red;
}
a:visited {
  color: purple;
}
input:focus {
  border-color: blue;
}
li:first-child {
  font-weight: bold;
}
```

## Styling the News Site from HTML Lesson

Now let's style the complete news site (Version 5) from our HTML lesson. We'll do this progressively, adding more CSS features with each version.

**The HTML Structure We're Styling**:

- Site header with "Tech News Daily" and navigation
- Main content with featured article about AI
- Related stories section
- Sidebar with trending topics and newsletter form
- Site footer with contact information

### Version 1: Basic Text Styling

Let's start with typography and colors:

**tech-news.css**:

```css
/* ===== RESET ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== BASE STYLES ===== */
body {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

/* ===== TYPOGRAPHY ===== */
h1 {
  font-size: 48px;
  color: #1a1a1a;
}

h2 {
  font-size: 36px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

p {
  margin-bottom: 15px;
}

/* ===== LINKS ===== */
a {
  color: #c00;
  text-decoration: none;
}

a:hover {
  color: #900;
  text-decoration: underline;
}
```

**What we learned**:

- `font-family` - Typeface
- `font-size` - Text size
- `line-height` - Space between lines
- `color` - Text color
- `background-color` - Background
- `margin` - Space outside elements
- `:hover` - Mouse over effect

---

### Version 2: The Box Model

Understanding spacing with padding, margin, and borders:

```css
/* Add to previous styles */

/* ===== SITE HEADER ===== */
header {
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  margin-bottom: 30px;
}

/* ===== MAIN CONTENT ===== */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* ===== ARTICLES ===== */
article {
  background-color: white;
  padding: 30px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-left: 4px solid #c00;
}

/* ===== LISTS ===== */
ul {
  margin: 15px 0;
  padding-left: 40px;
}

li {
  margin-bottom: 8px;
}

/* ===== FOOTER ===== */
footer {
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
}
```

**The Box Model**:

Every element is a rectangular box with:

1. **Content** - The actual content
2. **Padding** - Space inside the border
3. **Border** - Line around padding
4. **Margin** - Space outside the border

```
┌─────────────────────────────┐
│        Margin               │
│  ┌──────────────────────┐   │
│  │     Border           │   │
│  │  ┌───────────────┐   │   │
│  │  │   Padding     │   │   │
│  │  │  ┌────────┐   │   │   │
│  │  │  │Content │   │   │   │
│  │  │  └────────┘   │   │   │
│  │  └───────────────┘   │   │
│  └──────────────────────┘   │
└─────────────────────────────┘
```

**box-sizing**:

```css
* {
  box-sizing: border-box; /* Includes padding/border in width */
}
```

---

### Version 3: Positioning Elements

Learn how to position elements precisely:

```css
/* Add to previous styles */

/* ===== STICKY HEADER ===== */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
}

/* ===== SIDEBAR ===== */
aside {
  position: sticky;
  top: 120px;
  height: fit-content;
}

/* ===== ARTICLE SECTIONS ===== */
article section {
  position: relative;
  margin: 20px 0;
}
```

**CSS Position Values**:

1. **static** (default) - Normal flow
2. **relative** - Positioned relative to normal position
3. **absolute** - Positioned relative to nearest positioned ancestor
4. **fixed** - Positioned relative to viewport (stays on scroll)
5. **sticky** - Switches between relative and fixed

**Examples**:

```css
/* Relative - moves from normal position */
.box {
  position: relative;
  top: 20px;
  left: 30px;
}

/* Absolute - positioned relative to parent */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed - stays in viewport */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Sticky - sticks when scrolling */
.sidebar {
  position: sticky;
  top: 20px;
}
```

**Z-index** - Controls stacking order (higher = on top):

```css
.layer1 {
  z-index: 1;
}
.layer2 {
  z-index: 2;
}
.layer3 {
  z-index: 3;
}
```

---

### Version 4: Styling Images

Make images responsive and attractive:

```css
/* Add to previous styles */

/* ===== IMAGES ===== */
figure {
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

figcaption {
  font-size: 14px;
  font-style: italic;
  color: #666;
  margin-top: 8px;
  padding: 10px;
  background-color: #f5f5f5;
}

/* Image hover effect */
figure img {
  transition: transform 0.3s ease;
}

figure:hover img {
  transform: scale(1.05);
}
```

**Image Properties**:

```css
/* Responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* Object-fit for aspect ratio */
img {
  width: 300px;
  height: 200px;
  object-fit: cover; /* cover, contain, fill */
}

/* Background images */
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}

/* Image filters */
img {
  filter: grayscale(50%);
  filter: blur(2px);
  filter: brightness(1.2);
}
```

---

### Version 5: Flexbox Layout

Create flexible layouts for navigation and content:

```css
/* Add to previous styles */

/* ===== NAVIGATION WITH FLEXBOX ===== */
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
  flex-wrap: wrap;
}

/* ===== ARTICLE HEADER ===== */
article header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

/* ===== RELATED ARTICLES ===== */
.related-articles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.related-articles article {
  flex: 1 1 300px;
}
```

**Flexbox Properties**:

**Container**:

```css
.container {
  display: flex;

  /* Direction */
  flex-direction: row; /* row, column, row-reverse, column-reverse */

  /* Wrapping */
  flex-wrap: wrap; /* nowrap, wrap */

  /* Main axis alignment */
  justify-content: center; /* flex-start, flex-end, center, space-between, space-around */

  /* Cross axis alignment */
  align-items: center; /* flex-start, flex-end, center, stretch */

  /* Gap */
  gap: 20px;
}
```

**Items**:

```css
.item {
  flex-grow: 1; /* Grow factor */
  flex-shrink: 1; /* Shrink factor */
  flex-basis: 200px; /* Base size */

  /* Shorthand */
  flex: 1 1 200px; /* grow shrink basis */
}
```

---

### Version 6: CSS Grid Layout

Create two-dimensional layouts:

```css
/* Add to previous styles */

/* ===== PAGE LAYOUT WITH GRID ===== */
body {
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

footer {
  grid-area: footer;
}

/* ===== RELATED STORIES GRID ===== */
.related-stories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

**CSS Grid Properties**:

**Container**:

```css
.grid {
  display: grid;

  /* Define columns */
  grid-template-columns: 200px 1fr 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  /* Define rows */
  grid-template-rows: 100px auto 100px;

  /* Gap */
  gap: 20px;

  /* Named areas */
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
}
```

**Items**:

```css
.item {
  /* Span columns */
  grid-column: 1 / 3;
  grid-column: span 2;

  /* Span rows */
  grid-row: 1 / 3;

  /* Named area */
  grid-area: header;
}
```

---

### Version 7: Complete Styled News Site

The final, polished version with all features:

**tech-news-complete.css**:

```css
/* ===== RESET ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== BASE STYLES ===== */
body {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* ===== SITE HEADER ===== */
body > header {
  grid-area: header;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
  border-bottom: 3px solid #c00;
  position: sticky;
  top: 0;
  z-index: 100;
}

body > header h1 {
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 5px;
  color: white;
}

body > header > p {
  font-size: 14px;
  font-style: italic;
  color: #ccc;
  margin-bottom: 20px;
}

/* ===== NAVIGATION ===== */
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  transition: color 0.3s;
  padding: 5px 10px;
}

nav a:hover {
  color: #c00;
}

/* ===== MAIN CONTENT ===== */
main {
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  padding: 0 20px;
}

/* ===== FEATURED ARTICLE ===== */
main > article {
  background-color: white;
  padding: 30px;
  border-left: 4px solid #c00;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

article header h2 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #1a1a1a;
}

article header p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

article header span {
  font-weight: bold;
  color: #c00;
}

/* ===== IMAGES ===== */
figure {
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

figure img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

figure:hover img {
  transform: scale(1.05);
}

figcaption {
  font-size: 14px;
  font-style: italic;
  color: #666;
  margin-top: 8px;
  padding: 10px;
  background-color: #f5f5f5;
  text-align: center;
}

/* ===== ARTICLE SECTIONS ===== */
article section {
  margin: 30px 0;
}

article section h3 {
  font-size: 24px;
  border-bottom: 2px solid #c00;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

/* ===== LISTS ===== */
ul {
  margin: 15px 0;
  padding-left: 40px;
}

li {
  margin-bottom: 8px;
}

/* ===== ARTICLE FOOTER ===== */
article footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

article footer a {
  color: #c00;
  text-decoration: none;
  transition: color 0.3s;
}

article footer a:hover {
  color: #900;
  text-decoration: underline;
}

/* ===== RELATED STORIES ===== */
main > section {
  grid-column: 1 / -1;
}

main > section h2 {
  font-size: 28px;
  border-bottom: 2px solid #c00;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

main > section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

main > section > article {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

main > section > article:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

main > section > article h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

main > section > article h3 a {
  color: #1a1a1a;
  text-decoration: none;
}

main > section > article h3 a:hover {
  color: #c00;
}

main > section > article time {
  font-size: 13px;
  color: #999;
}

/* ===== SIDEBAR ===== */
aside {
  position: sticky;
  top: 120px;
  height: fit-content;
}

aside section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

aside section h2 {
  font-size: 20px;
  margin-bottom: 15px;
  border-bottom: 2px solid #c00;
  padding-bottom: 5px;
}

aside ul {
  list-style: none;
  padding-left: 0;
}

aside li {
  margin-bottom: 10px;
}

aside a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

aside a:hover {
  color: #c00;
}

/* ===== FORM STYLING ===== */
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: 500;
  color: #555;
}

input[type='email'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

input[type='email']:focus {
  outline: none;
  border-color: #c00;
  box-shadow: 0 0 5px rgba(204, 0, 0, 0.3);
}

button[type='submit'] {
  background-color: #c00;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type='submit']:hover {
  background-color: #900;
}

/* ===== SITE FOOTER ===== */
body > footer {
  grid-area: footer;
  background-color: #1a1a1a;
  color: white;
  padding: 40px 20px;
  margin-top: 40px;
}

body > footer section {
  max-width: 1200px;
  margin: 0 auto 20px;
}

body > footer h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 18px;
}

body > footer a {
  color: #ccc;
  text-decoration: none;
}

body > footer a:hover {
  color: white;
}

body > footer > p {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #444;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  body > header h1 {
    font-size: 32px;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
  }

  main {
    grid-template-columns: 1fr;
  }

  main > article {
    padding: 20px;
  }

  article header h2 {
    font-size: 28px;
  }

  aside {
    position: static;
  }
}
```

**This complete CSS styles the exact HTML from Version 5 of the HTML lesson!**

## CSS Colors

Multiple ways to specify colors:

```css
/* Named colors */
color: red;
color: blue;

/* Hexadecimal */
color: #ff0000; /* Red */
color: #f00; /* Short form */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5); /* 50% transparent */

/* HSL (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);

/* HSLA (with transparency) */
color: hsla(0, 100%, 50%, 0.5);
```

## CSS Units

### Absolute Units

```css
px   /* Pixels - fixed size */
pt   /* Points - for print */
cm   /* Centimeters */
in   /* Inches */
```

### Relative Units

```css
em   /* Relative to parent font size */
rem  /* Relative to root font size */
%    /* Percentage of parent */
vw   /* Viewport width (1vw = 1% of viewport width) */
vh   /* Viewport height (1vh = 1% of viewport height) */
vmin /* Smaller of vw or vh */
vmax /* Larger of vw or vh */
```

**Best Practice**: Use `rem` for font sizes, `px` for borders, `%` or `vw/vh` for layouts.

## Display Property

```css
display: block; /* Takes full width, new line */
display: inline; /* Flows with text, no width/height */
display: inline-block; /* Flows with text, can have width/height */
display: none; /* Hides element completely */
display: flex; /* Flexible box layout */
display: grid; /* Grid layout */
```

## Visibility and Opacity

```css
/* Visibility - hides but keeps space */
visibility: hidden;
visibility: visible;

/* Opacity - transparency */
opacity: 0; /* Fully transparent */
opacity: 0.5; /* 50% transparent */
opacity: 1; /* Fully opaque */

/* Differences */
display: none; /* Removes from layout */
visibility: hidden; /* Keeps space, invisible */
opacity: 0; /* Keeps space, invisible, still clickable */
```

## Transitions

Smooth changes between states:

```css
/* Basic transition */
.button {
  background-color: blue;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: darkblue;
}

/* Multiple properties */
.card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Transition properties */
transition-property: all;
transition-duration: 0.3s;
transition-timing-function: ease; /* ease, linear, ease-in, ease-out */
transition-delay: 0.1s;
```

## Animations

Complex, repeating animations:

```css
/* Define animation */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Apply animation */
.animated-box {
  animation: slideIn 1s ease-out;
}

/* Multiple keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.pulsing {
  animation: pulse 2s infinite;
}
```

## Transform Property

Modify element appearance:

```css
/* Translate - move */
transform: translateX(50px);
transform: translateY(-20px);
transform: translate(50px, -20px);

/* Scale - resize */
transform: scale(1.5);
transform: scaleX(2);

/* Rotate - turn */
transform: rotate(45deg);
transform: rotate(-90deg);

/* Skew - slant */
transform: skewX(20deg);

/* Multiple transforms */
transform: translate(50px, 100px) rotate(45deg) scale(1.2);
```

## Shadows

### Box Shadow

```css
/* Syntax: x-offset y-offset blur spread color */
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);

/* Multiple shadows */
box-shadow:
  0 2px 5px rgba(0, 0, 0, 0.1),
  0 4px 10px rgba(0, 0, 0, 0.1);

/* Inset shadow */
box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
```

### Text Shadow

```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

/* Glow effect */
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
```

## Borders and Outlines

```css
/* Border */
border: 1px solid black;
border-width: 2px;
border-style: solid; /* solid, dashed, dotted, double */
border-color: red;

/* Individual sides */
border-top: 1px solid black;
border-right: 2px dashed blue;

/* Border radius - rounded corners */
border-radius: 5px;
border-radius: 50%; /* Circle */

/* Outline - doesn't affect layout */
outline: 2px solid blue;
outline-offset: 5px;
```

## Overflow

Control content that exceeds element size:

```css
overflow: visible; /* Default, shows outside */
overflow: hidden; /* Clips content */
overflow: scroll; /* Always shows scrollbars */
overflow: auto; /* Scrollbars only when needed */

/* Individual axes */
overflow-x: hidden;
overflow-y: auto;
```

## Responsive Design with Media Queries

Adapt styles to different screen sizes:

```css
/* Mobile first approach */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}

/* Large desktop */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
```

### Common Breakpoints

```css
/* Extra small (phones) */
@media (max-width: 575px) {
}

/* Small (tablets) */
@media (min-width: 576px) and (max-width: 767px) {
}

/* Medium (laptops) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Large (desktops) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Extra large */
@media (min-width: 1200px) {
}
```

## CSS Specificity

When multiple rules target the same element:

**Hierarchy** (lowest to highest):

1. Element selectors: `p`, `div`
2. Class selectors: `.class`
3. ID selectors: `#id`
4. Inline styles: `style="..."`
5. `!important` (avoid!)

**Examples**:

```css
p {
  color: red;
} /* Specificity: 0-0-1 */
.text {
  color: blue;
} /* Specificity: 0-1-0 */
p.text {
  color: green;
} /* Specificity: 0-1-1 */
#header {
  color: purple;
} /* Specificity: 1-0-0 */
#header p.text {
  color: orange;
} /* Specificity: 1-1-1 */
```

**Best practice**: Use classes, avoid IDs for styling, never use `!important`.

## CSS Variables

Reusable values:

```css
/* Define in :root */
:root {
  --primary-color: #c00;
  --secondary-color: #333;
  --font-main: Georgia, serif;
  --spacing: 20px;
}

/* Use variables */
.button {
  background-color: var(--primary-color);
  font-family: var(--font-main);
  padding: var(--spacing);
}

/* With fallback */
.text {
  color: var(--text-color, #333);
}
```

## Best Practices

1. **Use external CSS** - Separate styles from HTML
2. **Organize your code** - Group related styles, add comments
3. **Use meaningful names** - Describe purpose, not appearance
4. **Follow DRY principle** - Don't repeat yourself
5. **Mobile-first approach** - Start with mobile, enhance for desktop
6. **Use CSS variables** - For consistent theming
7. **Avoid !important** - Use proper specificity
8. **Use shorthand** - Write concise code
9. **Test across browsers** - Ensure compatibility
10. **Optimize performance** - Minimize CSS

## CSS Organization Structure

```css
/* 1. RESET/NORMALIZE */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 2. VARIABLES */
:root {
  --primary-color: #c00;
}

/* 3. BASE STYLES */
body {
  font-family: Georgia, serif;
}

/* 4. TYPOGRAPHY */
h1,
h2,
h3 {
}

/* 5. LAYOUT */
.container {
}

/* 6. COMPONENTS */
.button {
}
.card {
}

/* 7. UTILITIES */
.text-center {
}

/* 8. MEDIA QUERIES */
@media (max-width: 768px) {
}
```

## Common CSS Patterns

### Centering Elements

```css
/* Horizontal center - block */
.center-block {
  margin: 0 auto;
  width: 80%;
}

/* Text center */
.center-text {
  text-align: center;
}

/* Flexbox center */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid center */
.center-grid {
  display: grid;
  place-items: center;
}

/* Absolute center */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Truncate Text

```css
/* Single line */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multiple lines */
.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### Aspect Ratio Box

```css
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

.aspect-ratio-box > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## Debugging CSS

### Browser DevTools

1. **Inspect Element** - Right-click > Inspect
2. **View computed styles** - See final applied styles
3. **Toggle properties** - Check/uncheck to test
4. **Edit live** - Modify CSS in real-time
5. **Check box model** - View margins, padding, borders

### Common Issues

```css
/* Element not showing? */
/* Check: display, visibility, opacity, z-index */

/* Layout broken? */
/* Check: box-sizing, float, position, flexbox/grid */

/* Styles not applying? */
/* Check: specificity, typos, selector correctness */

/* Spacing problems? */
/* Check: margin collapse, box-sizing, padding vs margin */
```

## Key Takeaways

1. **External CSS is best** - Separate concerns, reusable, cacheable
2. **Box model is fundamental** - Content, padding, border, margin
3. **Flexbox for 1D layouts** - Rows or columns
4. **Grid for 2D layouts** - Rows and columns together
5. **Position for precise placement** - Relative, absolute, fixed, sticky
6. **Responsive design is essential** - Use media queries
7. **Transitions add polish** - Smooth state changes
8. **Specificity matters** - Understand selector weight
9. **Variables improve maintainability** - Consistent theming
10. **Practice makes perfect** - Build real projects

## Connecting HTML and CSS

Remember: The CSS in this lesson styles the exact HTML structure from Version 5 of the HTML lesson. To use it:

1. Save the HTML as `index.html`
2. Save the CSS as `tech-news-complete.css`
3. Link them: `<link rel="stylesheet" href="tech-news-complete.css">`
4. Open `index.html` in your browser

The plain HTML structure transforms into a beautiful, responsive news website!

---

## Citations and References

Content for this lesson was synthesized and paraphrased from the following sources:

1. **MDN Web Docs - CSS: Cascading Style Sheets**  
   [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)  
   Comprehensive reference documentation for CSS properties, selectors, and web styling concepts.

2. **W3Schools - CSS Tutorial**  
   [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)  
   Beginner-friendly tutorials with interactive examples and over 700 CSS examples.

_Note: Content was rephrased for compliance with licensing restrictions. All information has been paraphrased and summarized to provide educational value while respecting source material copyrights._
