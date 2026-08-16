import type { ApplicationData } from "./types";

type Props = {
  data: ApplicationData["parent"];
  onChange: (data: ApplicationData["parent"]) => void;
};

export default function StepParentInfo({ data, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Parent / Guardian Name
        </label>
        <input
          required
          type="text"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Contact Number
          </label>
          <input
            required
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Email
          </label>
          <input
            required
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
