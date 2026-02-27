#!/usr/bin/env node
/**
 * Compress videos to under 100MB for GitHub
 * Uses ffmpeg-static (bundled ffmpeg)
 */
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const ffmpegPath = require('ffmpeg-static');
const VIDEOS_DIR = path.join(__dirname, '../src/assets/videos');
const MAX_MB = 95;

const videos = [
  'Demo-Final.mp4',
  'toastmasters-leadership-journey.mp4',
];

function getSizeMB(filePath) {
  const stat = fs.statSync(filePath);
  return (stat.size / 1024 / 1024).toFixed(2);
}

for (const name of videos) {
  const inputPath = path.join(VIDEOS_DIR, name);
  const baseName = path.basename(name, '.mp4');
  const outputPath = path.join(VIDEOS_DIR, `${baseName}-compressed.mp4`);

  if (!fs.existsSync(inputPath)) {
    console.log(`Skip ${name}: file not found`);
    continue;
  }

  const sizeMB = getSizeMB(inputPath);
  console.log(`\nCompressing ${name} (${sizeMB} MB)...`);

  // CRF 32, scale to 720p, H.264 - target under 95MB
  // -movflags +faststart moves moov atom to start for faster web playback
  const cmd = `"${ffmpegPath}" -y -i "${inputPath}" -c:v libx264 -crf 32 -preset medium -vf "scale=-2:720" -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`;
  
  try {
    execSync(cmd, { stdio: 'inherit', shell: true });
    const outMB = getSizeMB(outputPath);
    console.log(`  Done: ${outMB} MB`);
    if (parseFloat(outMB) < MAX_MB) {
      try {
        // On Windows, fs.renameSync cannot overwrite an existing file.
        // Use copy-then-delete to reliably replace the original.
        fs.copyFileSync(outputPath, inputPath);
        fs.unlinkSync(outputPath);
        console.log(`  Replaced original.`);
      } catch (replaceErr) {
        console.error(`  Failed to replace original with compressed file: ${replaceErr.message}`);
        // Best-effort cleanup of the temporary compressed file.
        try {
          if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath);
          }
        } catch (_) {
          // Ignore cleanup errors.
        }
      }
    } else {
      console.log(`  Still over ${MAX_MB}MB - keeping both. Try higher CRF.`);
    }
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }
}
