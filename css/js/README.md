# CloudX — Static Multi-page Site (AWS Services)

This repository contains a modern multi-page static website for a cloud/AWS services company.
Files included:
- `index.html`, `services.html`, `pricing.html`, `contact.html`
- `css/style.css`
- `js/script.js`
- `assets/` (logo, icons, optional hero image)

## Quick start (locally)
1. Clone or download the repo.
2. Open `index.html` in your browser to preview.

## Contact form (Formspree)
This site uses **Formspree** for the contact form. To enable:
1. Visit https://formspree.io and sign up.
2. Create a new form and copy the endpoint URL (looks like `https://formspree.io/f/xxxxxx`).
3. Replace `https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT` in `contact.html` with your endpoint.
4. Test the form.

## Deploy to GitHub
1. Create a new GitHub repo.
2. Upload all files (or push via git).
3. (Optional) Enable GitHub Pages: Settings → Pages → Source: `main` branch / root.

## Deploy to AWS S3 (static site hosting)
1. Sign in to AWS and open S3.
2. Create a new bucket with a unique name. Uncheck "Block all public access".
3. Upload all files; keep folder structure.
4. In the bucket **Properties** → **Static website hosting**, enable and set index document to `index.html`.
5. Make the bucket objects public via a bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
  }]
}
