import Image from "next/image";
import type { Achievement } from "@/lib/data/achievements";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="group overflow-hidden border border-charcoal/10 bg-white shadow-card transition-shadow hover:shadow-cardHover">
      {achievement.image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center border-b border-dashed border-charcoal/20 bg-ivory">
          <p className="px-6 text-center text-xs italic text-charcoal/40">
            [Photograph to be provided by SHS]
          </p>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide">
          <span className="text-burgundy">{achievement.category}</span>
          <span className="text-gold">{achievement.year}</span>
        </div>
        <h3 className="mt-3 font-serif text-lg text-charcoal">{achievement.title}</h3>
        <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{achievement.description}</p>
      </div>
    </div>
  );
}
