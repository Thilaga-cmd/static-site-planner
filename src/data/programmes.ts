import heroLearning from "@/assets/hero-learning.jpg";
import programmeTamil from "@/assets/programme-tamil.jpg";
import programmeOnline from "@/assets/programme-online.jpg";
import programmeHome from "@/assets/programme-home.jpg";

export type ProgrammeCategory =
  | "Academic Learning"
  | "Foundation Recovery"
  | "One-to-One Learning"
  | "Online Learning"
  | "Home Tuition"
  | "Future Skills"
  | "Tamil Academy";

export const programmeCategories: ProgrammeCategory[] = [
  "Academic Learning",
  "Foundation Recovery",
  "One-to-One Learning",
  "Online Learning",
  "Home Tuition",
  "Future Skills",
  "Tamil Academy",
];

export type Programme = {
  slug: string;
  name: string;
  category: ProgrammeCategory;
  tagline: string;
  overview: string;
  audience: string[];
  outcomes: string[];
  duration: string;
  mode: string;
  feeLabel: string;
  batches: { name: string; timing: string; seats: number }[];
  image: string;
};

export const programmes: Programme[] = [
  {
    slug: "tenth-standard-programme",
    name: "10th Standard Programme",
    category: "Academic Learning",
    tagline: "Board-year coaching built on a real diagnostic, not a guess.",
    overview:
      "A full board-year programme for Class 10 students. Every learner starts with a baseline diagnostic across Maths, Science, English and Tamil, and is placed on a study path matched to the gaps that diagnostic finds — not to the class average.",
    audience: [
      "Class 10 students across State Board, CBSE and ICSE",
      "Students who scored below expectation in Class 9",
      "Students who need structure and weekly accountability",
    ],
    outcomes: [
      "Complete syllabus coverage with topic-level mastery tracking",
      "Weekly practice tests with error-pattern analysis",
      "Board-pattern model exams with timed conditions",
      "A monthly parent progress report reviewed by a teacher",
    ],
    duration: "10 months",
    mode: "Centre / Online / Hybrid",
    feeLabel: "From ₹2,400 per month",
    batches: [
      { name: "Morning Batch", timing: "Mon–Sat · 6:30–8:00 AM", seats: 6 },
      { name: "Evening Batch", timing: "Mon–Sat · 5:30–7:00 PM", seats: 3 },
      { name: "Weekend Intensive", timing: "Sat–Sun · 9:00 AM–12:00 PM", seats: 11 },
    ],
    image: heroLearning,
  },
  {
    slug: "future-twelfth-programme",
    name: "Future 12th Standard Programme",
    category: "Academic Learning",
    tagline: "Two-year higher secondary track with career mapping built in.",
    overview:
      "A two-year Class 11–12 track that combines board preparation with early stream and career mapping, so subject choices are made from evidence rather than from pressure.",
    audience: [
      "Students entering Class 11",
      "Students choosing between science, commerce and arts streams",
      "Students preparing for competitive entrance alongside boards",
    ],
    outcomes: [
      "Stream fit report based on aptitude and interest mapping",
      "Board syllabus mastery with quarterly milestone exams",
      "Study-skills and exam-temperament coaching",
      "Career pathway review each semester",
    ],
    duration: "24 months",
    mode: "Centre / Hybrid",
    feeLabel: "From ₹3,200 per month",
    batches: [
      { name: "Science Track", timing: "Mon–Sat · 6:00–8:00 PM", seats: 8 },
      { name: "Commerce Track", timing: "Mon–Fri · 5:00–7:00 PM", seats: 12 },
    ],
    image: heroLearning,
  },
  {
    slug: "maths-foundation-recovery",
    name: "Maths Foundation Recovery",
    category: "Foundation Recovery",
    tagline: "Rebuild tables, arithmetic and number sense before anything else.",
    overview:
      "Most students who struggle in Class 8–10 Maths are not failing the current syllabus — they are carrying a gap from Class 4–6. This programme finds that gap and closes it, then reconnects the student to their current class work.",
    audience: [
      "Students who avoid Maths or freeze during tests",
      "Students weak in tables, fractions and basic operations",
      "Any learner flagged 'foundation gap' by the diagnostic",
    ],
    outcomes: [
      "Fluency in tables, arithmetic and fractions",
      "Confidence with word problems and multi-step reasoning",
      "A measured level change on the Charithra level scale",
      "Reintegration plan back into the grade-level programme",
    ],
    duration: "3–6 months",
    mode: "Centre / One-to-One",
    feeLabel: "From ₹1,800 per month",
    batches: [
      { name: "Recovery Group A", timing: "Mon/Wed/Fri · 4:30–5:45 PM", seats: 4 },
      { name: "Recovery Group B", timing: "Tue/Thu/Sat · 4:30–5:45 PM", seats: 7 },
    ],
    image: heroLearning,
  },
  {
    slug: "english-reading-writing",
    name: "English Reading & Writing Basics",
    category: "Foundation Recovery",
    tagline: "From decoding words to writing a confident paragraph.",
    overview:
      "A structured reading and writing programme for learners whose English foundation was never fully built. Phonics, fluency, comprehension and written expression, in that order.",
    audience: [
      "Students who read slowly or hesitantly",
      "Students who understand but cannot write answers",
      "First-generation English learners",
    ],
    outcomes: [
      "Measured reading fluency improvement",
      "Comprehension strategies for unseen passages",
      "Paragraph and answer-writing structure",
      "Spoken confidence in classroom settings",
    ],
    duration: "4 months",
    mode: "Centre / Online",
    feeLabel: "From ₹1,600 per month",
    batches: [{ name: "Reading Lab", timing: "Mon–Thu · 4:00–5:00 PM", seats: 9 }],
    image: heroLearning,
  },
  {
    slug: "one-to-one-learning",
    name: "One-to-One Learning",
    category: "One-to-One Learning",
    tagline: "A single teacher, a single plan, fully matched to one learner.",
    overview:
      "For learners who need undivided attention. The student requirement form and teacher profile are matched on subject, level, timing, language, location and budget, and every assignment is reviewed by an academic coordinator before it starts.",
    audience: [
      "Students with a large gap to close in a short time",
      "Students who cannot keep pace in a group",
      "Students with specific single-subject needs",
    ],
    outcomes: [
      "A fully personalised lesson plan",
      "Session-by-session teacher notes and homework",
      "Fortnightly parent review call",
      "Flexible rescheduling within the month",
    ],
    duration: "Flexible · monthly renewal",
    mode: "Centre / Online / At home",
    feeLabel: "From ₹450 per session",
    batches: [{ name: "Scheduled per learner", timing: "Agreed at enrolment", seats: 20 }],
    image: programmeHome,
  },
  {
    slug: "online-learning",
    name: "Online Learning",
    category: "Online Learning",
    tagline: "Live classes, recorded lessons and tracked practice in one place.",
    overview:
      "The full Charithra academic path delivered online, with live classes, recorded lesson libraries, assignments, quizzes and the same progress tracking parents see at the centre.",
    audience: [
      "Families outside our centre catchment",
      "Students with travel or timing constraints",
      "Students who want to revise from recorded lessons",
    ],
    outcomes: [
      "Live class attendance and participation tracking",
      "Watch progress and completion percentage per lesson",
      "Auto-graded quizzes with topic-level analytics",
      "Same monthly progress report as centre learners",
    ],
    duration: "Aligned to chosen programme",
    mode: "Online",
    feeLabel: "From ₹1,500 per month",
    batches: [
      { name: "IST Evening", timing: "Mon–Fri · 7:00–8:30 PM", seats: 24 },
      { name: "Gulf Timing", timing: "Mon–Fri · 8:30–10:00 PM IST", seats: 15 },
    ],
    image: programmeOnline,
  },
  {
    slug: "home-tuition",
    name: "Home Tuition Network",
    category: "Home Tuition",
    tagline: "Verified teachers at your door, with sessions actually monitored.",
    overview:
      "A managed home tuition service. Teachers are verified, demo-assessed and matched to your requirement. Every session is checked in and checked out, and a session report goes to the parent afterwards.",
    audience: [
      "Parents who prefer learning at home",
      "Younger learners who travel poorly",
      "Families needing flexible evening slots",
    ],
    outcomes: [
      "Verified, background-checked teachers",
      "Check-in / check-out session attendance",
      "Topics covered and homework logged per session",
      "Parent review after every session report",
    ],
    duration: "Monthly renewal",
    mode: "At home",
    feeLabel: "From ₹500 per session",
    batches: [{ name: "Scheduled per family", timing: "Agreed at assignment", seats: 30 }],
    image: programmeHome,
  },
  {
    slug: "future-skills",
    name: "Future Skills Academy",
    category: "Future Skills",
    tagline: "Communication, thinking, technology and entrepreneurship.",
    overview:
      "A skills track that runs alongside academics: spoken communication, critical thinking, digital literacy, financial basics and entrepreneurial projects. Assessed on the Charithra growth dimensions, not on marks.",
    audience: [
      "Students in Class 6–12",
      "Learners strong academically but weak in expression",
      "Students interested in building and creating",
    ],
    outcomes: [
      "Public speaking and structured argument",
      "Digital tools and safe internet practice",
      "A completed team project each term",
      "Growth-dimension scorecard reviewed by a mentor",
    ],
    duration: "6 months per term",
    mode: "Centre / Online",
    feeLabel: "From ₹1,200 per month",
    batches: [{ name: "Saturday Studio", timing: "Sat · 10:00 AM–1:00 PM", seats: 14 }],
    image: heroLearning,
  },
  {
    slug: "tamil-academy",
    name: "Charithra Tamil Academy",
    category: "Tamil Academy",
    tagline: "Read, write and love Tamil — from letters to literature.",
    overview:
      "A dedicated Tamil track covering script, grammar, literature and spoken fluency, for learners in Tamil-medium schools, English-medium schools and Tamil families abroad.",
    audience: [
      "Students weak in Tamil script or grammar",
      "English-medium students taking Tamil as second language",
      "Tamil diaspora families teaching children the language",
    ],
    outcomes: [
      "Confident reading and handwriting in Tamil script",
      "Grammar mastery for the school syllabus",
      "Exposure to classical and modern Tamil literature",
      "Spoken fluency and recitation confidence",
    ],
    duration: "Ongoing · term based",
    mode: "Centre / Online",
    feeLabel: "From ₹1,400 per month",
    batches: [
      { name: "Beginner Script", timing: "Tue/Thu · 5:00–6:00 PM", seats: 10 },
      { name: "Literature Circle", timing: "Sun · 9:00–11:00 AM", seats: 6 },
    ],
    image: programmeTamil,
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);

export { heroLearning, programmeTamil, programmeOnline, programmeHome };
