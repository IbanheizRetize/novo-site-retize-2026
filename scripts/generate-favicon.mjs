import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "public/images/retize-isotipo-source.jpg");

async function main() {
  const meta = await sharp(source).metadata();
  console.log(`Source: ${meta.width}x${meta.height}`);

  // Center-crop to a square based on the shorter dimension (height)
  const size = Math.min(meta.width, meta.height);
  const left = Math.round((meta.width - size) / 2);
  const top = Math.round((meta.height - size) / 2);

  const squareBuffer = await sharp(source)
    .extract({ left, top, width: size, height: size })
    .toBuffer();

  console.log(`Cropped to ${size}x${size} square`);

  // Generate favicon.ico (32x32 PNG, browsers accept PNG favicons)
  await sharp(squareBuffer)
    .resize(32, 32, { fit: "cover" })
    .png()
    .toFile(path.join(root, "app/favicon.png"));
  console.log("Generated app/favicon.png (32x32)");

  // Generate apple-touch-icon (180x180)
  await sharp(squareBuffer)
    .resize(180, 180, { fit: "cover" })
    .png()
    .toFile(path.join(root, "public/apple-touch-icon.png"));
  console.log("Generated public/apple-touch-icon.png (180x180)");

  // Generate OG image icon (512x512)
  await sharp(squareBuffer)
    .resize(512, 512, { fit: "cover" })
    .png()
    .toFile(path.join(root, "public/icon-512.png"));
  console.log("Generated public/icon-512.png (512x512)");

  // Generate proper ICO by using 32x32 PNG as favicon.ico
  await sharp(squareBuffer)
    .resize(32, 32, { fit: "cover" })
    .png()
    .toFile(path.join(root, "app/icon.png"));
  console.log("Generated app/icon.png (32x32)");
}

main().catch(console.error);
