# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Pixel Mountain Creative (pixelmountain.ca), a web/digital media agency. SvelteKit 2 + **Svelte 5 in runes mode** with TypeScript, deployed to Netlify (Vite 5, `@sveltejs/vite-plugin-svelte` 4, Node 22 pinned in `netlify.toml`).

Svelte 5 conventions: props via `let { … }: Props = $props()`, local reactive values via `$state` / `$derived` (prefer event handlers or `$derived` over `$effect`), `onclick`-style event attributes (no `on:` directives or modifiers), snippets and `{@render children?.()}` instead of `<slot>`, and no imports from `svelte/legacy`. `bind:this` targets that are only read in `onMount` stay plain `let`. The `cookieBanner` store in `src/lib/stores/uiStore.ts` is deliberately kept as a store. `ScrollProps.svelte` passes its animation class to a `children(props)` snippet (`{#snippet children(props)}<div class={props.class}>…{/snippet}`). The `clickOutside` action (`src/lib/utils/click_outside.ts`) dispatches an `outclick` event, which is handled with `onoutclick`.

## Commands

- `npm run dev`: Vite dev server
- `npm run build` / `npm run preview`: production build (output to `build/`, as Netlify publishes it)
- `npm run check`: `svelte-kit sync` + `svelte-check` type checking
- `npm run lint` / `npm run format`: Prettier check / write (tabs, double quotes, no trailing commas, width 100)

There is no test suite.

## Architecture

- **Routing** (`src/routes/`): mostly static marketing pages. `+layout.svelte` wraps every page in Navbar, Footer, BackToTop and CookieBanner, and toggles a `smoothscroll` class on `<html>` around navigations so client-side page changes don't animate-scroll.
- **Blog / portfolio is JSON-driven**: `src/lib/data/blogs.json` is the single source of content. Each entry has a `slug`, `type` (`"project"` or `"blog post"`), `featured`, card/hero images, tags, optional `link`/`linkBool`, and a `content` array of blocks (`paragraph`, `image`, `video`). `blog/[slug]/+page.ts` looks up the entry by slug (404 otherwise) and `+page.svelte` renders the blocks by type; adding a new block type means updating that renderer. `/our-work` and `RecentWork.svelte` list entries from the same file. `/blog` itself just redirects to `/our-work`.
- **Email via Resend**: two server endpoints send to hello@pixelmountain.ca: the contact form action in `contact/+page.server.ts` (form POST, then redirect to `/contact/form-submit`) and `api/send-email/+server.ts` (JSON POST for package inquiries from the services page). Both fire the send without awaiting it.
- **Styling**: global stylesheet is `static/app.css` (linked from `src/app.html`, not imported), defining CSS custom properties (`--color-*`, `--font-*`, responsive `--padding-inline`, font stacks) that components use in scoped `<style>` blocks. Fonts live in `static/fonts`; images and SVGs in `static/assets/`.
- **Analytics**: Plausible, proxied through Netlify `_redirects` (`/js/script.tagged-events.js`, `/api/event`).
- **Firebase** (`src/lib/firebase/firebase.ts`) and `BlogEditor.svelte` exist but are not currently wired into any route.

## Environment

`.env` holds `VITE_`-prefixed vars (accessed through `import.meta.env`): Firebase config (`VITE_API_KEY`, `VITE_AUTH_DOMAIN`, `VITE_PROJECT_ID`, `VITE_STORAGE_BUCKET`, `VITE_MESSAGING_SENDER_ID`, `VITE_APP_ID`), `VITE_MAPS_API_KEY` (Google Maps, `Map.svelte`; `@googlemaps/js-api-loader` is in `ssr.noExternal`), and `VITE_RESEND_EMAIL_API_KEY`.

## Conventions

- Commit messages use gitmoji shortcodes: `:lipstick:` styles, `:sparkles:` features, `:bug:` fixes, `:bento:` assets, `:construction:` WIP, `:pencil2:` typos, `:speech_balloon:` copy.
- Work happens on `dev`; `master` is the main branch.
- `TO-DO.md` tracks prioritised outstanding work (pre-launch items such as og:images, recaptcha on the contact form, Cloudinary images).
