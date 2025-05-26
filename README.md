# Master Plan 4 Website

This is the official website for "Master Plan 4: Sustainable Multiplanetary Civilization Through Interplanetary AI" by David Orban.

## Project Structure

```
.
├── .github/workflows/        # GitHub Actions workflows
│   └── deploy.yml           # Deployment configuration
├── static/                  # Static assets
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   ├── images/              # Image assets
│   └── pdf/                 # PDF documents
├── pages/                   # Additional HTML pages
│   ├── executive-summary/   # Executive summary section
│   └── sections/            # Detailed content sections
├── content/                 # Source content
│   └── masterplan4.md       # Full document in Markdown
├── CNAME                    # Custom domain configuration
├── index.html               # Homepage
└── README.md                # Project documentation
```

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Prerequisites

- GitHub account
- Custom domain (optional)

### Setup Instructions

1. **Repository Settings**:
   - Go to Settings > Pages
   - Set source to `GitHub Actions`

2. **Custom Domain (Optional)**:
   - Update the `CNAME` file with your domain
   - Configure DNS settings with your domain registrar:
     - A records for apex domain:
       - `@ A 185.199.108.153`
       - `@ A 185.199.109.153`
       - `@ A 185.199.110.153`
       - `@ A 185.199.111.153`
     - CNAME for www subdomain:
       - `www CNAME your-username.github.io`

3. **Deployment**:
   - Push changes to `main` branch
   - GitHub Actions will automatically build and deploy the site

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/masterplan4.git
   cd masterplan4
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser.

## Development

This is a static website that can be served by any web server. No build process is required.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/davidorban/masterplan4.git
   cd masterplan4
   ```

2. Use a local web server to serve the files. For example, with Python:
   ```bash
   # Python 3
   python -m http.server 8000
   ```

3. Open http://localhost:8000 in your browser.

## Deployment

This website is designed to be deployed to GitHub Pages, Netlify, Vercel, or any static web hosting service.

### GitHub Pages

1. Push the repository to GitHub
2. Go to Settings > Pages
3. Select the main branch as the source
4. Save the settings

The site will be available at `https://<username>.github.io/masterplan4`

## Updating Content

- **Homepage**: Edit `index.html`
- **Executive Summary**: Edit `pages/executive-summary.html`
- **Styles**: Edit `static/css/styles.css`
- **JavaScript**: Edit `static/js/main.js`
- **PDF**: Replace `masterplan4.pdf` with the latest version

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
