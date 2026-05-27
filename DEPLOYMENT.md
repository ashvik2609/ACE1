# Deployment Guide for ACE Commerce Club Website

This is a TanStack Start SSR (Server-Side Rendering) application that requires a server runtime.

## Current Configuration

The app is configured for **Cloudflare Workers** deployment with SSR support.

## Prerequisites

1. A Cloudflare account
2. Wrangler CLI installed globally: `npm install -g wrangler`
3. Cloudflare API token with Workers deployment permissions

## Environment Variables Required

Add these secrets to your Cloudflare Workers deployment:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase anonymous/public key
- `SUPABASE_URL` - Same as VITE_SUPABASE_URL (for server-side)
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role secret key (for admin operations)

## Deployment Steps

### 1. Login to Cloudflare

```bash
wrangler login
```

### 2. Configure Your Domain

The wrangler.jsonc file needs your Cloudflare Workers subdomain:

```jsonc
{
  "name": "ace-commerce-club", // Change this to your preferred worker name
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "src/server.ts"
}
```

### 3. Set Secrets in Cloudflare Dashboard

Go to your Cloudflare Workers dashboard and add the environment variables:

1. Navigate to Workers & Pages
2. Select your worker
3. Go to Settings > Variables
4. Add each environment variable as an encrypted secret

### 4. Deploy

```bash
npm run build
wrangler deploy dist/server
```

Your app will be available at: `https://ace-commerce-club.your-subdomain.workers.dev`

### 5. Custom Domain (Optional)

To use a custom domain:

1. Go to Workers & Pages in Cloudflare dashboard
2. Select your worker
3. Go to Settings > Triggers > Custom Domains
4. Add your custom domain
5. Ensure DNS is properly configured

## Alternative: Netlify Static Deployment

If you want to deploy as a static site (without SSR), you need to modify the app:

1. Convert from SSR to Static Site Generation (SSG)
2. Update vite.config.ts to pre-render all routes
3. Deploy the `dist/client` folder

Note: Some features like server-side subscriber signup won't work with static deployment.

## Troubleshooting

### Website Not Loading

1. **Check Cloudflare Workers logs**: Dashboard > Workers > your-worker > Logs
2. **Verify environment variables**: All required secrets must be set
3. **Check deployment status**: Dashboard > Workers > your-worker > Deployments
4. **Test locally**: Run `wrangler dev` to test the worker locally

### Common Issues

- **Missing environment variables**: Ensure all secrets are configured
- **CORS errors**: Check your domain configuration
- **500 errors**: Check server logs in Cloudflare dashboard
- **Build failures**: Ensure all dependencies are installed with `npm install`

## Getting Your Supabase Service Role Key

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings > API
4. Copy the `service_role` secret key (NOT the anon key)
5. Add it as `SUPABASE_SERVICE_ROLE_KEY` in Cloudflare Workers secrets

## Support

For deployment issues:
- Cloudflare Workers docs: https://developers.cloudflare.com/workers/
- TanStack Start docs: https://tanstack.com/start
