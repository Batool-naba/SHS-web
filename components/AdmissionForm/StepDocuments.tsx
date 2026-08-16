type Props = {
  files: File[];
  onChange: (files: File[]) => void;
};

export default function StepDocuments({ files, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Upload Documents (Birth Certificate, Previous Result, Photograph, etc.)
        </label>
        <input
          type="file"
          multiple
          onChange={(e) => onChange(Array.from(e.target.files ?? []))}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-burgundy file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:text-softwhite"
        />
        <p className="mt-2 text-xs text-charcoal/50">
          Documents are held in your browser for this demo only — they are not uploaded or stored
          anywhere yet. This will be connected once the SHS online admission system goes live.
        </p>
      </div>

      {files.length > 0 && (
        <ul className="space-y-2 text-sm text-charcoal/70">
          {files.map((file, i) => (
            <li key={i} className="border border-charcoal/10 bg-ivory px-4 py-2">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
