export type AchievementCategory = "Academic" | "Sports" | "Co-Curricular" | "Student Recognition";

export type Achievement = {
  id: string;
  category: AchievementCategory;
  year: string;
  title: string;
  description: string;
  image: string | null;
  verified: boolean;
};

// Only verified achievements appear here. Add more as SHS supplies them —
// never invent results, positions or student names.
export const achievements: Achievement[] = [
  {
    id: "fbise-result-2026",
    category: "Academic",
    year: "2026",
    title: "FBISE Annual Examinations 2026",
    description:
      "Principal & CEO Aashiq Hussain Bukhari congratulated Standardians on their outstanding success in the FBISE Annual Examinations 2026.",
    image: "/principle appreciation on result.jpg",
    verified: true,
  },
  {
    id: "matric-result-2026",
    category: "Academic",
    year: "2026",
    title: "Matric Result 2026 — Federal Board Islamabad",
    description:
      "37 students achieved an A1 grade and 26 students achieved an A grade, led by Zainab Qureshi (1051/1100) and Misbah Mubeen (1044/1100), marking 63 years of academic excellence for Standard School and College.",
    image: "/gallery/achievements/matric-result-2026-top-performers.jpg",
    verified: true,
  },
  {
    id: "ssc1-result-2026",
    category: "Academic",
    year: "2026",
    title: "SSC-I Result 2026 — Federal Board Islamabad",
    description:
      "Standard School and College recognized its top SSC-I performers, led by Muhammad Ubada (537/555) and Waniya Abbas (529/555).",
    image: "/gallery/achievements/ssc1-result-2026.jpg",
    verified: true,
  },
];
