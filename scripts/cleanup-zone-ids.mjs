import { readdir, unlink, stat } from 'fs/promises';
import { join } from 'path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.name.endsWith(':Zone.Identifier') || entry.name.includes('Zone.Identifier')) {
      files.push(fullPath);
    }
  }
  return files;
}

const root = '/vercel/share/v0-project';
const files = await walk(root);
console.log(`Found ${files.length} Zone.Identifier files`);
for (const f of files) {
  try {
    await unlink(f);
    console.log(`Deleted: ${f}`);
  } catch (e) {
    console.log(`Failed to delete: ${f} - ${e.message}`);
  }
}
console.log('Cleanup complete');
