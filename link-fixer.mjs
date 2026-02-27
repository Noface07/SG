import fs from 'fs';
import path from 'path';

const dir = 'src/components/stitch';
const files = fs.readdirSync(dir);

const routeMap = {
    'Collections': '/collections',
    'Heritage': '/heritage',
    'Our Story': '/heritage',
    'Bespoke': '/bespoke',
    'Atelier': '/visit',
    'About': '/heritage',
    'Service': '/shipping-returns',
    'Account': '/account',
    'Contact': '/visit',
    'Shipping': '/shipping-returns',
    'Returns': '/shipping-returns',
    'Privacy': '/policies/terms',
    'Terms': '/policies/terms',
    'Book Appointment': '/appointments',
    'Track Order': '/account/orders',
    'View Temple Collection': '/collections',
    'BOOK A VISIT': '/visit',
    'BOOK VIDEO CONSULTATION': '/visit',
    'Start Your Order': '/bespoke',
    'Add to Cart': '/cart',
    'Checkout': '/checkout',
    'Continue': '/collections',
    'My Orders': '/account/orders',
    'Wishlist': '/account/wishlist',
    'Profile Settings': '/account/settings',
    'Address Book': '/account/addresses',
    'Log Out': '/'
};

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    if (!content.includes("import Link from 'next/link';")) {
        content = content.replace("import React from 'react';", "import React from 'react';\nimport Link from 'next/link';");
    }

    // Replace <a>
    content = content.replace(/<a([^>]*?)>([\s\S]*?)<\/a>/gi, (match, attrs, text) => {
        let cleanText = text.replace(/<[^>]*>/g, '').trim().toLowerCase();

        // Ignore anchors without href="#"
        if (!attrs.includes('href="') || attrs.includes('href="http') || attrs.includes('href="mailto:')) {
            return match;
        }

        let route = '#';
        for (const [key, val] of Object.entries(routeMap)) {
            if (cleanText.includes(key.toLowerCase())) {
                route = val;
                break;
            }
        }

        // Default to a fallback if text contains common words
        if (route === '#') {
            if (cleanText.includes('home')) route = '/';
            else if (cleanText.includes('shop')) route = '/collections';
        }

        // Convert to <Link>
        attrs = attrs.replace(/href=(["']).*?\1/, `href="${route}"`);
        return `<Link${attrs}>${text}</Link>`;
    });

    // Replace <button> logic
    content = content.replace(/<button([^>]*?)>([\s\S]*?)<\/button>/gi, (match, attrs, text) => {
        let cleanText = text.replace(/<[^>]*>/g, '').trim().toLowerCase();

        if (attrs.includes('type="submit"')) return match; // skip form submit buttons

        let route = null;

        if (cleanText === 'person' || cleanText.includes('profile')) route = '/account';
        else if (cleanText.includes('shopping_bag') || cleanText.includes('cart')) route = '/cart';
        else if (cleanText === 'search' || cleanText === 'menu') return match; // stay as buttons
        else {
            for (const [key, val] of Object.entries(routeMap)) {
                if (cleanText.includes(key.toLowerCase())) {
                    route = val;
                    break;
                }
            }
        }

        if (route) {
            // Remove button specific attributes
            let newAttrs = attrs.replace(/type=(["']).*?\1/g, '').replace(/disabled(?:=\{true\})?/g, '');
            // We'll wrap button text in Link or replace it depending. Since it's a styling button, Next.js Link handles classes properly now.
            return `<Link href="${route}"${newAttrs}>${text}</Link>`;
        }

        return match;
    });

    // Logos back to home
    content = content.replace(/<div className="md:hidden text-primary font-decorative text-xl font-bold tracking-widest(?: block)?">SG<\/div>/gi, '<Link href="/" className="md:hidden text-primary font-decorative text-xl font-bold tracking-widest block">SG</Link>');
    content = content.replace(/<h2 className="text-white text-xl font-bold leading-tight tracking-wide.*?font-cinzel(.*?)">Sanwariya Gold<\/h2>/gi, '<h2 className="text-white text-xl font-bold leading-tight tracking-wide font-cinzel$1"><Link href="/">Sanwariya Gold</Link></h2>');

    fs.writeFileSync(p, content);
    console.log(`Wired links in ${file}`);
});
