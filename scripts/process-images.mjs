import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const PUB = path.resolve("public");
const SRC_DIR = path.resolve("assets-source/raw-facebook-images");
const PUB_SRC_DIR = PUB;

// [sourceFilename, destRelativePath, options]
const jobs = [
  // Campus — cropped from the "Free Tutorial Classes" flyer's clean top photo band
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.07 AM (2).jpeg",
    dest: "gallery/campus/campus-courtyard.jpg",
    crop: { top: 0, heightPct: 0.42 },
  },

  // Achievements
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.28 AM (2).jpeg",
    dest: "gallery/achievements/matric-result-2026-top-performers.jpg",
  },
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.29 AM.jpeg",
    dest: "gallery/achievements/matric-result-2026-honor-roll.jpg",
  },
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.28 AM (1).jpeg",
    dest: "gallery/achievements/ssc1-result-2026.jpg",
  },

  // Sports
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.24 AM (2).jpeg",
    dest: "gallery/sports/standard-zalmi-9th-cricket.jpg",
  },
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.25 AM.jpeg",
    dest: "gallery/sports/standard-united-10th-cricket.jpg",
  },

  // Students — certificate/award recognition
  { src: "WhatsApp Image 2026-08-15 at 2.45.00 AM.jpeg", dest: "gallery/students/abdul-hadi-6th.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.00 AM (1).jpeg", dest: "gallery/students/roman-nadeem-6th.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.00 AM (2).jpeg", dest: "gallery/students/maair-faisal-7th.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.02 AM.jpeg", dest: "gallery/students/ghouse-ali-7th.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.02 AM (1).jpeg", dest: "gallery/students/subhan-haider-8th.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.03 AM.jpeg", dest: "gallery/students/m-ubada-8th.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.04 AM.jpeg", dest: "gallery/students/qirrat-qaiser-6th-girls.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.04 AM (1).jpeg", dest: "gallery/students/maha-irfan-6th-girls.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.06 AM.jpeg", dest: "gallery/students/kanza-gillani-7th-girls.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.07 AM.jpeg", dest: "gallery/students/amra-gul-8th-girls.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.07 AM (1).jpeg", dest: "gallery/students/khuzaima-fatima-8th-girls.jpg" },

  // Events
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.25 AM (1).jpeg",
    dest: "gallery/events/standup-comedy-hamza-sheikh.jpg",
  },

  // News/Announcements — verified promotional flyers
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.26 AM.jpeg",
    dest: "news/siit-computer-courses-2026.jpg",
  },
  {
    src: "WhatsApp Image 2026-08-15 at 2.45.26 AM (1).jpeg",
    dest: "news/standard-college-for-girls-admissions-2026.jpg",
  },

  // Celebrations — fun fair stalls + reception
  { src: "WhatsApp Image 2026-08-15 at 2.45.16 AM.jpeg", dest: "gallery/celebrations/fun-fair-6th-red-stall.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.09 AM.jpeg", dest: "gallery/celebrations/fun-fair-munch-cafe-8th-red.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.17 AM (1).jpeg", dest: "gallery/celebrations/fun-fair-seven-red-crunch-cart.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.18 AM (1).jpeg", dest: "gallery/celebrations/fun-fair-throw-the-ball-stall.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.23 AM (1).jpeg", dest: "gallery/celebrations/school-reception-celebration.jpg" },
  { src: "WhatsApp Image 2026-08-15 at 2.45.24 AM (1).jpeg", dest: "gallery/celebrations/welcome-celebration.jpg" },
];

async function run() {
  for (const job of jobs) {
    const srcPath = path.join(SRC_DIR, job.src);
    const destPath = path.join(PUB, job.dest);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    let pipeline = sharp(srcPath).rotate(); // auto-orient via EXIF

    if (job.crop) {
      const meta = await sharp(srcPath).rotate().metadata();
      const height = Math.round((meta.height ?? 0) * job.crop.heightPct);
      pipeline = pipeline.extract({
        left: 0,
        top: job.crop.top,
        width: meta.width ?? 0,
        height,
      });
    }

    await pipeline
      .resize({ width: 1600, withoutEnlargement: true })
      .modulate({ brightness: 1.03, saturation: 1.08 })
      .sharpen({ sigma: 0.6 })
      .jpeg({ quality: 87, mozjpeg: true })
      .toFile(destPath);

    console.log("Processed:", job.dest);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
