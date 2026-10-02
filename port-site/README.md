# Giovana Veloso Portfolio

A server-rendered portfolio built with React 19, React Router, TypeScript, and Bootstrap with custom CSS.

## Development

From this directory, install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app is available at `http://localhost:5173`.

## Validation

```bash
npm run typecheck
npm run build
```

## Routes

- `/` — portfolio and project list
- `/mercado-publico` — Mercado Público project
- `/cuidado-amigo` — Cuidado Amigo project
- `/saberes-senado` — Saberes Senado project

## Docker

Build and run the production app from this directory:

```bash
docker build -t giovana-portfolio .
docker run --rm -p 3000:3000 giovana-portfolio
```
