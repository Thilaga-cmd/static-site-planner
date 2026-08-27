export const growthDimensions = [
  "Academic Skills",
  "Communication",
  "Problem Solving",
  "Analytical Thinking",
  "Creativity",
  "Collaboration",
  "Leadership",
  "Emotional Development",
  "Discipline",
  "Responsibility",
] as const;

export type Student = {
  id: string;
  name: string;
  standard: string;
  board: string;
  programme: string;
  centre: string;
  parent: string;
  joinedOn: string;
  attendance: number;
  homeworkCompletion: number;
  startingLevel: string;
  currentLevel: string;
  targetLevel: string;
  riskLevel: "Low" | "Medium" | "High";
  strengths: string[];
  gaps: string[];
  interests: string[];
  recommendedProgramme: string;
  growth: { dimension: (typeof growthDimensions)[number]; score: number }[];
  tests: { name: string; date: string; score: number; max: number }[];
  attendanceTrend: { month: string; value: number }[];
  teacherFeedback: { at: string; teacher: string; note: string }[];
  aiInsights: { headline: string; detail: string; period: string; metrics: string; confidence: "Low" | "Medium" | "High" }[];
};

const g = (values: number[]) =>
  growthDimensions.map((dimension, i) => ({ dimension, score: values[i] ?? 50 }));

