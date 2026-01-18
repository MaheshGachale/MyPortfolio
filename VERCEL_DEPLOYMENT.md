# Vercel Deployment Guide

## Quick Setup

### 1. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import `MaheshGachale/MyPortfolio` repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 2. Add Environment Variables

In Vercel project settings → Environment Variables, add:

```
VITE_EMAILJS_PUBLIC_KEY = qDAoyswbaALvGHlQK
```

**Important**: Add this to all environments (Production, Preview, Development)

### 3. Deploy

Click "Deploy" and Vercel will:
- ✅ Install dependencies
- ✅ Build your project
- ✅ Deploy to production
- ✅ Provide a live URL

## Post-Deployment

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be auto-provisioned

### Automatic Deployments

Every push to `main` branch will trigger:
- Production deployment
- Automatic preview URL
- Build logs and status

### Preview Deployments

Pull requests automatically get preview URLs for testing before merging.

## Environment Variables Security

✅ **What's Protected**:
- `.env` file is gitignored
- Sensitive keys are in Vercel environment variables
- Keys are injected at build time

✅ **What's in GitHub**:
- `.env.example` (template only)
- Code references `import.meta.env.VITE_*`
- No actual secrets

## Troubleshooting

### Build Fails

Check:
1. Environment variables are set in Vercel
2. Build command is correct
3. All dependencies are in `package.json`

### EmailJS Not Working

Verify:
1. `VITE_EMAILJS_PUBLIC_KEY` is set in Vercel
2. Variable name starts with `VITE_`
3. Redeploy after adding environment variables

### 404 Errors

Ensure:
1. Output directory is set to `dist`
2. Build completed successfully
3. Check build logs for errors

**For Multi-Page Apps (e.g., mentorship.html)**:
- The `vite.config.js` must include all HTML pages as entry points
- Without this, Vite only builds `index.html` and other pages return 404
- See `vite.config.js` for the multi-page configuration example

## Support

For issues:
1. Check Vercel build logs
2. Review deployment logs
3. Test locally with `npm run build && npm run preview`

---

**Your Portfolio URL**: Will be provided after deployment
**Example**: `https://mahesh-portfolio.vercel.app`
