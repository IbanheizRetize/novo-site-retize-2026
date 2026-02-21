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

  // Base64 encode for use in Write tool
  const fav32 = await sharp(squareBuffer).resize(32, 32, { fit: "cover" }).png().toBuffer();
  console.log("FAVICON_32_BASE64_START");
  console.log(fav32.toString("base64"));
  console.log("FAVICON_32_BASE64_END");

  const apple180 = await sharp(squareBuffer).resize(180, 180, { fit: "cover" }).png().toBuffer();
  console.log("APPLE_180_BASE64_START");
  console.log(apple180.toString("base64"));
  console.log("APPLE_180_BASE64_END");

  console.log("Done generating base64 favicon data");
}

main().catch(console.error);