export const students: Student[] = [
  {
    id: "CLH-S-2201",
    name: "Karthikeyan R",
    standard: "Class 10",
    board: "State Board",
    programme: "10th Standard Programme",
    centre: "Madurai — Anna Nagar",
    parent: "Ramesh Kumar",
    joinedOn: "2026-08-20",
    attendance: 86,
    homeworkCompletion: 72,
    startingLevel: "Level 3 — Below grade",
    currentLevel: "Level 4 — Approaching grade",
    targetLevel: "Level 6 — Grade secure",
    riskLevel: "Medium",
    strengths: ["Geometry reasoning", "Verbal explanation of steps", "Attends consistently"],
    gaps: ["Fractions and ratios", "Speed under timed conditions", "Careless sign errors"],
    interests: ["Cricket", "Mobile technology", "Drawing"],
    recommendedProgramme: "Maths Foundation Recovery (parallel track)",
    growth: g([58, 64, 55, 52, 70, 66, 48, 62, 74, 68]),
    tests: [
      { name: "Baseline Diagnostic", date: "18 Aug", score: 42, max: 100 },
      { name: "Unit Test 1 — Algebra", date: "31 Aug", score: 51, max: 100 },
      { name: "Unit Test 2 — Geometry", date: "14 Sep", score: 63, max: 100 },
      { name: "Monthly Review", date: "28 Sep", score: 66, max: 100 },
    ],
    attendanceTrend: [
      { month: "Sep", value: 94 },
      { month: "Oct", value: 90 },
      { month: "Nov", value: 88 },
      { month: "Dec", value: 82 },
      { month: "Jan", value: 86 },
    ],
    teacherFeedback: [
      { at: "14 Sep", teacher: "Arun M", note: "Much stronger in geometry. Still avoids fraction questions." },
      { at: "28 Sep", teacher: "Arun M", note: "Completed extra practice set without being asked. Good sign." },
    ],
    aiInsights: [
      {
        headline: "Fraction fundamentals remain the primary blocker",
        detail:
          "Errors cluster on questions requiring fraction or ratio manipulation, across otherwise unrelated topics. A short foundation track is likely to unlock grade-level performance faster than more Class 10 practice.",
        period: "18 Aug – 28 Sep",
        metrics: "31 of 44 incorrect answers involved a fraction or ratio step",
        confidence: "High",
      },
      {
        headline: "Attendance dipped in December",
        detail: "Attendance fell to 82% in December before recovering. Worth a parent check-in to confirm the cause.",
        period: "Last 5 months",
        metrics: "94% → 82% → 86%",
        confidence: "Medium",
      },
    ],
  },
  {
    id: "CLH-S-2202",
    name: "Meenakshi P",
    standard: "Class 8",
    board: "State Board",
    programme: "English Reading & Writing Basics",
    centre: "Madurai — K K Nagar",
    parent: "Priya Lakshmi",
    joinedOn: "2026-08-19",
    attendance: 96,
    homeworkCompletion: 91,
    startingLevel: "Level 2 — Foundation gap",
    currentLevel: "Level 4 — Approaching grade",
    targetLevel: "Level 5 — Grade ready",
    riskLevel: "Low",
    strengths: ["Highly consistent attendance", "Strong listening comprehension", "Asks questions"],
    gaps: ["Reading speed", "Spelling of multisyllable words"],
    interests: ["Storytelling", "Art", "Music"],
    recommendedProgramme: "Continue current programme; add Future Skills communication",
    growth: g([62, 78, 60, 58, 82, 74, 60, 76, 88, 84]),
    tests: [
      { name: "Baseline Reading Fluency", date: "17 Aug", score: 38, max: 100 },
      { name: "Comprehension Check 1", date: "05 Sep", score: 55, max: 100 },
      { name: "Comprehension Check 2", date: "26 Sep", score: 68, max: 100 },
    ],
    attendanceTrend: [
      { month: "Sep", value: 98 },
      { month: "Oct", value: 96 },
      { month: "Nov", value: 97 },
      { month: "Dec", value: 93 },
      { month: "Jan", value: 96 },
    ],
    teacherFeedback: [
      { at: "05 Sep", teacher: "Kavitha R", note: "Reading aloud with far more confidence than in week one." },
    ],
    aiInsights: [
      {
        headline: "Reading fluency improved approximately 18%",
        detail:
          "Measured words-per-minute with comprehension retained has risen steadily. On the current trajectory the learner reaches grade level within two months.",
        period: "17 Aug – 26 Sep",
        metrics: "Fluency score 38 → 68 across three checks",
        confidence: "High",
      },
    ],
  },
  {
    id: "CLH-S-2203",
    name: "Aravind S",
    standard: "Class 11",
    board: "CBSE",
    programme: "Future 12th Standard Programme",
    centre: "Online",
    parent: "Selvam T",
    joinedOn: "2026-08-25",
    attendance: 64,
    homeworkCompletion: 45,
    startingLevel: "Level 5 — Grade ready",
    currentLevel: "Level 5 — Grade ready",
    targetLevel: "Level 7 — Advanced",
    riskLevel: "High",
    strengths: ["Strong conceptual physics", "Quick with new material"],
    gaps: ["Homework completion", "Session attendance", "Consistency"],
    interests: ["Technology", "Entrepreneurship", "Gaming"],
    recommendedProgramme: "Add one-to-one accountability sessions",
    growth: g([72, 58, 76, 78, 68, 44, 52, 50, 38, 42]),
    tests: [
      { name: "Baseline Diagnostic", date: "22 Aug", score: 71, max: 100 },
      { name: "Physics Unit 1", date: "10 Sep", score: 66, max: 100 },
      { name: "Maths Unit 1", date: "24 Sep", score: 58, max: 100 },
    ],
    attendanceTrend: [
      { month: "Sep", value: 88 },
      { month: "Oct", value: 79 },
      { month: "Nov", value: 71 },
      { month: "Dec", value: 66 },
      { month: "Jan", value: 64 },
    ],
    teacherFeedback: [
      { at: "24 Sep", teacher: "Suresh B", note: "Capable of far more. Missing sessions is the real issue." },
    ],
    aiInsights: [
      {
        headline: "Sustained attendance decline over five months",
        detail:
          "Attendance has fallen every month since joining while test scores drift downward in step. This learner is flagged at-risk and should be reviewed by the centre manager.",
        period: "Last 5 months",
        metrics: "Attendance 88% → 64%; homework completion 45%",
        confidence: "High",
      },
    ],
  },
  {
    id: "CLH-S-2204",
    name: "Sowmiya K",
    standard: "Class 10",
    board: "State Board",
    programme: "10th Standard Programme",
    centre: "Madurai — Sellur",
    parent: "Kalaiselvi M",
    joinedOn: "2026-08-13",
    attendance: 99,
    homeworkCompletion: 97,
    startingLevel: "Level 4 — Approaching grade",
    currentLevel: "Level 6 — Grade secure",
    targetLevel: "Level 7 — Advanced",
    riskLevel: "Low",
    strengths: ["Exceptional discipline", "Tamil literature", "Peer support"],
    gaps: ["Science numericals"],
    interests: ["Reading", "Debate", "Teaching others"],
    recommendedProgramme: "Advanced enrichment track",
    growth: g([84, 82, 78, 80, 72, 88, 80, 82, 96, 94]),
    tests: [
      { name: "Baseline Diagnostic", date: "10 Aug", score: 64, max: 100 },
      { name: "Unit Test 1", date: "31 Aug", score: 78, max: 100 },
      { name: "Unit Test 2", date: "14 Sep", score: 85, max: 100 },
      { name: "Monthly Review", date: "28 Sep", score: 88, max: 100 },
    ],
    attendanceTrend: [
      { month: "Sep", value: 100 },
      { month: "Oct", value: 98 },
      { month: "Nov", value: 100 },
      { month: "Dec", value: 97 },
      { month: "Jan", value: 99 },
    ],
    teacherFeedback: [{ at: "28 Sep", teacher: "Arun M", note: "Ready for the advanced set. Recommend enrichment." }],
    aiInsights: [
      {
        headline: "Consistent upward trajectory across all subjects",
        detail: "Scores have risen at every checkpoint with near-perfect attendance. Candidate for the advanced track.",
        period: "10 Aug – 28 Sep",
        metrics: "64 → 88 across four assessments",
        confidence: "High",
      },
    ],
  },
  {
    id: "CLH-S-2205",
    name: "Nithya B",
    standard: "Class 6",
    board: "Matriculation",
    programme: "Maths Foundation Recovery",
    centre: "Home Tuition — Villapuram",
    parent: "Bhuvana R",
    joinedOn: "2026-08-27",
    attendance: 92,
    homeworkCompletion: 80,
    startingLevel: "Level 2 — Foundation gap",
    currentLevel: "Level 3 — Below grade",
    targetLevel: "Level 5 — Grade ready",
    riskLevel: "Low",
    strengths: ["Willing to practise", "Good memory for tables once drilled"],
    gaps: ["Division", "Word problems"],
    interests: ["Dance", "Science experiments"],
    recommendedProgramme: "Continue recovery track for 3 more months",
    growth: g([48, 60, 46, 44, 68, 62, 44, 66, 78, 70]),
    tests: [
      { name: "Baseline Diagnostic", date: "27 Aug", score: 29, max: 100 },
      { name: "Tables Fluency Check", date: "20 Sep", score: 55, max: 100 },
    ],
    attendanceTrend: [
      { month: "Sep", value: 95 },
      { month: "Oct", value: 91 },
      { month: "Nov", value: 90 },
      { month: "Dec", value: 88 },
      { month: "Jan", value: 92 },
    ],
    teacherFeedback: [{ at: "20 Sep", teacher: "Lakshmi V", note: "Tables improving fast. Division next." }],
    aiInsights: [
      {
        headline: "Tables fluency nearly doubled",
        detail: "Drill-based practice is working. Recommend moving to division before word problems.",
        period: "27 Aug – 20 Sep",
        metrics: "29 → 55 on fluency checks",
        confidence: "Medium",
      },
    ],
  },
];

export const getStudent = (id: string) => students.find((s) => s.id === id);
