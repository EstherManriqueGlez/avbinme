const fs = require('fs');
const path = require('path');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  fs.readdirSync(src).forEach(child => {
    const srcChild = path.join(src, child);
    const destChild = path.join(dest, child);
    if (fs.statSync(srcChild).isDirectory()) {
      copyRecursive(srcChild, destChild);
    } else {
      fs.copyFileSync(srcChild, destChild);
    }
  });
}

copyRecursive('public/assets/icons', 'src/assets/icons');
copyRecursive('public/assets/images', 'src/assets/images');
console.log('Assets copied to src/assets successfully!');
