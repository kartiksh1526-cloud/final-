# JK Hydraulic & Engineering

A modern, responsive single-page website for JK Hydraulic & Engineering, a business focused on hydraulic equipment, engineering services, and custom industrial solutions.

## Live Repository

[github.com/kartiksh1526-cloud/jkhydraulic](https://github.com/kartiksh1526-cloud/jkhydraulic)

## Features

- Responsive desktop, tablet, and mobile layout
- Dark and light theme toggle
- Theme preference saved in `localStorage`
- Mobile navigation menu
- Smooth scrolling between page sections
- Active navigation state while scrolling
- Animated statistics and pressure gauge
- Product, service, and industry showcase sections
- Interactive product cards and hero machine scene
- Scroll reveal animations
- Quote request form with confirmation toast
- Custom cursor effects on desktop
- SEO-friendly page title and description
- No framework or build process required

## Project Structure

```text
jkhydraulic/
├── jk.html             # Main website page
├── index.html          # Local-hosting and static-hosting entry point
├── style.css           # Layout, responsive styles, themes, and animations
├── script.js           # Original JavaScript file
├── script_fixed.js     # Active JavaScript interactions and theme logic
└── README.md           # Project documentation
```

## Run Locally

Because this is a static website, it can be opened directly in a browser. A local server is recommended for the best browser behavior.

### Using Python

```bash
python -m http.server 8080
```

Then open the site root:

```text
http://localhost:8080/
```

### Using VS Code

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `jk.html`.
4. Select **Open with Live Server**.

## Customization

### Business details

Update the company text, phone number, email address, address, and working hours in `jk.html`.

### Colors and themes

Theme colors are defined as CSS custom properties near the top of `style.css`:

- Default values control the dark theme.
- `body.light-theme` overrides the values for the light theme.
- Update the variables to change the complete visual system consistently.

### Interactions

The active page interactions are in `script_fixed.js`, including:

- Theme switching
- Mobile menu behavior
- Scroll-based navigation
- Counters and gauge animation
- Form feedback
- Reveal animations

If the HTML is changed to use another script file, make sure the matching `<script>` reference remains at the bottom of `jk.html`.

## External Resources

The page uses these CDN-hosted resources:

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

An internet connection is needed for the external fonts and icons to load.

## Deployment

This project can be hosted on any static hosting provider, including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard web server

For GitHub Pages:

1. Open the repository settings on GitHub.
2. Go to **Pages**.
3. Select the `main` branch as the deployment source.
4. Save the configuration.

The root `index.html` forwards visitors to `jk.html`, so the site opens from the hosting root without requiring a specific page URL.

## Notes

The quote form currently shows a success message in the browser and does not send data to a backend. Connect it to a server, email service, or form provider before using it for real customer enquiries.

## License

This project is intended for JK Hydraulic & Engineering. Add the appropriate license before distributing the source publicly.
