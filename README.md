# Mahesh Gachale - Portfolio Website

Modern, responsive portfolio website showcasing QA & Automation expertise with animated UI elements.

## Features

- 🎨 Landing choice screen with animated background
- 📱 Fully responsive design
- 🎓 Dedicated mentorship page
- 🚀 Animated project cards
- 💼 Open source contributions showcase
- 📧 Contact form with EmailJS integration
- ✨ Modern animations and transitions

## Tech Stack

- HTML5, CSS3, JavaScript
- Vite (Dev Server & Build Tool)
- EmailJS (Contact Form)
- Font Awesome Icons
- Canvas Confetti

## Environment Variables

This project uses environment variables for sensitive configuration. 

### Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your EmailJS credentials in `.env`:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### For Vercel Deployment

Add environment variables in Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `VITE_EMAILJS_PUBLIC_KEY` = your EmailJS public key

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for Vercel deployment:

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

Vercel will automatically:
- Build and deploy on every push
- Provide preview deployments for PRs
- Enable HTTPS

## Project Structure

```
├── index.html              # Main portfolio page
├── mentorship.html         # Dedicated mentorship page
├── style.css              # Main styles
├── mentorship-styles.css  # Mentorship page styles
├── project-animations.css # Project card animations
├── main.js                # Main JavaScript
├── config.js              # Environment configuration
├── .env.example           # Environment variables template
└── assets/                # Images and assets
```

## License

© 2025 Mahesh Gachale. All rights reserved.

## Contact

- GitHub: [@MaheshGachale](https://github.com/MaheshGachale)
- LinkedIn: [Mahesh Gachale](https://www.linkedin.com/in/mahesh-gachale/)
- Topmate: [Book a Session](https://topmate.io/mahesh_gachale)
