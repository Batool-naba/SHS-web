export type Program = {
  slug: string;
  name: string;
  division: string;
  verified: boolean;
  description?: string;
  subjects?: string[];
  futurePathways?: string;
};

// Verified from official SHS/Standard College for Girls admission materials.
// Intermediate (1st/2nd Year) programs are offered through Standard College
// for Girls, a division of Standard Higher Secondary School — do not present
// them as co-ed, since the school's own materials specify "for Girls".
export const programs: Program[] = [
  {
    slug: "matriculation",
    name: "Matriculation (Federal Board)",
    division: "Standard School",
    verified: true,
    description:
      "SHS's school section prepares students for the Matriculation (SSC) examinations under the Federal Board of Intermediate & Secondary Education (FBISE), Islamabad, from Class 6th through Class 10th.",
  },
  {
    slug: "fsc-pre-medical",
    name: "FSc Pre-Medical",
    division: "Standard College for Girls",
    verified: true,
    description: "An intermediate program built around a strong biology foundation for students pursuing a medical career path.",
    subjects: ["Biology", "Chemistry", "Physics", "English"],
    futurePathways: "Prepares students for admission to medical and allied health science programs.",
  },
  {
    slug: "fsc-pre-engineering",
    name: "FSc Pre-Engineering",
    division: "Standard College for Girls",
    verified: true,
    description: "An SLO-based intermediate program preparing students for engineering career paths and university admission.",
    subjects: ["Mathematics", "Physics", "Chemistry", "English"],
    futurePathways: "Prepares students for admission to engineering and technology degree programs.",
  },
  {
    slug: "ics-computer-science",
    name: "ICS (Computer Science)",
    division: "Standard College for Girls",
    verified: true,
    description: "An intermediate program combining computer science fundamentals with practical, career-oriented learning.",
    subjects: ["Computer Science", "Mathematics", "Physics", "English"],
    futurePathways: "Prepares students for technology-focused degree programs and careers.",
  },
  {
    slug: "fa-it",
    name: "FA (IT)",
    division: "Standard College for Girls",
    verified: true,
    description: "An intermediate program blending IT skills and fundamentals with the arts.",
    subjects: ["Computer Science", "Statistics", "Education", "English"],
  },
  {
    slug: "icom",
    name: "I.Com",
    division: "Standard College for Girls",
    verified: true,
    description: "An intermediate commerce program building accounting and business knowledge for a career in business and commerce.",
    subjects: ["Accounting", "Commerce", "Economics", "English"],
  },
  {
    slug: "fa-arts",
    name: "FA Arts",
    division: "Standard College for Girls",
    verified: true,
    description: "An intermediate humanities program developing communication and critical thinking skills.",
    subjects: ["Civics", "Sociology", "Education", "English"],
  },
];
