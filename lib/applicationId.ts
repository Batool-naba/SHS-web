// Generates a demo application ID like "SHS-2026-0001". There is no
// database yet, so the sequence is randomized per submission rather than
// a real running count. Once Supabase is wired in, this should be
// replaced by a DB sequence/serial column so IDs are unique and ordered.
export function generateApplicationId(): string {
  const year = new Date().getFullYear();
  const sequence = Math.floor(1 + Math.random() * 9998)
    .toString()
    .padStart(4, "0");
  return `SHS-${year}-${sequence}`;
}
