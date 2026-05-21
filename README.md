# The Hour

The Hour is the Astro site for CoderMana Hour, a collection of live technical sessions. The site publishes session pages, upcoming-session listings, an RSS feed, a JSON feed, and an iCalendar feed.

Production site: <https://thehour.codermana.com>

## Tech Stack

- Astro 5
- React 19 islands for interactive session UI
- Tailwind CSS 4 through the Vite plugin
- Astro content collections for session Markdown and MDX
- pnpm for dependency management

## Project Structure

```text
src/
  components/        Reusable Astro and React UI
  content/sessions/  Session Markdown and MDX entries
  data/              Session wrappers, status helpers, and resource helpers
  layouts/           Page layout shell
  pages/             Astro routes and feed endpoints
  styles/            Global CSS
src/content.config.ts  Content collection schema
astro.config.mjs       Astro integrations and site URL
```

Important routes:

- `/` - home page with session highlights
- `/sessions` - browsable session archive
- `/sessions/[slug]` - individual session pages
- `/rss.xml` - RSS feed
- `/sessions.json` - JSON feed without private join links
- `/calendar.ics` - iCalendar feed for upcoming sessions

## Getting Started

Install dependencies:

```sh
pnpm install
```

Start the local dev server:

```sh
pnpm dev
```

Build the production site:

```sh
pnpm build
```

Preview the production build:

```sh
pnpm preview
```

## Session Content

Sessions live in `src/content/sessions/`. Add one Markdown or MDX file per session. The filename is used by Astro as the content entry id, while the public URL comes from the `slug` frontmatter field.

Example:

```md
---
slug: "distributed-transactions-without-2pc"
title: "Distributed Transactions Without 2PC: Saga, Transactional Outbox, and CQRS"
description: "A practical session on distributed transaction alternatives."
startTime: "2026-06-11T19:00:00+05:30"
joinLink: "https://meet.jit.si/TheCoderManaHour"
duration: "60:00"
topics: ["distributed-systems", "microservices"]
resources:
  code: "https://github.com/codermana/distributed-design-patterns-training"
draft: false
---

Session body goes here.
```

Frontmatter rules are enforced in `src/content.config.ts`:

- `slug` must be lowercase kebab-case.
- `startTime` must be an ISO datetime with the `+05:30` offset, for example `2026-06-11T19:00:00+05:30`.
- `topics` must contain at least one topic.
- `resources` can include `slides`, `code`, `blog`, `background`, and `videos`.
- Set `draft: true` to keep a session out of public pages and feeds.

Run `pnpm build` before pushing content changes. Astro validates all session frontmatter during the build, which is also what Netlify runs.

## Deployment

Netlify builds the site with:

```sh
pnpm run build
```

The generated site is published from `dist/`. There is no `netlify.toml` in this repo, so build settings currently come from the Netlify UI.
