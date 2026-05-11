const fs = require('fs');
const path = require('path');

const files = ['index.html', 'aiexecutiveassistant.html', 'recordingstudio.html', 'support.html', 'privacy.html', 'terms.html'];

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

// 2. Update all files
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/v\d+\.\d+\.\d+/g, nextVersion);
    fs.writeFileSync(file, content);
});

console.log(nextVersion);
