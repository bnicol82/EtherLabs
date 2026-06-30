# EtherLabs

Professional parent company website for **EtherLabs** — the holding company behind:

- **[EtherMail](https://ethermail.io)** — Wallet-native email for Web3
- **EtherAgents** — AI agent infrastructure (formerly Agent Task Force)
- **TokenStream** — Real-time token intelligence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons

## Deploy

The site deploys automatically to the **`gh-pages`** branch on every push to `main` via GitHub Actions.

**Live URL (after Pages is enabled):** [https://bnicol82.github.io/EtherLabs/](https://bnicol82.github.io/EtherLabs/)

### One-time setup

1. Open [Repository Settings → Pages](https://github.com/bnicol82/EtherLabs/settings/pages)
2. Under **Build and deployment**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and **Folder** to `/ (root)`
4. Click **Save**

Future pushes to `main` will rebuild and redeploy automatically.
