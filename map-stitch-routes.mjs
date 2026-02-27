import fs from 'fs';
import path from 'path';

const map = {
    'src/app/collections/page.tsx': 'Stitch_ebdc53c98c1e44758fce57dc8c3028d9',
    'src/app/product/[slug]/page.tsx': 'Stitch_457a469875704f019a540c1fb6321802',
    'src/app/heritage/page.tsx': 'Stitch_3d827f1b76854de8846d861daedbd00e',
    'src/app/bespoke/page.tsx': 'Stitch_15160d9d2ed74f079c0778fc081a5ef0',
    'src/app/visit/page.tsx': 'Stitch_26ad547fd97e41b58cf4df6061117d65',
    'src/app/appointments/page.tsx': 'Stitch_ef510ca87ebf463991aa1d10b75affa1',
    'src/app/shipping-returns/page.tsx': 'Stitch_b70464a244664ea799eeb868d8a33273',
    'src/app/policies/terms/page.tsx': 'Stitch_c787a04eec414219a1c4c1db9b4cd047',
    'src/app/checkout/page.tsx': 'Stitch_4ccdc6fd58db4d679f5cb85a33fbee15',
    'src/app/checkout/success/page.tsx': 'Stitch_4524d2f7ba984163b5b37993bb9b0290',
    'src/app/account/orders/page.tsx': 'Stitch_4d8ce0a705574aa19704a08d97636b87',
    'src/app/account/certificates/page.tsx': 'Stitch_0162fefafc444cd0b3345e51bbd57510',
    'src/app/account/wishlist/page.tsx': 'Stitch_ce17725e475545788e688ef1cab01f80',
    'src/app/cart/page.tsx': 'Stitch_135391305b2d4f7bac6b83c4ce776770',
    'src/app/cart/empty/page.tsx': 'Stitch_867faebb45294005a7435b801f8be9ce',
};

const dirsToCreate = [
    'src/app/collections',
    'src/app/product/[slug]',
    'src/app/heritage',
    'src/app/bespoke',
    'src/app/visit',
    'src/app/appointments',
    'src/app/shipping-returns',
    'src/app/policies/terms',
    'src/app/checkout',
    'src/app/checkout/success',
    'src/app/account/orders',
    'src/app/account/certificates',
    'src/app/account/wishlist',
    'src/app/cart',
    'src/app/cart/empty'
];

dirsToCreate.forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

for (const [filePath, component] of Object.entries(map)) {
    const code = `import { ${component} } from "@/components/stitch/${component}";\n\nexport default function Page() {\n  return <${component} />;\n}\n`;
    fs.writeFileSync(filePath, code);
    console.log(`Updated ${filePath}`);
}
