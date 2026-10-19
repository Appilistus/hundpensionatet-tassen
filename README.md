# Tassen 🐾

A responsive one-page website for **Tassen**, a fictional dog daycare and training business. Built as an individual assignment (*individuell uppgift*) for a frontend course using HTML, CSS, and vanilla JavaScript.

## Features

- **Sticky navbar** with smooth-scroll navigation to each section
- **Hero section** with a full-width image, dark overlay, and call-to-action button
- **Live open/closed status** showing the current time and whether the business is open right now
- **Services** displayed as responsive cards, each with a themed dog photo and price
- **About** section
- **Contact** section with a two-column layout: business details on the left, a contact form on the right
- **Booking form** with owner name, phone, dog name, service, and date fields; requests are saved in the browser (localStorage) and can be cancelled from the list
- **Customer reviews** with a button that shows a random review
- **Footer** with contact info and icons
- **Responsive design** that adapts to mobile with a single-column layout

## Tech Stack

- HTML5
- CSS3 (Flexbox & CSS Grid)
- JavaScript (vanilla, with localStorage for saved bookings)
- [Google Fonts](https://fonts.google.com/) — Cherry Bomb One, Modak, Quicksand
- [Flaticon UIcons](https://www.flaticon.com/uicons) — footer icons

## Project Structure

```
hundpensionatet-tassen/
├── index.html      # Page markup
├── style.css       # All styling
├── app.js          # Open hours, booking, and reviews logic
├── assets/         # Hero, service, and about images
└── README.md
```

## Getting Started

No build step or dependencies are required. Clone or download the project and open `index.html` in a browser:

```bash
open index.html
```

Or serve it locally with any static server, e.g.:

```bash
npx serve
```
