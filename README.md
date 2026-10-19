# Tassen 🐾

A responsive one-page website for **Tassen**, a fictional dog daycare and training business. Built as an individual assignment (*individuell uppgift*) for a frontend course using HTML, CSS, and vanilla JavaScript.

## Features

- **Sticky navbar** with smooth-scroll navigation to each section
- **Open hours banner** with a live clock and an open/closed status based on the current day and time
- **Hero section** with a full-width image, dark overlay, and call-to-action button
- **Services** displayed as responsive cards, each with a themed dog photo and price
- **About** section
- **Reviews** section that shows a random customer review, with a button to display another one (never repeating the same review twice in a row)
- **Contact** section with a two-column layout: business details on the left, a contact form on the right
- **Booking form** with name, phone, dog name, service, and date fields; requests are saved in the browser with `localStorage` and can be cancelled
- **Footer** with contact info and icons
- **Responsive design** that adapts to mobile with a single-column layout

## Tech Stack

- HTML5
- CSS3 (Flexbox & CSS Grid)
- Vanilla JavaScript (DOM manipulation, `localStorage`)
- [Google Fonts](https://fonts.google.com/) — Cherry Bomb One, Modak, Quicksand
- [Flaticon UIcons](https://www.flaticon.com/uicons) — footer icons

## Project Structure

```
individuell-uppgift/
├── index.html      # Page markup
├── style.css       # All styling
├── app.js          # Open hours, reviews, and booking logic
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
