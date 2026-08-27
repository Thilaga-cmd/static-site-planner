export type Journey = {
  key: string;
  title: string;
  summary: string;
  steps: { name: string; detail: string }[];
};

export const journeys: Journey[] = [
  {
    key: "parent",
    title: "Parent & student journey",
    summary: "From the first website visit to a renewed enrolment, with a diagnostic in the middle rather than a sales pitch.",
    steps: [
      { name: "Website", detail: "Parent finds a programme page and reads outcomes, mode, duration and fees." },
      { name: "Enquiry", detail: "The enquiry form captures the learning problem, not just contact details." },
      { name: "CRM lead", detail: "A lead is created with a source, an owner and an activity timeline." },
      { name: "Counselling", detail: "Needs analysis call to understand history, school and constraints." },
      { name: "Diagnostic assessment", detail: "Baseline across academics, foundation skills, learning skills and interests." },
      { name: "Learning profile", detail: "Current level, strengths, gaps and interests generated from the assessment." },
      { name: "Programme recommendation", detail: "A recommendation a human coordinator reviews before it reaches the parent." },
      { name: "Payment", detail: "Invoice, discount or scholarship, then payment against the enrolment." },
      { name: "Enrolment", detail: "Batch allocation, teacher assignment, schedule issued." },
      { name: "Classes", detail: "Attendance, lessons, homework, assessments." },
      { name: "Progress tracking", detail: "Weekly, monthly and quarterly level movement on the growth profile." },
      { name: "Parent dashboard", detail: "One place for attendance, results, feedback, fees and reports." },
      { name: "Renewal", detail: "Renewal conversation driven by evidence of progress." },
    ],
  },
  {
    key: "teacher",
    title: "Teacher journey",
    summary: "A marketplace with a gate: nobody teaches a Charithra learner without verification and a demo.",
    steps: [
      { name: "Application", detail: "Teacher applies with qualification, subjects, availability and service area." },
      { name: "Profile", detail: "Profile built with languages, modes, timings and expected fee." },
      { name: "Assessment", detail: "Subject and pedagogy assessment scored against a role template." },
      { name: "Verification", detail: "Identity, qualification and background verification." },
      { name: "Demo", detail: "Observed demo class with a rubric-based score." },
      { name: "Approval", detail: "Academic head approves and sets the teacher's active subjects and levels." },
      { name: "Training", detail: "Charithra teaching method, reporting standards and communication norms." },
      { name: "Student matching", detail: "Match score computed on subject, timing, location, experience and budget." },
      { name: "Assignment", detail: "Admin approves the final assignment; the teacher accepts." },
      { name: "Session management", detail: "Check-in, teach, check-out, submit the session report." },
      { name: "Performance review", detail: "Rating, reporting timeliness, student progress, parent feedback." },
    ],
  },
  {
    key: "staff",
    title: "Staff journey",
    summary: "Staff are onboarded, assessed and measured the same way students are — and are expected to contribute systems back.",
    steps: [
      { name: "Application", detail: "Role application against a defined role profile." },
      { name: "Baseline assessment", detail: "Role knowledge, communication, problem solving, technology, execution." },
      { name: "Onboarding academy", detail: "Twelve modules from vision and values to documentation standards." },
      { name: "Role assignment", detail: "Permissions granted per capability, scoped to branch." },
      { name: "Tasks", detail: "My Workspace with tasks, due dates, priorities and approvals." },
      { name: "KPI", detail: "Role-specific KPIs tracked monthly." },
      { name: "Performance review", detail: "Ten-dimension scorecard, monthly and quarterly." },
      { name: "System contribution", detail: "SOPs, automations and process improvements through a pilot workflow." },
      { name: "Strategy contribution", detail: "Strategy submissions with problem, plan, timeline and KPI." },
      { name: "Growth", detail: "Development plan derived from the gaps the scorecard exposes." },
    ],
  },
];

export const diagnosticFlow = [
  { step: "Diagnose", detail: "Baseline the learner across academics, foundation skills, learning skills and interests." },
  { step: "Understand", detail: "Turn raw scores into a readable learning profile: level, strengths, gaps." },
  { step: "Personalise", detail: "Recommend a programme and learning path matched to those gaps." },
  { step: "Teach", detail: "Deliver at the centre, online or at home with a matched teacher." },
  { step: "Assess", detail: "Regular checkpoints — unit tests, quizzes, fluency checks." },
  { step: "Track", detail: "Level movement, attendance, homework and growth dimensions over time." },
  { step: "Improve", detail: "Adjust the path from evidence, every month." },
];

export const staffModules = [
  "Welcome to Charithra",
  "Vision and Mission",
  "Organisational Values",
  "Student-first philosophy",
  "Communication standards",
  "Parent communication",
  "CRM training",
  "Operations training",
  "Role-specific training",
  "Problem solving",
  "System creation",
  "Documentation standards",
];
