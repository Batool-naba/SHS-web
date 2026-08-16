type Props = {
  label: string;
  value: number | string;
};

export default function AdminStatCard({ label, value }: Props) {
  return (
    <div className="border border-charcoal/10 bg-white p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/50">{label}</p>
      <p className="mt-2 font-serif text-3xl text-burgundy">{value}</p>
    </div>
  );
}
