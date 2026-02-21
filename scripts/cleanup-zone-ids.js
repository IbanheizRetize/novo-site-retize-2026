import { readdir, unlink, stat } from 'fs/promises';
import { join } from 'path';

const ROOT = '/vercel/share/v0-project';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.name.includes('Zone.Identifier')) {
      console.log('Deleting:', fullPath);
      await unlink(fullPath);
    }
  }
}

await walk(ROOT);
console.log('Done cleaning Zone.Identifier files');
