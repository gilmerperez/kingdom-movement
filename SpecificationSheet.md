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

- **Header:**

  - Logo, Navigation, CTA Button

  - **Footer:**

  - Logo, legal text, copyright, legal pages, social links, site navigation, contact info

- **Home Page:**

- MORE THAN A GYM — IT'S A MOVEMENT

- Overview of memberships, kitchen menu, schedules, collaborations, CTAs linking to dedicated pages.

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

- Skinny banner with cool black and white picture (Component)
  BUILT FOR GLORY — BORN TO MOVE
  Cool animation as you scroll up and down?

- **Pricing Page:**

- Lists different membership tiers with benefits.
- For each membership I will need:
  ID
  Name
  Price
  Features/Benefits:
  Access to what classes?
  Guest passes?
  Description?
  Additional Info

- **Individual Pricing (Membership) Page:**

- Link to sign up
- What extra details can we show here that are not on the main Pricing Page?
- Click into a membership for more details.
- A big motivational picture at the top that fades to be more dark at the bottom then shows the details.

- **Nutrition Page:**

- Full menu with details.
- Categories for:
  Protein Shakes
  Teas
  Waffles
  Acai Bowls
- Any promotions that you would like to advertise right away at the top/bottom of the page?
- For each menu item I will need:
  ID (for me)
  Name
  Price
  Calorie count
  Description (I can make unless you want to use something specific)
  Variations/Toppings with calorie count (if any)
  Picture (if not I will get one from the internet)

- **Schedule Page:**

- CSS Grid Format.
- Table that has a bar at the top with all 7 days of the week. When you click each day the table updates to show all available training times: Including scheduled classes and open gym sessions.
- Link to Wodify to view workouts and to see who’s attending (if possible).
- Banner at the top will say:
  "Discover strength and versatility at our functional fitness center,
  featuring open gym slots. Elevate your fitness journey with top-
  notch equipment and expert guidance in a supportive environment."

- **Contact Page:**

- Form to reach out.
- Includes subject and message field.
- Includes CAPTCHA for spam prevention.

- **Privacy Policy:**

  - Standard legal page.

  **Terms of Service:**

  - Standard legal page.

## Interactions & UI Components

- Responsive navigation bar.
- Hover/active/disabled button states.
- Modal or toast feedback on contact form submission.

## Data Flow & Architecture

- JSON files hold structured data (menu items, schedules, memberships).
- React components load this data client-side to render views.
- No database or backend logic beyond reading local JSON.
- Global state managed in React (useState or useContext as needed).

## API Endpoints

- **None.**
  All data is local via static JSON. No server-side API, no REST or GraphQL.

## Database Schema

- **Not applicable.**  
  Using JSON to mimic a simple data layer. Example:

```json
{
  "memberships": [
    {
      "id": "basic",
      "name": "Basic Membership",
      "price": 50,
      "benefits": ["Access to AM classes", "2 guest passes per month"]
    }
  ],
  "menu": [
    {
      "id": "acai",
      "name": "Acai Bowl",
      "price": 8.99,
      "calories": 350,
      "variations": ["Granola", "Peanut Butter", "Banana"]
    }
  ]
}
```

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

## Important Links

- Instagram: https://www.instagram.com/kngdm.mvmnt/
- Facebook: https://www.facebook.com/profile.php?id=61573390319325
- Free Class: https://rangerschamps.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26ProgramId%3D0%26LocationId%3D10458%26IsToViewScheduleOnly%3DTrue
- Location: https://www.google.com/maps/place/Rangers+Kingdom+LLC/@28.4598745,-81.4403449,17z/data=!4m6!3m5!1s0x88dd87daa64f54c7:0xb0e764b4072e95b9!8m2!3d28.4598745!4d-81.43777!16s%2Fg%2F11rdz8gr7f?authuser=1&entry=tts&g_ep=EgoyMDI1MDIxMC4wIPu8ASoASAFQAw%3D%3D
- Leave a Review: https://www.google.com/maps/place//data=!4m3!3m2!1s0x88dd87daa64f54c7:0xb0e764b4072e95b9!12e1?source=g.page.m._&laa=merchant-review-solicitation

## Websites For Inspiration

- https://dejavugym.com/
- https://fyfitnessclub.com/
- https://crossfitorlando.com/

## Additional Pages

- Include all other services that the place offers: Esthetiticain services, nails, physical therapy

- Make a component for a wide picture with text in the middle of it. It should also have a paralax effect, as the user scrolls down the image scrolls as well. The component should only accept a link to an image and text

- Pictures to use: https://drive.google.com/drive/folders/1wpll5IUQskO0xUr02mze-aSspKVztm3P
