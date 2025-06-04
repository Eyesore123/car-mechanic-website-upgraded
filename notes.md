Add to .htaccess like this case you're using Apache:

# Enable rewrite engine once

RewriteEngine On

# Exclude .well-known/acme-challenge from rewrite rules (for Let's Encrypt)

RewriteCond %{REQUEST_URI} ^/.well-known/acme-challenge/
RewriteRule .\* - [L]

# Redirect www to non-www with HTTPS directly (avoid double redirects)

RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]

# Force HTTPS for all other requests

RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Rewrite all requests to index.html (SPA fallback)

<IfModule mod_rewrite.c>
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers

<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; \
    script-src 'self' https://cdn.jsdelivr.net https://maps.googleapis.com 'unsafe-inline'; \
    script-src-elem 'self' https://cdn.jsdelivr.net https://maps.googleapis.com 'unsafe-inline'; \
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; \
    style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; \
    connect-src 'self' https://formspree.io https://maps.googleapis.com https://maps.gstatic.com; \
    img-src 'self' data: https://cdn.jsdelivr.net https://www.instagram.com https://www.tiktok.com https://maps.gstatic.com https://maps.googleapis.com; \
    font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com; \
    frame-src https://www.instagram.com https://www.tiktok.com; \
    object-src 'none'; upgrade-insecure-requests;"

Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "DENY"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>
