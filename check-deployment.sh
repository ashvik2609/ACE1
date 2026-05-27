#!/bin/bash

# ACE Commerce Club - Deployment Verification Script

echo "=== ACE Commerce Club Deployment Checker ==="
echo ""

# Check if build exists
echo "1. Checking build artifacts..."
if [ -d "dist/server" ] && [ -d "dist/client" ]; then
  echo "✓ Build artifacts found"
  echo "  - Server: dist/server/"
  echo "  - Client: dist/client/"
else
  echo "✗ Build artifacts missing. Run: npm run build"
  exit 1
fi

# Check environment variables
echo ""
echo "2. Checking environment configuration..."
if [ -f ".env" ]; then
  echo "✓ .env file found"

  # Check for required variables
  source .env

  if [ -z "$VITE_SUPABASE_URL" ]; then
    echo "✗ Missing VITE_SUPABASE_URL"
  else
    echo "✓ VITE_SUPABASE_URL is set"
  fi

  if [ -z "$VITE_SUPABASE_PUBLISHABLE_KEY" ]; then
    echo "✗ Missing VITE_SUPABASE_PUBLISHABLE_KEY"
  else
    echo "✓ VITE_SUPABASE_PUBLISHABLE_KEY is set"
  fi

  if [ -z "$SUPABASE_URL" ]; then
    echo "⚠ Missing SUPABASE_URL (needed for server-side)"
  else
    echo "✓ SUPABASE_URL is set"
  fi

  if [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
    echo "⚠ Missing SUPABASE_SERVICE_ROLE_KEY (needed for admin operations)"
  else
    echo "✓ SUPABASE_SERVICE_ROLE_KEY is set"
  fi
else
  echo "✗ .env file not found"
  exit 1
fi

# Check package.json
echo ""
echo "3. Checking package.json..."
if [ -f "package.json" ]; then
  echo "✓ package.json exists"
else
  echo "✗ package.json missing"
  exit 1
fi

# Check dependencies
echo ""
echo "4. Checking dependencies..."
if [ -d "node_modules" ]; then
  echo "✓ node_modules exists"
else
  echo "✗ Dependencies not installed. Run: npm install"
  exit 1
fi

# Check server build
echo ""
echo "5. Checking server build..."
if [ -f "dist/server/index.js" ]; then
  echo "✓ Server entry point exists"
else
  echo "✗ Server entry point missing"
  exit 1
fi

# Check worker configuration
echo ""
echo "6. Checking Cloudflare Workers configuration..."
if [ -f "wrangler.jsonc" ]; then
  echo "✓ wrangler.jsonc exists"
  cat wrangler.jsonc
else
  echo "⚠ wrangler.jsonc not found"
fi

echo ""
echo "=== Deployment Status ==="
echo ""
echo "To deploy to Cloudflare Workers:"
echo "1. Install wrangler: npm install -g wrangler"
echo "2. Login to Cloudflare: wrangler login"
echo "3. Set secrets in Cloudflare dashboard (see DEPLOYMENT.md)"
echo "4. Deploy: wrangler deploy dist/server"
echo ""
echo "Your app will be available at: https://<worker-name>.<subdomain>.workers.dev"
