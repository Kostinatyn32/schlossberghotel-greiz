# Schlossberghotel Greiz · site migration and improvement plan

The selected third concept remains the visual system: a Greiz town guide in evergreen, warm paper and brass. The homepage keeps its two existing hero images only. Room and destination photography stays on the relevant interior pages.

## Source coverage

| Previous site section | New route | Status |
|---|---|---|
| Home and availability action | `/de/`, `/en/` | Main hotel, rooms, event and town-guide blocks retained; book action goes to the existing booking system. |
| Hotel overview, breakfast, terrace, hotel tour | `/de/hotel/`, `/en/hotel/` | Hotel facts and real photographs; existing 3D tour and video remain available by link. |
| Room overview and six room types | `/de/zimmer/…`, `/en/rooms/…` | Six individual bilingual pages; images used only for photographed room categories. |
| Events and Saal am Schlossberg | `/de/events/…`, `/en/events/…` | Venue facts, spaces, photos, enquiry route and existing 3D view link. |
| Greiz, hiking, cycling, water walking | `/de/greiz/…`, `/en/greiz/…` | Destination and activity pages. Previous German paths under `/umgebung/` remain available. |
| Arrival and contact | `/de/anfahrt/`, `/en/arrival/`, contact pages | Address, garage access, phone, email, map and fax details. |
| Gästemappe A–Z and nearby dining | `/de/gaestemappe/…`, `/en/guest-guide/…` | Guest directory and all listed restaurant addresses and phone numbers. |
| Imprint, privacy, terms | Linked from the footer to the hotel’s current official legal pages | Kept at the source so the new site does not publish a stale or unapproved legal translation. |

Legacy top-level event and surroundings paths stay available as canonicalized aliases. A bilingual XML sitemap and `robots.txt` expose the new canonical routes to crawlers.

## Work already completed in this pass

1. Fixed the room list grid mismatch: image, type label, title and copy used to compete for five columns while the markup rendered six grid items. Room photos now occupy a large editorial column, with the room details and actions in a separate text column. Mobile stacks the full photo over readable copy.
2. Added bilingual detail pages for all six room types, the event hall, hiking, cycling, paddling, the guest A–Z guide and nearby dining.
3. Brought across published hotel facts, room sizes and amenities, event-space figures, current guest-guide topics, listed restaurants, phone numbers and the general garage route.
4. Preserved old German activity and event URLs, corrected language switching on detail pages, added localized 404 guidance, canonical and language alternates, and an XML sitemap.

## Recommended next improvements

1. **Hotel fact review before publication.** Confirm the garage rate, pet charge, front-desk and breakfast schedules, late-arrival procedure, lost-key charge, best-rate promise, accepted payments, the event-area figure of 270 m², and current activity-provider links. These details were published on the previous site but can change.
2. **Reservation journey.** Confirm which fields the booking provider supports in inbound links. Then connect arrival, departure and guest count to the provider without guessing URL parameters. Add event enquiry delivery only after the hotel confirms its preferred form or inbox workflow.
3. **Legal page migration.** Have the hotel approve the current imprint, privacy notice and booking terms for the new domain and translated variants; replace the legacy links only after approval.
4. **Tours and video.** Check that the existing hotel and event 3D tours and Greiz video still load on desktop and mobile, then decide whether to embed them or keep the lighter outbound links.
5. **Search and sharing.** Add the hotel’s approved social preview image, structured business and hotel data, and reviewed descriptions for the room and activity pages.
6. **Final quality pass.** Review every bilingual route at desktop, tablet and phone widths; check keyboard navigation, colour contrast, image loading, page titles, internal links and the booking handoff.

## Original source pages

- <https://www.schlossberghotel-greiz.de/>
- <https://www.schlossberghotel-greiz.de/hotel/>
- <https://www.schlossberghotel-greiz.de/zimmer/>
- <https://www.schlossberghotel-greiz.de/tagungevent/>
- <https://www.schlossberghotel-greiz.de/tagungevent/saal-am-schlossberg/>
- <https://www.schlossberghotel-greiz.de/umgebung/>
- <https://www.schlossberghotel-greiz.de/umgebung/wandern/>
- <https://www.schlossberghotel-greiz.de/umgebung/radfahren/>
- <https://www.schlossberghotel-greiz.de/umgebung/wasserwandern/>
- <https://www.schlossberghotel-greiz.de/anfahrt/>
- <https://www.schlossberghotel-greiz.de/gaestemappe/>
- <https://www.schlossberghotel-greiz.de/gaestemappe/auf-einen-blick-von-a-z/>
- <https://www.schlossberghotel-greiz.de/gaestemappe/kulinarisches/>
- <https://www.schlossberghotel-greiz.de/kontakt/>
- <https://www.schlossberghotel-greiz.de/impressum/>
- <https://www.schlossberghotel-greiz.de/datenschutz/>
- <https://www.schlossberghotel-greiz.de/agb/>
