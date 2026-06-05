# Vercel Deployment Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git repository pushed to GitHub

## Quick Deploy Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/new
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository: `abdisa38/Abdisa-Portfolio`

3. **Configure Project Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy" button
   - Wait 1-2 minutes for deployment to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your project name
   - Accept the default settings

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Configuration

This project doesn't require environment variables. All configurations are included in the build.

## Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments
- All deployments are automatic - no manual steps needed

## Build Configuration

The `vercel.json` file is already configured:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Ensure Node.js version is compatible (v18+ recommended)
- Review build logs in Vercel dashboard

### Assets Not Loading
- Verify asset paths start with `/src/Assets/`
- Check that all images are committed to GitHub
- Ensure `dist` folder is not in `.gitignore`

### 404 Errors on Routes
- The `vercel.json` rewrites configuration handles SPA routing
- All routes redirect to `index.html`

## Performance Optimization

Already implemented:
- ✅ Production build optimization with Vite
- ✅ Code splitting and lazy loading
- ✅ Image optimization
- ✅ CSS minification
- ✅ Responsive design for all devices

## Post-Deployment

After deployment:
1. Test the live site on different devices
2. Verify all images load correctly
3. Check resume download functionality
4. Test contact links (email, GitHub, LinkedIn, Telegram)
5. Verify responsive design on mobile, tablet, and desktop

## Support

For Vercel-specific issues, visit:
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

Your portfolio is now ready to deploy! 🚀
