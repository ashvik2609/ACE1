# Quick Start: Deploy Your ACE Commerce Club Website

Your website is now fixed and ready for deployment! Here's how to get it online:

## Current Status
✅ All build issues fixed
✅ Environment variables configured
✅ Build successful (592K client + 2.0M server)
✅ Ready for Cloudflare Workers deployment

## Deploy in 3 Steps

### Option A: Using Wrangler CLI (Recommended)

```bash
# 1. Install and login to Cloudflare
npm install -g wrangler
wrangler login

# 2. Deploy your application
wrangler deploy dist/server

# 3. Visit your website
# https://tanstack-start-app.<your-subdomain>.workers.dev
```

### Option B: Manual Deployment via Dashboard

1. Go to https://dash.cloudflare.com
2. Navigate to Workers & Pages > Create Application
3. Choose "Create Worker"
4. Name it "ace-commerce-club"
5. Upload the `dist/server` folder contents
6. Add environment variables (see below)

## Environment Variables (Required)

Add these in Cloudflare Workers Dashboard > Your Worker > Settings > Variables:

**Required Variables:**
- `VITE_SUPABASE_URL` = `https://0ec90b57d6e95fcbda19832f.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY` = (already in your .env file)
- `SUPABASE_URL` = `https://0ec90b57d6e95fcbda19832f.supabase.co`

**Optional (for email subscription):**
- `SUPABASE_SERVICE_ROLE_KEY` = (get from Supabase dashboard)

## Custom Domain Setup

To use your own domain (e.g., www.acecommerce.club):

1. Go to Workers > Your Worker > Settings > Triggers
2. Click "Add Custom Domain"
3. Enter your domain
4. Update DNS to point to Cloudflare

## What Was Fixed

1. **Directory structure**: Moved files from nested folder to root
2. **Environment variables**: Corrected variable names
3. **Build configuration**: Updated for SSR deployment
4. **Deployment config**: Optimized for Cloudflare Workers

## Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Check `FIX_SUMMARY.md` for what was fixed
- Run `./check-deployment.sh` to verify setup
- Cloudflare docs: https://developers.cloudflare.com/workers/

## Test Locally First

```bash
npm run dev
# Visit http://localhost:8080
```

Your website is ready to go live!
