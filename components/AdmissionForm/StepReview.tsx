import type { ApplicationData } from "./types";

export default function StepReview({ data }: { data: ApplicationData }) {
  const rows: [string, string][] = [
    ["Full Name", data.student.fullName],
    ["Date of Birth", data.student.dateOfBirth],
    ["Gender", data.student.gender],
    ["B-Form / CNIC", data.student.cnicOrBForm],
    ["Parent / Guardian", data.parent.name],
    ["Contact Number", data.parent.phone],
    ["Email", data.parent.email],
    ["Previous School", data.academic.previousSchool],
    ["Previous Qualification", data.academic.previousQualification],
    ["Marks / Grade", data.academic.marks],
    ["Program", data.academic.program],
    ["Documents", data.documents.map((f) => f.name).join(", ") || "None uploaded"],
  ];

  return (
    <div className="border border-charcoal/10">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-2 gap-4 border-b border-charcoal/10 px-5 py-3 text-sm last:border-none"
        >
          <span className="font-medium text-charcoal/50">{label}</span>
          <span className="text-charcoal">{value || "—"}</span>
        </div>
      ))}
    </div>
  );
}
