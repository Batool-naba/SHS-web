import type { ApplicationData } from "./types";

type Props = {
  data: ApplicationData["student"];
  onChange: (data: ApplicationData["student"]) => void;
};

export default function StepStudentInfo({ data, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Full Name
        </label>
        <input
          required
          type="text"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Date of Birth
          </label>
          <input
            required
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => onChange({ ...data, dateOfBirth: e.target.value })}
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Gender
          </label>
          <select
            required
            value={data.gender}
            onChange={(e) => onChange({ ...data, gender: e.target.value })}
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          B-Form / CNIC
        </label>
        <input
          required
          type="text"
          placeholder="XXXXX-XXXXXXX-X"
          value={data.cnicOrBForm}
          onChange={(e) => onChange({ ...data, cnicOrBForm: e.target.value })}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
    </div>
  );
}
