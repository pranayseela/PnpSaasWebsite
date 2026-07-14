const fs = require('fs');

const files = ['index.html', 'ai-executive-assistant.html', 'cine-drive.html', 'family-finance.html', 'support.html', 'privacy.html', 'privacy-policy.html', 'terms.html'];

// 1. Get current version
const indexContent = fs.readFileSync('index.html', 'utf8');
const versionMatch = indexContent.match(/v(\d+)\.(\d+)\.(\d+)/);

if (!versionMatch) {
    console.error('Could not find version number');
    process.exit(1);
}

const major = parseInt(versionMatch[1]);
const minor = parseInt(versionMatch[2]);
const patch = parseInt(versionMatch[3]);
const nextVersion = `v${major}.${minor}.${patch + 1}`;

// 2. Perform fixes and update version in all files
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Increment version
    content = content.replace(/v\d+\.\d+\.\d+/g, nextVersion);

    // Fix: Remove fade-in from product cards to prevent contrast failures during animation
    content = content.replace(/flex flex-col items-center text-center fade-in shadow-sm/g, "flex flex-col items-center text-center shadow-sm");
    
    // Fix: Darken apple-blue slightly for guaranteed contrast compliance
    content = content.replace(/blue: '#0066CC'/g, "blue: '#005AC1'");

    fs.writeFileSync(file, content);
});

console.log(nextVersion);
