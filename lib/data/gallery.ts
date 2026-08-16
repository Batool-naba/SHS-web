export type GalleryCategory =
  | "Campus"
  | "Events"
  | "Students"
  | "Achievements"
  | "Sports"
  | "Celebrations";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  caption: string;
  src: string | null;
};

export const galleryCategories: GalleryCategory[] = [
  "Campus",
  "Events",
  "Students",
  "Achievements",
  "Sports",
  "Celebrations",
];

// Real, verified photographs supplied by SHS.
export const galleryItems: GalleryItem[] = [
  {
    id: "hero-campus",
    category: "Campus",
    caption: "Aerial view of the SHS courtyard, Mughalabad Road, Rawalpindi",
    src: "/gallery/campus/hero-campus.jpg",
  },
  {
    id: "campus-courtyard",
    category: "Campus",
    caption: "The SHS courtyard, Mughalabad Road, Rawalpindi",
    src: "/gallery/campus/campus-courtyard.jpg",
  },
  {
    id: "principal-fbise-2026",
    category: "Achievements",
    caption: "Principal & CEO Aashiq Hussain Bukhari congratulates Standardians — FBISE Result 2026",
    src: "/principle appreciation on result.jpg",
  },
  {
    id: "matric-result-2026-top",
    category: "Achievements",
    caption: "Matric Result 2026 (Federal Board Islamabad) — top performers",
    src: "/gallery/achievements/matric-result-2026-top-performers.jpg",
  },
  {
    id: "matric-result-2026-honor-roll",
    category: "Achievements",
    caption: "Matric Result 2026 — full honor roll of A1 & A grade students",
    src: "/gallery/achievements/matric-result-2026-honor-roll.jpg",
  },
  {
    id: "ssc1-result-2026",
    category: "Achievements",
    caption: "SSC-I Result 2026 (Federal Board Islamabad) — top performers",
    src: "/gallery/achievements/ssc1-result-2026.jpg",
  },
  {
    id: "cricket-zalmi-9th",
    category: "Sports",
    caption: "Standard Zalmi — Class 9th Cricket Team",
    src: "/gallery/sports/standard-zalmi-9th-cricket.jpg",
  },
  {
    id: "cricket-united-10th",
    category: "Sports",
    caption: "Standard United — Class 10th Cricket Team",
    src: "/gallery/sports/standard-united-10th-cricket.jpg",
  },
  {
    id: "student-abdul-hadi",
    category: "Students",
    caption: "Abdul Hadi, 6th Class — certificate of recognition",
    src: "/gallery/students/abdul-hadi-6th.jpg",
  },
  {
    id: "student-roman-nadeem",
    category: "Students",
    caption: "Roman Nadeem, 6th Class — certificate of recognition",
    src: "/gallery/students/roman-nadeem-6th.jpg",
  },
  {
    id: "student-maair-faisal",
    category: "Students",
    caption: "Maair Faisal, 7th Class — certificate of recognition",
    src: "/gallery/students/maair-faisal-7th.jpg",
  },
  {
    id: "student-ghouse-ali",
    category: "Students",
    caption: "Ghouse Ali, 7th Class — certificate of recognition",
    src: "/gallery/students/ghouse-ali-7th.jpg",
  },
  {
    id: "student-subhan-haider",
    category: "Students",
    caption: "Subhan Haider, 8th Class (Captain) — certificate of recognition",
    src: "/gallery/students/subhan-haider-8th.jpg",
  },
  {
    id: "student-m-ubada",
    category: "Students",
    caption: "M. Ubada, 8th Class — certificate of recognition",
    src: "/gallery/students/m-ubada-8th.jpg",
  },
  {
    id: "student-qirrat-qaiser",
    category: "Students",
    caption: "Qirrat Qaiser, 6th Class Girls — certificate of recognition",
    src: "/gallery/students/qirrat-qaiser-6th-girls.jpg",
  },
  {
    id: "student-maha-irfan",
    category: "Students",
    caption: "Maha Irfan, 6th Class Girls — certificate of recognition",
    src: "/gallery/students/maha-irfan-6th-girls.jpg",
  },
  {
    id: "student-kanza-gillani",
    category: "Students",
    caption: "Kanza Gillani, 7th Class Girls — certificate of recognition",
    src: "/gallery/students/kanza-gillani-7th-girls.jpg",
  },
  {
    id: "student-amra-gul",
    category: "Students",
    caption: "Amra Gul, 8th Class Girls — certificate of recognition",
    src: "/gallery/students/amra-gul-8th-girls.jpg",
  },
  {
    id: "student-khuzaima-fatima",
    category: "Students",
    caption: "Khuzaima Fatima, 8th Class Girls — certificate of recognition",
    src: "/gallery/students/khuzaima-fatima-8th-girls.jpg",
  },
  {
    id: "standup-comedy",
    category: "Events",
    caption: "Stand-up comedy performance by Hamza Sheikh",
    src: "/gallery/events/standup-comedy-hamza-sheikh.jpg",
  },
  {
    id: "fun-fair-6th-red",
    category: "Celebrations",
    caption: "6th Red stall at the SHS fun fair",
    src: "/gallery/celebrations/fun-fair-6th-red-stall.jpg",
  },
  {
    id: "fun-fair-munch-cafe",
    category: "Celebrations",
    caption: "\"Munch Cafe\" stall by 8th Red, run by Mam Roqia's class",
    src: "/gallery/celebrations/fun-fair-munch-cafe-8th-red.jpg",
  },
  {
    id: "fun-fair-crunch-cart",
    category: "Celebrations",
    caption: "\"The Crunch Cart\" stall by 7th Red at the SHS fun fair",
    src: "/gallery/celebrations/fun-fair-seven-red-crunch-cart.jpg",
  },
  {
    id: "fun-fair-throw-the-ball",
    category: "Celebrations",
    caption: "\"Throw the Ball\" game stall at the SHS fun fair",
    src: "/gallery/celebrations/fun-fair-throw-the-ball-stall.jpg",
  },
  {
    id: "school-reception",
    category: "Celebrations",
    caption: "A festive reception celebration at the SHS gate",
    src: "/gallery/celebrations/school-reception-celebration.jpg",
  },
  {
    id: "welcome-celebration",
    category: "Celebrations",
    caption: "A student welcomed with flowers at an SHS celebration",
    src: "/gallery/celebrations/welcome-celebration.jpg",
  },
];
