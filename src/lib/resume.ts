import { jsPDF } from "jspdf";
import { profile, skills, projects, certifications, goals } from "../data/profile";

const NAVY: [number, number, number] = [13, 17, 38];
const BLUE: [number, number, number] = [79, 124, 255];
const INK: [number, number, number] = [226, 232, 240];
const MUTED: [number, number, number] = [148, 163, 184];

export function downloadResume() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 48;
  let y = 0;

  const ensure = (needed: number) => {
    if (y + needed > H - M) {
      doc.addPage();
      y = M;
    }
  };

  const setColor = (c: [number, number, number]) => doc.setTextColor(c[0], c[1], c[2]);

  // ---- Header band ----
  doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]);
  doc.rect(0, 0, W, 128, "F");
  doc.setFillColor(BLUE[0], BLUE[1], BLUE[2]);
  doc.rect(0, 128, W, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(27);
  setColor([255, 255, 255]);
  doc.text(profile.name.toUpperCase(), M, 62);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  setColor([103, 232, 249]);
  doc.text(profile.role, M, 84);

  doc.setFontSize(9.5);
  setColor(MUTED);
  doc.text(
    `${profile.email}   |   ${profile.phone}   |   ${profile.location}`,
    M,
    106
  );
  doc.text(`${profile.github}   |   ${profile.linkedin}`, M, 120);

  y = 158;

  const section = (title: string) => {
    ensure(44);
    setColor(BLUE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(title.toUpperCase(), M, y);
    doc.setDrawColor(BLUE[0], BLUE[1], BLUE[2]);
    doc.setLineWidth(1);
    doc.line(M, y + 6, M + 60, y + 6);
    y += 24;
  };

  const body = (text: string, size = 10.5, color: [number, number, number] = INK, style: "normal" | "bold" = "normal") => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    setColor(color);
    const lines = doc.splitTextToSize(text, W - M * 2);
    ensure(lines.length * 14 + 6);
    doc.text(lines, M, y);
    y += lines.length * 14 + 6;
  };

  // ---- Summary ----
  section("Profile");
  body(
    "Recent B.Sc. Artificial Intelligence & Machine Learning graduate with an overall academic score of 85%, " +
      "and a certified GUVI × HCL GenZen AI/ML practitioner. Hands-on across 9+ ML, Deep Learning, Computer Vision, " +
      "NLP and data projects. Actively seeking a first full-time opportunity as a Machine Learning / AI Engineer " +
      "where I can build intelligent, production-ready systems."
  );

  // ---- Education ----
  section("Education");
  body(
    "B.Sc. Artificial Intelligence & Machine Learning",
    11,
    [255, 255, 255],
    "bold"
  );
  body(
    `${profile.education.college}, ${profile.education.university} — Overall Academic Score: 85%`,
    10,
    MUTED
  );
  body(profile.program.title, 10.5, [196, 181, 253]);
  body(profile.program.note, 10, MUTED);

  // ---- Skills ----
  section("Technical Skills");
  body(
    skills.map((s) => s.name).join("  •  "),
    10.5,
    INK
  );

  // ---- Projects ----
  section("Projects");
  projects.forEach((p, i) => {
    ensure(70);
    body(`${String(i + 1).padStart(2, "0")}.  ${p.title}`, 10.5, [196, 181, 253], "bold");
    body(p.blurb, 9.5, INK);
    body(`Stack: ${p.tech.join(" · ")}`, 9, MUTED);
  });

  // ---- Certifications ----
  section("Certifications");
  certifications.forEach((c) => {
    body(`•  ${c.title} — ${c.issuer}`, 10, INK);
  });

  // ---- Career Goals ----
  section("Career Goals");
  body(goals.map((g) => g.role).join("  |  "), 10, INK);

  doc.save("Thariq_Arsath_J_Resume.pdf");
}
