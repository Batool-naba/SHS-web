import type { ApplicationData } from "./types";
import { programs } from "@/lib/data/programs";

type Props = {
  data: ApplicationData["academic"];
  onChange: (data: ApplicationData["academic"]) => void;
};

export default function StepAcademicInfo({ data, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Previous School
        </label>
        <input
          required
          type="text"
          value={data.previousSchool}
          onChange={(e) => onChange({ ...data, previousSchool: e.target.value })}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Previous Qualification
          </label>
          <input
            required
            type="text"
            value={data.previousQualification}
            onChange={(e) => onChange({ ...data, previousQualification: e.target.value })}
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Marks / Grade
          </label>
          <input
            required
            type="text"
            value={data.marks}
            onChange={(e) => onChange({ ...data, marks: e.target.value })}
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Program Applying For
        </label>
        <select
          required
          value={data.program}
          onChange={(e) => onChange({ ...data, program: e.target.value })}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        >
          <option value="">Select a program</option>
          {programs.map((program) => (
            <option key={program.slug} value={program.name}>
              {program.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
