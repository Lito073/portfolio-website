# Deployment Checklist

## Before Going Live

### 1. Google Analytics
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Copy tracking ID (G-XXXXXXXXXX)
- [ ] Create `.env.local` file: `NEXT_PUBLIC_GA_ID=G-YOUR-ID`
- [ ] Test tracking in GA Real-Time view

### 2. Favicon
- [ ] Create favicon at https://favicon.io/
- [ ] Use "LL" text with purple gradient (#8b5cf6)
- [ ] Download and replace `public/favicon.ico`

### 3. OG Image
- [ ] Convert `public/og-image.svg` to JPG (1200x630)
- [ ] Or screenshot `public/og-image.html` at 1200x630
- [ ] Replace `public/og-image.jpg`
- [ ] Update `app/layout.tsx` to use .jpg instead of .svg
- [ ] Test with https://www.opengraph.xyz/

### 4. Content Review
- [ ] Replace WhatsApp number if needed (currently: 06-24329310)
- [ ] Update scarcity counter (currently: 3 van 10 plekken)
- [ ] Review all copy for typos

### 5. Performance
- [ ] Run Lighthouse audit
- [ ] Check mobile performance
- [ ] Test on real devices

### 6. SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Check meta descriptions

### 7. Legal (Optional)
- [ ] Add privacy policy if collecting data
- [ ] Add terms of service
- [ ] Add cookie consent if using tracking

## Deployment Commands

```bash
# Build
npm run build

# Deploy to GitHub Pages
git add -A
git commit -m "Production ready"
git push

# Wait 1-2 minutes for GitHub Pages to update
```

## Post-Deployment

- [ ] Test all links
- [ ] Test WhatsApp integration
- [ ] Test contact form
- [ ] Share on social media to test OG image
- [ ] Monitor GA for traffic
