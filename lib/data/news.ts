export type NewsCategory =
  | "Announcements"
  | "Admissions"
  | "Academic"
  | "Achievements"
  | "Events"
  | "Student Activities"
  | "Important Notices";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  image: string | null;
  placeholder: boolean;
};

export type SchoolEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  placeholder: boolean;
};

// Real, verified news from SHS's own announcement materials.
export const newsArticles: NewsArticle[] = [
  {
    slug: "fbise-result-2026-congratulations",
    title: "Principal Congratulates Standardians on FBISE Annual Examinations 2026",
    date: "2026",
    category: "Achievements",
    summary:
      "Principal & CEO Aashiq Hussain Bukhari congratulated all Standardians on their outstanding success in the FBISE Annual Examinations 2026.",
    image: "/principle appreciation on result.jpg",
    placeholder: false,
  },
  {
    slug: "matric-result-2026",
    title: "Standard School and College Marks 63 Years With Matric Result 2026",
    date: "2026",
    category: "Achievements",
    summary:
      "37 students achieved an A1 grade and 26 students achieved an A grade in the Federal Board Islamabad Matric Result 2026, led by Zainab Qureshi (1051/1100).",
    image: "/gallery/achievements/matric-result-2026-top-performers.jpg",
    placeholder: false,
  },
  {
    slug: "siit-summer-computer-courses-2026",
    title: "Admissions Open: SIIT Summer Computer Courses 2026 (Batch 2)",
    date: "2026",
    category: "Admissions",
    summary:
      "The Standard Institute of Information Technology (SIIT), a project of Standard Higher Secondary School, has opened Batch 2 registration for AI-driven Web Development, Python Programming, Graphic Designing and more.",
    image: "/news/siit-computer-courses-2026.jpg",
    placeholder: false,
  },
  {
    slug: "standard-college-for-girls-admissions-2026",
    title: "Standard College for Girls: Admissions Open for 2026",
    date: "2026",
    category: "Admissions",
    summary:
      "Standard College for Girls has opened admissions for 2026, offering FSc Pre-Medical, FSc Pre-Engineering, ICS, FA (IT), I.Com and FA Arts for 1st and 2nd Year students.",
    image: "/news/standard-college-for-girls-admissions-2026.jpg",
    placeholder: false,
  },
];

export const events: SchoolEvent[] = [
  {
    id: "shs-fun-fair",
    title: "SHS Annual Fun Fair",
    date: "[Date to be confirmed by SHS]",
    description:
      "Classes hosted themed stalls — including a cafe, snack cart and carnival games — as part of the SHS annual fun fair celebration.",
    location: "Standard Higher Secondary School, Mughalabad Road, Rawalpindi Cantt",
    placeholder: false,
  },
  {
    id: "standup-comedy-night",
    title: "Stand-Up Comedy Night",
    date: "[Date to be confirmed by SHS]",
    description: "Students showcased their comedic talent in a stand-up comedy performance, including a set by Hamza Sheikh.",
    location: "Standard Higher Secondary School, Mughalabad Road, Rawalpindi Cantt",
    placeholder: false,
  },
];
