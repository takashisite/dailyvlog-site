# Daily Vlog Site

Static product, support, and privacy site for Daily Vlog.

Production URLs:

- `https://dailyvlog.mizuno.app/`
- `https://dailyvlog.mizuno.app/support/`
- `https://dailyvlog.mizuno.app/privacy/`

## Local preview

```bash
python3 -m http.server 4176
```

## Cloudflare Pages

- Project: `dailyvlog-site`
- Framework preset: `None`
- Build command: none
- Build output directory: `/`
- Production branch: `main`
- Custom domain: `dailyvlog.mizuno.app`
- Support contact: `dailyvlog@mizuno.app`

GitHub `main` is connected to Cloudflare Pages for production deploys.

## App Store Connect URLs

- Support URL: `https://dailyvlog.mizuno.app/support/`
- Privacy Policy URL: `https://dailyvlog.mizuno.app/privacy/`

## Cloudflare Email Routing

- Public address: `dailyvlog@mizuno.app`
- Forwarding destination: `takashi@sai.to`
