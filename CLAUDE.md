# Sean's Personal Website

Personal portfolio site for Seán Finnegan, built with Create React App and deployed to GitHub Pages.

## Commands

```bash
npm start        # Dev server (http://localhost:3000)
npm run build    # Production build → /build
npm run deploy   # Build + publish to GitHub Pages (runs predeploy automatically)
npm test         # Run tests
```

## Stack

- **React 18** (CRA) with React Router v7
- **Tailwind CSS v3** for styling
- **Recharts** for the career timeline chart
- **Lucide React** for icons
- **gh-pages** for deployment

## Project Structure

```
src/
  App.jsx                  # Root: Router, Home page, LiquidBackground (defined inline here)
  index.jsx                # Entry point
  components/
    Career.jsx             # Interactive Recharts line chart of career milestones
    LiquidBackground.jsx   # Standalone component (also defined inline in App.jsx — the inline version wins)
  pages/
    Writing.jsx            # Blog page: article list + Buttondown subscription form
    Route52.jsx            # Route52 Engineering contact page (copy-email button)
  styles/
    App.css                # Minimal base styles (dark background, white text)
    index.css              # Tailwind directives
public/
  index.html               # HTML template (page title: "Seán Finnegan")
  posts/                   # Article text files (.txt), served statically
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` (in App.jsx) | Hero, about me, career chart, writing teaser |
| `/writing` | `Writing` | Article list or empty state with subscription form |
| `/route52` | `Route52` | Route52 Engineering contact card |

## Design System

- **Background**: deep navy `#1a103d` with animated liquid blobs
- **Accent**: orange `#ff6b35` / `#ff4d4d`
- **Glassmorphism**: `bg-white/10 backdrop-blur-md border border-white/20 rounded-xl`
- **Text**: white headings, `text-gray-300` body, `text-orange-400` labels/links
- **Section labels**: `text-xs uppercase tracking-[0.2em] text-orange-400 font-bold`

## Adding a Blog Post

1. Add the article text file to `public/posts/your-slug.txt`
2. Uncomment or add an entry to the `writings` array in `src/pages/Writing.jsx`:

```js
{
  id: "your-slug",
  title: "Article Title",
  excerpt: "Short description shown in the list.",
  tag: "topic + category",
  readTime: "5 min read",
  file: "/posts/your-slug.txt"
}
```

## Deployment

Deploys to GitHub Pages. The `gh-pages` branch is auto-managed by the `deploy` script — never edit it manually.

```bash
npm run deploy
```

Live site is at the domain configured in `public/CNAME` (via the `build/` directory).

## Notes

- `LiquidBackground` is defined both in `App.jsx` (inline) and `src/components/LiquidBackground.jsx`. The inline definition in `App.jsx` shadows the import — the component file is effectively unused.
- The career timeline data is hardcoded in `Career.jsx`; update the `data` array there to add milestones.
- Buttondown newsletter form uses `sean-finnegan` as the list slug.
