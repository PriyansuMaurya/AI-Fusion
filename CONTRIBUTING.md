# Contributing to AI-Fusion

Thank you for helping improve AI-Fusion. Small, focused pull requests are welcome.

## Local setup

1. Fork the repository.
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/AI-Fusion.git
   cd AI-Fusion
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Create a change

Create a branch before editing:

```bash
git checkout -b describe-your-change
```

For new resources, edit the appropriate JSON file in `database/`. Each entry should include `title`, `description`, `url`, and `tags`.

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

Use a clear commit message, push your branch, and open a pull request against `main`. Describe the user-facing change, the files affected, and the validation you ran.

## Pull requests

- Keep each pull request focused on one outcome.
- Update documentation when behavior or setup changes.
- Preserve accessible keyboard and focus behavior.
- Do not add credentials, generated build output, or unnecessary media assets.
- Link related issues with `Closes #NUMBER` when appropriate.

## Code of Conduct

Participation is subject to the [Code of Conduct](CODE_OF_CONDUCT.md).
