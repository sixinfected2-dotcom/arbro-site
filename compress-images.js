// compress-images.js — version Sharp
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "src/assets");
const outputDir = path.join(inputDir, "optimized");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function convertToWebP(filePath) {
  const outputFile = path.join(
    outputDir,
    path.basename(filePath, path.extname(filePath)) + ".webp"
  );

  try {
    await sharp(filePath).webp({ quality: 80 }).toFile(outputFile);
    console.log(`✅ ${path.basename(filePath)} → compressé en WebP`);
  } catch (err) {
    console.error(`❌ Erreur sur ${filePath}:`, err.message);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      convertToWebP(filePath);
    }
  });
}

walkDir(inputDir);
