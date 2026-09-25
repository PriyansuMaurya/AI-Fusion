# AI-Fusion

AI-Fusion is a curated directory of AI tools, reusable prompts, and public datasets for curious builders.

Visit the deployed site at [aifusion.maurya.ie](https://aifusion.maurya.ie).

## What is included

- **Tools**: links to AI products and services.
- **Prompts**: reusable prompts that can be copied with one click.
- **Datasets**: public datasets and registries for research and development.
- **Resource details**: descriptions, tags, external links, and accessible detail dialogs.

## Stack

- [Next.js](https://nextjs.org/) 13 with the App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Run locally

### Requirements

- Node.js 18 or newer
- npm

### Setup

```bash
git clone https://github.com/PriyansuMaurya/AI-Fusion.git
cd AI-Fusion
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

## Project structure

```text
app/              Next.js routes and global styles
components/       Shared navigation, cards, dialogs, and footer
database/         Curated JSON resource data
types/             Shared TypeScript types
public/            Runtime icons and branding assets
```

## Add a resource

Add an entry to the matching file in `database/`:

```json
{
  "title": "Resource name",
  "description": "A concise description of the resource.",
  "url": "https://example.com",
  "tags": ["tag-one", "tag-two"]
}
```

Keep titles unique and run `npm run lint` and `npm run build` before opening a pull request.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the local workflow and contribution guidelines. Please also review the [Code of Conduct](CODE_OF_CONDUCT.md) and [Security Policy](SECURITY.md).

## License

AI-Fusion is released under the [MIT License](LICENSE).
