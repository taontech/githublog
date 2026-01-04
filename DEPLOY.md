# Deploy to Cloudflare

This site is designed to be a static website, making it perfect for **Cloudflare Pages**.

## Method 1: Connect GitHub (Recommended)

1.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** -> **Create Application** -> **Pages**.
3.  Click **Connect to Git** and select your `githublog` repository.
4.  **Build Settings**:
    *   **Framework Preset**: None (Static HTML)
    *   **Build Command**: (Leave empty, or `echo "No build needed"`)
    *   **Build Output Directory**: `/` (or leaves as root)
5.  Click **Save and Deploy**.

Cloudflare will automatically deploy your site whenever you push changes to GitHub.

## Method 2: Wrangler CLI (Manual)

If you have `wrangler` installed:

```bash
# Login to Cloudflare
npx wrangler login

# Deploy current directory
npx wrangler pages deploy .
```

## Configuration

*   **config.json**: Ensure your domain is listed in `config.json` so the app knows which GitHub repo to load data from.
    *   Example: If your Cloudflare domain is `githublog.pages.dev`, add it to `config.json`.

```json
"githublog.pages.dev": {
    "owner": "taontech",
    "repo": "githublog",
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET",
    "theme": "default"
}
```

*   **OAuth**: Cloudflare Pages domains support HTTPS by default, which is required for GitHub OAuth to work securely.
