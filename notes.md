Add to .htaccess in case you're using Apache:

Header set Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; connect-src 'self' https://formspree.io; img-src 'self' data: https://cdn.jsdelivr.net https://www.instagram.com https://www.tiktok.com; font-src 'self' https://cdn.jsdelivr.net; frame-src https://www.instagram.com https://www.tiktok.com; object-src 'none'; upgrade-insecure-requests;"
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "DENY"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
