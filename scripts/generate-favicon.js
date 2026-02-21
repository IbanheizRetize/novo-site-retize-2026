const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGE_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retize_isotipo-negativa-fundos-coloridos-sjkL77wKQ5t3XmJfqeiZdVlUyEoEbv.jpg";

async function main() {
  // Download image from URL
  const res = await fetch(IMAGE_URL);
  const arrayBuf = await res.arrayBuffer();
  const inputBuffer = Buffer.from(arrayBuf);
  console.log(`Downloaded ${inputBuffer.length} bytes`);

  const meta = await sharp(inputBuffer).metadata();
  console.log(`Source: ${meta.width}x${meta.height}`);

  // Center-crop to a square based on the shorter dimension (height)
  const size = Math.min(meta.width, meta.height);
  const left = Math.round((meta.width - size) / 2);
  const top = Math.round((meta.height - size) / 2);

  const squareBuffer = await sharp(inputBuffer)
    .extract({ left, top, width: size, height: size })
    .toBuffer();
  console.log(`Cropped to ${size}x${size} square`);

  // Write cropped square as PNG to project directory
  const projectDir = "/vercel/share/v0-project";

  // 32x32 icon
  const fav32 = await sharp(squareBuffer).resize(32, 32, { fit: "cover" }).png().toBuffer();
  fs.writeFileSync(path.join(projectDir, "app/icon.png"), fav32);
  console.log("Written app/icon.png (32x32)");

  // 180x180 apple icon
  const apple180 = await sharp(squareBuffer).resize(180, 180, { fit: "cover" }).png().toBuffer();
  fs.writeFileSync(path.join(projectDir, "app/apple-icon.png"), apple180);
  console.log("Written app/apple-icon.png (180x180)");

  // Also write 512 for OG
  const icon512 = await sharp(squareBuffer).resize(512, 512, { fit: "cover" }).png().toBuffer();
  fs.writeFileSync(path.join(projectDir, "public/icon-512.png"), icon512);
  console.log("Written public/icon-512.png (512x512)");

  console.log("Done! All favicons generated from original image.");
}

main().catch(console.error);
