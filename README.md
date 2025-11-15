# Lito's Lab - Portfolio Website

Modern, conversion-optimized portfolio website built with Next.js 15, React 19, and Tailwind CSS.

## Features

- ⚡ **Fast**: Next.js 15 with static export, optimized bundle size
- 🎨 **Modern Design**: Glassmorphism, 3D animations, particle effects
- 📱 **Mobile-First**: Fully responsive, optimized for all devices
- 🔒 **Secure**: CSP headers, security.txt, proper meta tags
- 🎯 **SEO Optimized**: Sitemap, robots.txt, Open Graph, Twitter Cards
- ♿ **Accessible**: ARIA labels, skip links, semantic HTML

## Tech Stack

- **Framework**: Next.js 16.0.3
- **UI**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP (removed), react-type-animation
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with 3D
│   ├── Testimonials.tsx    # Benefits section
│   ├── WhyUs.tsx           # Win-win value prop
│   ├── Services.tsx        # What you get
│   ├── Portfolio.tsx       # Project examples
│   ├── Pricing.tsx         # Pricing + comparison
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form + WhatsApp
│   ├── Footer.tsx          # Footer
│   ├── AnimatedBackground.tsx  # Particle network
│   ├── Scene3D.tsx         # Three.js scene
│   └── MagneticButton.tsx  # Magnetic CTA button
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og-image.svg
│   └── .well-known/
│       └── security.txt
└── DEPLOYMENT.md           # Deployment checklist
```

## Performance

- Bundle size: ~848KB (main chunk)
- Mobile optimized: 3D disabled on mobile
- Lazy loading: Images and heavy components
- Preconnect hints for external resources

## Conversion Optimization

- Clear value proposition (€200, 2 dagen)
- Scarcity messaging (3 van 10 plekken)
- Social proof (benefits, not fake testimonials)
- Win-win positioning (portfolio building)
- Strong CTAs throughout
- FAQ addressing objections
- WhatsApp integration for instant contact

## SEO

- Semantic HTML
- Meta tags (title, description, keywords)
- Open Graph for social sharing
- Twitter Cards
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Structured data ready

## Security

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Security.txt for responsible disclosure

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Private project - All rights reserved

## Contact

- Website: https://actie.litoslab.nl
- Email: lito@litoslab.nl
- WhatsApp: 06-24329310
