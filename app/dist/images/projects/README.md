# Project Images

This folder contains your project screenshots for the portfolio.

## Current Images (Placeholder)

| File | Project | Description |
|------|---------|-------------|
| `project-1-qsr.jpg` | A1 QSR Billing System | QSR dashboard with order management |
| `project-2-pos.jpg` | A1 POS System | Retail POS interface |
| `project-3-mortgage.jpg` | A1 Mortgage Management | Financial dashboard with loan records |
| `project-4-android.jpg` | Android Order Application | Mobile app mockup |

## How to Replace with Your Actual Screenshots

### Option 1: Direct File Replacement
1. Take screenshots of your actual projects
2. Name them exactly as above (or update the paths in `FeaturedProjectSection.tsx`)
3. Replace the files in this folder
4. Rebuild and redeploy

### Option 2: Update Image Paths
Edit `src/sections/FeaturedProjectSection.tsx` and change the `image` paths:

```typescript
const projects = [
  {
    label: 'QSR Billing System',
    title: 'A1 QSR Billing System',
    description: '...',
    tech: 'PHP CodeIgniter · MySQL · MVC · Bootstrap',
    image: '/images/projects/YOUR-SCREENSHOT-NAME.png', // <-- Update this
  },
  // ... other projects
];
```

## Screenshot Guidelines

- **Resolution**: 1920x1080 or higher (16:9 ratio)
- **Format**: JPG or PNG
- **Style**: Dark theme preferred to match portfolio aesthetic
- **Content**: Show the main dashboard/interface of each project

## Recommended Screenshot Tools

- Windows: Snipping Tool, ShareX
- Mac: Cmd+Shift+5 (Screenshot app)
- Linux: Flameshot, Shutter
- Browser: Chrome DevTools (Ctrl+Shift+P → "Capture full size screenshot")
