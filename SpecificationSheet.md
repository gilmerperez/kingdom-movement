# Kingdom Movement / KNGDM MVMNT

## Project Overview

**Purpose & Goals:**

Develop a modern, responsive website for **KNGDM MVMNT**, a growing CrossFit gym and community brand. The site will serve as a digital hub showcasing memberships, class schedules, nutrition services, events, and collaborations, aiming to attract new members and keep current members engaged.

**Target Users:**

- Local individuals interested in CrossFit, community events, nutrition, and fitness.
- Existing gym members looking to view schedules, menu items, and upcoming activities.
- Prospective members evaluating the gym’s offerings.

**Desired User Experience & Outcome:**

- Easily explore gym services, memberships, schedules, and nutrition offerings.
- Seamlessly navigate on desktop, tablet, and mobile devices.
- Engage visually with high-energy branding that matches the gym’s culture.
- Quickly find calls to action for inquiries, sign-ups, or visits.

**Core Problem Solved:**

- Provide a centralized, attractive, informative online presence for KNGDM MVMNT that replaces manual explanations, drives memberships, and fosters community engagement.

## Technical Stack

- **APIs:**

  - None (static JSON files for data)

- **Deployment:**

  - Render with custom domain

- **Frontend:**

  - HTML, CSS, JavaScript, React
  - No/Minimal Bootstrap/Tailwind
  - Custom CSS using Grid & Flexbox

- **Dev Tools:**

  - Vite for scaffolding and development
  - ESLint & Prettier for code consistency

- **Backend:**

  - None (JSON files to store data like schedules, menu items, membership tiers)

- **Authentication:**

  - None

- **Security:**

  - Basic HTTPS via hosting
  - Contact form will include CAPTCHA

- **Database:**

  - None (JSON serves as simple data layer)

## UI/UX Design Guidelines

### Layout & Responsiveness

- CSS Grid and Flexbox
- Three key breakpoints:
  - **480px:** Mobile
  - **768px:** Tablet
  - **1200px:** Desktop

### Typography

- **Font Family:** Sans-serif for both headings and body
- **Font Weights:**
  - Body: 400
  - Highlighted / Bold Text: 500
  - Headings / Critical Highlights: 700
- **Font Styling:** Headings large and bold, possible texture or distressed effect.

### Colors

- Light Mode

```css
html[data-theme="light"] {
  --header-bg-color: hsl(0, 0%, 97.25%);
  --bg-color: hsl(0, 0%, 95%);
  --text-primary: hsl(0, 0%, 10%);
  --text-secondary: hsl(0, 0%, 20%);
  --primary: hsl(0, 100%, 25%);
  --footer-bg-color: hsl(0, 0%, 97.25%);
}
```

- Dark Mode

```css
html[data-theme="dark"] {
  --header-bg-color: hsl(0, 0%, 5%);
  --bg-color: hsl(0, 0%, 10%);
  --text-primary: hsl(0, 0%, 100%);
  --text-secondary: hsl(0, 0%, 80%);
  --primary: hsl(0, 100%, 25%);
  --footer-bg-color: hsl(0, 0%, 5%);
}
```

- Light / Dark Mode Toggle

### Images & Icons

- Formats: JPEG, PNG, SVG, WebP
- Accessibility: All images will include `alt` tags
- Optimized/compressed with TinyPNG, ImageOptim, or Squoosh.

### Text Content

- Tone: Bold, energetic, modern, slightly edgy to fit CrossFit and lifestyle brand

## User Roles & Permissions

- **Visitor:** Can view all pages, explore memberships, menu, schedules, events, and submit contact form.
- No user accounts or authentication required.
- No admin dashboard on this site.

## Core Features & User Flows

### Pages & Content

- **Home Page:**

- **Taglines**

1. BUILT FOR GLORY — BORN TO MOVE
2. MOVE WITH PURPOSE. TRAIN HARD. LIVE BOLD.
3. STRENGTH. SPIRIT. KINGDOM
4. MORE THAN FITNESS — IT'S A MOVEMENT
5. BUILT FOR GLORY — BORN TO MOVE

- **WHO WE ARE**
  We are dedicated in igniting a global movement of empowered
  individuals who train with purpose, live with passion,
  and move like champions-inside and out. We
  transform lives through fitness, community, and
  relentless spirit.

- **OUR MISSION**
  To become a leading global CrossFit and lifestyle
  brand known for building champions and inspiring
  purpose-driven transformation in every life we
  touch.

- **Core Values**

1. Faith-Fueled Purpose - Every movement has
   meaning. We train with deeper purpose, for more
   than just physical gains.
