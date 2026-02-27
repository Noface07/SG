import fs from 'fs';
import path from 'path';

const stitchHtmlDir = 'stitch-html';
const outputDir = 'src/components/stitch';

const files = fs.readdirSync(stitchHtmlDir);

files.forEach(file => {
    if (!file.endsWith('.html')) return;

    let html = fs.readFileSync(path.join(stitchHtmlDir, file), 'utf8');

    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;

    let jsx = bodyMatch[1];

    // Convert HTML to JSX
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Better void tag handling to avoid <br/ />
    // First, remove any existing trailing slashes in void tags so we have a clean slate.
    jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)\/?>/gi, '<$1$2 />');

    // Fix JSX specific attributes
    jsx = jsx.replace(/viewbox=/gi, 'viewBox=');
    jsx = jsx.replace(/allowfullscreen/gi, 'allowFullScreen');
    jsx = jsx.replace(/stroke-width=/gi, 'strokeWidth=');
    jsx = jsx.replace(/stroke-linecap=/gi, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/gi, 'strokeLinejoin=');
    jsx = jsx.replace(/fill-rule=/gi, 'fillRule=');
    jsx = jsx.replace(/clip-rule=/gi, 'clipRule=');
    jsx = jsx.replace(/stroke-miterlimit=/gi, 'strokeMiterlimit=');
    jsx = jsx.replace(/fill-opacity=/gi, 'fillOpacity=');
    jsx = jsx.replace(/stop-color=/gi, 'stopColor=');
    jsx = jsx.replace(/clip-path=/gi, 'clipPath=');

    // Fix common boolean attributes empty string values
    jsx = jsx.replace(/((?:checked|selected|required|disabled|readonly|hidden|allowFullScreen|open))=(["'])(?:\2|)\2/gi, '$1={true}');

    // Fix inline styles properly (handling URLs with colons, and both single and double quotes)
    jsx = jsx.replace(/style=(["'])(.*?)\1/g, (match, quote, styles) => {
        const styleObj = styles.split(';').filter((s) => s.trim()).reduce((acc, style) => {
            const index = style.indexOf(':');
            if (index !== -1) {
                const key = style.slice(0, index);
                const value = style.slice(index + 1);
                const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                acc[camelKey] = value.trim();
            }
            return acc;
        }, {});
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Wrap <style> contents in template strings
    jsx = jsx.replace(/<style>([\s\S]*?)<\/style>/gi, '<style>{`$1`}</style>');

    // Remove scripts
    jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    const componentName = `Stitch_${file.replace('.html', '')}`;

    const componentCode = `import React from 'react';\n\nexport function ${componentName}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;

    fs.writeFileSync(path.join(outputDir, `${componentName}.tsx`), componentCode);
    console.log(`Re-converted ${file} to ${componentName}.tsx`);
});
