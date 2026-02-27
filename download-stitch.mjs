import fs from 'fs';
import { execSync } from 'child_process';

const data = JSON.parse(fs.readFileSync('C:/Users/yuvra/.gemini/antigravity/brain/f8b7b468-053f-4542-95e1-169af6c68e97/.system_generated/steps/620/output.txt', 'utf8'));

if (!fs.existsSync('stitch-html')) {
    fs.mkdirSync('stitch-html');
}

for (const screen of data.screens) {
    const id = screen.name.split('/').pop();
    const url = screen.htmlCode.downloadUrl;
    console.log(`Downloading ${screen.title} (${id})...`);
    try {
        execSync(`curl.exe -sL "${url}" -o "stitch-html/${id}.html"`);
    } catch (e) {
        console.error("Error downloading " + id, e.message);
    }
}
console.log("Done.");