2. Excellence & Discipline - We don't do average.
   5/5 every week-relentless effort is our standard.
3. Community & Brotherhood/Sisterhood - We lift
   together. Support is strength.
4. Transformation - Bodies, minds, and lives. We
   change lives through challenge and consistency.
5. Champion Mindset - Every person is trained to
   rise-mentally, physically, spiritually.
6. Freedom Through Fitness - We believe
   movement unlocks potential and purpose.
7. Spirit Over Hype - We're not just loud - we're on
   fire with intention and heart.

- **Content Pillars**

1. Training & WODs - Show your 5/5 commitment;
   share intensity + technique.
2. Champion Stories - Testimonies of body + life
   transformation.
3. Events & Competitions - Capture the heart and
   hustle of your crew.
4. Mindset & Motivation - Share what fuels the
   grind spiritually and mentally.
5. Lifestyle & Culture - Style, community hangs,
   behind the scenes, prayer, fun.

- **Brand Personality**

1. Bold - We go hard. Always.
2. Purpose Driven - Every session, event, and rep
   has meaning.
3. Gritty & Raw - Authentic, no-fluff dedication.
4. Inspirational - We bring energy and belief
   wherever we go.
5. Spiritual - There's a deeper strength behind what
   we do.

- **Brand Voice**
  When you write, speak, post or create, make sure it
  sounds:

1. Motivating - "You were made for more."
2. Unapologetic - "We don't skip reps. We don't skip
   spirit."
3. Raw & Real - "Transformation hurts. That's why it
   works."
4. Uplifting - "You're not alone in this. You've got a
   team. A movement."
5. High-Energy - "Let's ar KNGDM family!

- Overview of nutrition menu, class schedule, membership tiers, collaborations, CTAs linking to dedicated pages.

- WHO WE ARE (Component)
  Description that talks about how KNGDM MVMNT isn't just a gym, it's a community where people can come and get trained by certified and high level coaches whose only motive is to make you the best athlete possible. Talk about access to our amenities, like a state of the art training library; journal, planner and daily workout tracker that does everything from recording your workout results to helping you keep track of your nutrition. First side by side, on smaller screens they stack

- WHY CHOOSE US (Component)
  Picture with dark and blurred as background
  Each card is a reason why to join us, it shows a heading, then quick text description
  Why crossfit
  Elite level coaches
  Personal training
  Nutrition services
  Weightlifting and open gym
  Fun environment

- **Individual Membership Page:**

- Click into a specific membership for more details.
- Link to sign up through Wodify.
- What extra details can we show here that are not on the main Membership Page?

- **Nutrition Page:**

- Any promotions that you would like to advertise right away at the top or bottom of the page?

- **Schedule Page:**

- Link to Wodify to view workouts and to see who’s attending (if possible).

- **Contact Page:**

- Includes CAPTCHA for spam prevention.

## Interactions & UI Components

- Responsive navigation bar.
- Hover/active/disabled button states.
- Modal or toast feedback on contact form submission.

## Data Flow & Architecture

- JSON files hold structured data (menu items, schedules, memberships).
- React components load this data client-side to render views.
- No database or backend logic beyond reading local JSON.
- Global state managed in React (useState or useContext as needed).

## Basic Website Security Checklist

- CAPTCHA: On contact form to block spam.
- HTTPS: Enforced via Render.
- .env: Will be ignored in git even if minimal use.
- Inputs: Minimal inputs, but validate/sanitize if needed.
- No credentials: No passwords, no stored sensitive data.

## Deployment & CI/CD

- Hosting: Render
- Domain: Purchased and configured when ready.
- CI/CD: Manual deploy pipeline for now (no GitHub Actions or Cypress tests at this stage).

## Testing Strategy

- None initially.
- Focus is on rapid delivery. May add lightweight unit tests with Vitest/Jest later.

## Missing or TBD

- Exact fonts & text styles: Will choose with client.
- Color palette: Dark/light theme colors to be selected.
- Imagery: Brand photos, logos, textures to integrate.
- Content copy: Collaborating with client to finalize all page text.
- Detailed feature expansion: e.g., if future scheduling tools or online payments are needed.

## Websites For Inspiration

- https://dejavugym.com/
- https://fyfitnessclub.com/
- https://crossfitorlando.com/

## Additional Pages

- Include all other services that the place offers: Esthetiticain services, nails, physical therapy

- Pictures to use: https://drive.google.com/drive/folders/1wpll5IUQskO0xUr02mze-aSspKVztm3P
