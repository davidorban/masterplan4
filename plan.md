Product Requirements Document (PRD): Master Plan 4 Static Website

⸻

Project Title: Master Plan 4 Website for Public Access and Executive Summary Presentation

Owner: David Orban
Version: 1.0
Date: May 26, 2025

Public repository: https://github.com/davidorban/masterplan4

⸻

1. Purpose

To design and deploy a static website that hosts the “Master Plan 4: Sustainable Multiplanetary Civilization Through Interplanetary AI” report as a downloadable PDF and presents the Executive Summary in a clean, responsive web format for broader visibility and search indexing.

⸻

2. Goals
	•	Provide a permanent public link to download the full PDF.
	•	Create a dedicated page for the Executive Summary with optimized readability.
	•	Ensure compatibility with SEO and basic web analytics.
	•	Ensure the site is easy to update in case of new document versions.

⸻

3. Target Audience
	•	Technologists, futurists, policymakers, investors, and the general public interested in space, AI, and sustainability.

⸻

4. Site Structure

Homepage:
	•	Hero banner with title, author, date, and “Download PDF” button.
	•	Short intro or quote from the Executive Summary.
	•	Call-to-action to view Executive Summary online.

/executive-summary:
	•	Clean layout presenting the Executive Summary in HTML.
	•	Anchored subsections (optional) for shareability.

/download:
	•	Direct link to latest PDF hosted (version-controlled).
	•	Metadata on version, license (CC BY 4.0), author.

/license (optional):
	•	Brief description of CC BY 4.0 and how to attribute use.

⸻

5. Technical Requirements
	•	Hosting: GitHub Pages / Vercel / Netlify (static hosting)
	•	Tech stack: HTML, TailwindCSS or basic CSS, minimal JavaScript
	•	PDF File: Named MasterPlan4_v1.0.pdf, hosted in /static/pdf/
	•	Responsiveness: Mobile-first layout
	•	Analytics: Plausible or simple GA4 tracking (if needed)
	•	License Badge: Clearly displayed on homepage and download page

⸻

6. Functional Requirements
	•	Responsive layout for all screen sizes
	•	SEO-optimized metadata (title, description, keywords)
	•	Open Graph metadata for social sharing
	•	PDF viewer embed fallback or download only
	•	Favicon and minimalist brand identity (logo optional)

⸻

7. Non-Functional Requirements
	•	No backend; all content statically served
	•	Must load under 1 second for core content
	•	No third-party tracking beyond optional analytics

⸻

8. Future Enhancements (not required for v1)
	•	Version switcher for future editions (v2.0, v3.0…)
	•	Interactive timeline or visualized roadmap
	•	Embedded citation support (BibTeX / EndNote)
	•	Newsletter sign-up or contact form

⸻

9. Deliverables
	•	Static site repository with /index.html, /executive-summary/, and /static/pdf/
	•	One-pager README with update instructions
	•	Deployed live site URL