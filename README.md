# Schlossberghotel Greiz

Bilingual German and English hotel website built with Astro. The static site is published through GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

Build the static site with `npm run build`. The build also prepares project-base paths for GitHub Pages.

## Pages

The site includes the hotel, all six room categories, events and Saal am Schlossberg, Greiz and nearby activities, arrival and contact details, plus the guest guide and local dining pages. German is the primary language; the corresponding English pages are included.

Booking links open the hotel's booking system. The footer links to the currently published Impressum, Datenschutz and AGB on the hotel's official website so those legal documents remain the authoritative versions.

## Deployment

The `main` branch is built and deployed by `.github/workflows/deploy.yml`.

Public URL: <https://kostinatyn32.github.io/schlossberghotel-greiz/de/>
