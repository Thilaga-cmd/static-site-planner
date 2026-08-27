export const kpis = [
  { label: "Total leads (MTD)", value: "184", delta: "+12.4%", trend: "up" as const },
  { label: "Conversion rate", value: "31.5%", delta: "+2.1 pts", trend: "up" as const },
  { label: "Active students", value: "412", delta: "+18", trend: "up" as const },
  { label: "New admissions (MTD)", value: "58", delta: "+6", trend: "up" as const },
  { label: "Revenue (MTD)", value: "₹9.42L", delta: "+8.7%", trend: "up" as const },
  { label: "Pending fees", value: "₹1.86L", delta: "-4.2%", trend: "down" as const },
  { label: "Attendance rate", value: "89.3%", delta: "-1.4 pts", trend: "down" as const },
  { label: "Avg. lead response", value: "3h 12m", delta: "+41m", trend: "down" as const },
];

export const revenueByMonth = [
  { month: "Sep", revenue: 6.1, pending: 1.4 },
  { month: "Oct", revenue: 6.9, pending: 1.7 },
  { month: "Nov", revenue: 7.6, pending: 1.5 },
  { month: "Dec", revenue: 8.2, pending: 2.1 },
  { month: "Jan", revenue: 8.7, pending: 1.9 },
  { month: "Feb", revenue: 9.4, pending: 1.86 },
];

export const admissionsFunnel = [
  { stage: "Leads", count: 184 },
  { stage: "Contacted", count: 151 },
  { stage: "Assessed", count: 104 },
  { stage: "Demo", count: 82 },
  { stage: "Enrolled", count: 58 },
];

export const programmeMix = [
  { name: "10th Standard", students: 128 },
  { name: "Foundation Recovery", students: 96 },
  { name: "Tamil Academy", students: 74 },
  { name: "Online Learning", students: 58 },
  { name: "Home Tuition", students: 34 },
  { name: "Future Skills", students: 22 },
];

export const orgInsights = [
  {
    category: "Student risk",
    headline: "12 students show declining attendance",
    detail:
      "Attendance dropped more than 10 points month-on-month for 12 learners, concentrated in the online evening batches.",
    period: "Last 30 days",
    metrics: "12 of 412 active students · avg drop 13.4 pts",
    confidence: "High" as const,
  },
  {
    category: "Revenue",
    headline: "Foundation Maths has the highest conversion rate",
    detail:
      "Leads recommended into Foundation Recovery convert at 44%, well above the 31.5% overall rate. Worth more outreach spend.",
    period: "Last 90 days",
    metrics: "44.1% conversion on 88 recommendations",
    confidence: "High" as const,
  },
  {
    category: "Operations",
    headline: "Average lead response time increased this week",
    detail:
      "First-response time rose from 2h 31m to 3h 12m. The increase is concentrated on leads created after 6 PM.",
    period: "Last 7 days vs prior 7 days",
    metrics: "2h 31m → 3h 12m (+41m)",
    confidence: "Medium" as const,
  },
  {
    category: "Staff",
    headline: "Staff training completion is below target",
    detail: "Onboarding Academy completion sits at 63% against a 85% target for the quarter.",
    period: "Quarter to date",
    metrics: "63% vs 85% target · 9 staff behind",
    confidence: "High" as const,
  },
  {
    category: "Teacher",
    headline: "Strong satisfaction, delayed session reporting",
    detail:
      "One teacher holds a 4.8 parent rating but submits session reports an average of 2.4 days late, which delays parent visibility.",
    period: "Last 60 days",
    metrics: "Rating 4.8 · avg report delay 2.4 days",
    confidence: "Medium" as const,
  },
];

export const atRiskStudents = [
  { id: "CLH-S-2203", name: "Aravind S", standard: "Class 11", attendance: 64, homework: 45, reason: "Attendance decline 5 months" },
  { id: "CLH-S-2211", name: "Prakash D", standard: "Class 9", attendance: 68, homework: 52, reason: "Missed 3 consecutive tests" },
  { id: "CLH-S-2219", name: "Anitha M", standard: "Class 10", attendance: 71, homework: 60, reason: "Score drop 14 pts" },
  { id: "CLH-S-2226", name: "Vignesh K", standard: "Class 7", attendance: 74, homework: 38, reason: "Homework completion low" },
];

export const feeRecords = [
  { invoice: "INV-4410", student: "Karthikeyan R", programme: "10th Standard", amount: 2400, paid: 2400, due: "05 Aug", status: "Paid" },
  { invoice: "INV-4411", student: "Meenakshi P", programme: "English Basics", amount: 1600, paid: 1600, due: "05 Aug", status: "Paid" },
  { invoice: "INV-4412", student: "Aravind S", programme: "Future 12th", amount: 3200, paid: 1600, due: "05 Aug", status: "Partial" },
  { invoice: "INV-4413", student: "Sowmiya K", programme: "10th Standard", amount: 1200, paid: 0, due: "10 Aug", status: "Pending" },
  { invoice: "INV-4414", student: "Nithya B", programme: "Foundation Recovery", amount: 1800, paid: 0, due: "28 Jul", status: "Overdue" },
  { invoice: "INV-4415", student: "Deepa R", programme: "One-to-One", amount: 5600, paid: 5600, due: "01 Aug", status: "Paid" },
  { invoice: "INV-4416", student: "Hari Prasad", programme: "Online Learning", amount: 1500, paid: 1500, due: "01 Aug", status: "Refunded" },
];
