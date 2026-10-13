---
name: Schlossberghotel Greiz
description: A town guide for stays and gatherings in Greiz.
colors:
  deep-evergreen: "#102a24"
  evergreen: "#16372f"
  evergreen-soft: "#284a40"
  warm-chalk: "#f3f0e6"
  mineral-paper: "#e8e4d8"
  white-paper: "#fbfaf6"
  ink: "#182522"
  muted-ink: "#535b53"
  wayfinding-brass: "#cbb987"
  fine-rule: "#cbc9bd"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(3.375rem, 8vw, 7.25rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "9px"
    fontWeight: 600
    letterSpacing: "0.13em"
  editorial:
    fontFamily: "Georgia, 'Times New Roman', serif"
rounded:
  none: "0px"
spacing:
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.evergreen}"
    textColor: "{colors.warm-chalk}"
    rounded: "{rounded.none}"
    padding: "13px 19px"
    height: "48px"
  button-light:
    backgroundColor: "{colors.warm-chalk}"
    textColor: "{colors.deep-evergreen}"
    rounded: "{rounded.none}"
    padding: "13px 19px"
    height: "48px"
---

# Design System: Schlossberghotel Greiz

## Overview

**Creative North Star: “Stadtwegweiser”**

The selected third visual direction treats Schlossberghotel as a welcoming base within Greiz. A cinematic illustrated town panorama restores the reference hero, while dark evergreen framing, warm paper sections and a small image selector keep the city-guide rhythm practical. The panorama is not a photograph or a navigation map. Real hotel and local-area photographs appear in the room, hotel, event and destination sections; source pages are recorded with the assets. Never imply that the hotel itself is a castle or a protected landmark.

The same guide grammar runs through home, hotel, rooms, events, town and contact pages in German and English. A compact hotel logo area, clear route names, direct booking actions, precise facts and thin rules do most of the work. Use only photos from the documented hotel source set; keep unphotographed room types text-only.

**Key Characteristics:** evergreen map field; warm chalk; direct wayfinding labels; asymmetrical editorial layouts; square forms; sourced facts only.

## Colors

The palette carries the density of a printed town plan: dark green for orientation, paper for reading and a restrained brass accent for map details and focus.

### Primary
- **Deep evergreen** (`#102a24`): Hero ground and deep footer surfaces.
- **Evergreen** (`#16372f`): Booking controls, route markers and secondary dark sections.
- **Soft evergreen** (`#284a40`): Supporting dark surfaces and hover states.

### Secondary
- **Wayfinding brass** (`#cbb987`): A limited accent for route emphasis, small labels and map pins.

### Neutral
- **Warm chalk** (`#f3f0e6`): Header and primary reading surface.
- **Mineral paper** (`#e8e4d8`): Alternating fact bands and list surfaces.
- **White paper** (`#fbfaf6`): Reserved for small contrast surfaces.
- **Ink** (`#182522`): Main text on light backgrounds.
- **Muted ink** (`#535b53`): Supporting copy on light surfaces.
- **Fine rule** (`#cbc9bd`): Dividers and table lines.

## Typography

**Display Font:** Self-hosted Manrope variable font, with Arial fallback.  
**Body Font:** Self-hosted Manrope variable font, with Arial fallback.  
**Label Font:** Manrope, uppercase with measured tracking.

**Character:** One legible sans-serif family makes wayfinding fast and keeps body and headings coherent. Georgia appears in select place-led emphasis and the footer identity.

### Hierarchy
- **Display:** 600 weight, `clamp(54px, 8vw, 116px)`, line-height `.92`; home hero.
- **Headline:** 500–600 weight, `clamp(35px, 4.5vw, 60px)`; section openings.
- **Title:** 500 weight, 20–23px; room rows and factual sections.
- **Body:** 400 weight, 12–15px, line-height `1.75–1.9`; practical information.
- **Label:** 600 weight, 8–9px, letter spacing `.11–.19em`; navigation, route captions and map keys.

## Layout

Desktop pages use an asymmetric two-column opening. The home hero keeps text and actions to the left over a broad town panorama; four small image controls select the panorama, a park view, the hotel terrace or a real guest room. Interior route pages use room, event, hotel and local-area photographs to suit their task. Main content aligns to a generous 8.5% page inset. Below 780px, navigation becomes an accessible menu and all multi-column sections collapse to one column.

Use fine horizontal rules and open lists in place of repeated cards. Room facts stay beside their room type, with original photos only where the photographed category is verified. Event size and terrace area are prominent, while guest capacity is not invented. Use real photographs of Greizer Park on the destination page rather than placing labels over an illustrative map.

## Elevation & Depth

The system is mostly flat. Contrast comes from evergreen and paper surfaces, fine rules and authentic photography, not shadows. The mobile navigation may use one restrained shadow to separate the open menu from the page.

## Shapes

Use square corners on buttons, panels and image frames. Circular outlines are reserved for map and venue geometry; round forms are not used as a general component style.

## Components

- **Header:** Supplied hotel logo on warm chalk; concise route links, language switch and one visible booking action.
- **Primary button:** Evergreen on paper; warm chalk on deep evergreen. Minimum height 48px with pressed feedback.
- **Hero:** Large left-aligned title, short paragraph, one primary action and one distinct secondary action. All text remains visible without animation.
- **Room list:** Open rows with dimensions and included facilities next to each room type. Every booking arrow has a room-specific accessible name.
- **Map panel:** Newly generated interpretive Greiz artwork; location labels are schematic, and maps carry a not-to-scale disclosure.
- **Footer:** Contact, page routes, arrival times and existing legal links in one evergreen surface.

## Do's and Don'ts

- Do keep booking pointed at the existing booking engine and event enquiries addressed to the published hotel email.
- Do preserve the supplied original logo and use photographs with provenance recorded in `assets/photo-sources.json`.
- Do provide visible keyboard focus, touch targets of at least 44px, and a reduced-motion path.
- Do use only verified room, event, contact and arrival facts.
- Don't use one room photo to imply that it shows an unverified room category.
- Don't claim exact walking distances, event guest capacities, room prices, guest reviews, or unverified architectural history.
- Don't mix the superseded guestbook direction into this selected city-guide world.
