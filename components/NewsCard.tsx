import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/lib/data/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block overflow-hidden border border-charcoal/10 bg-white shadow-card transition-shadow hover:shadow-cardHover"
    >
      {article.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center border-b border-dashed border-charcoal/20 bg-ivory">
          <p className="px-6 text-center text-xs italic text-charcoal/40">
            [Photograph to be provided by SHS]
          </p>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide">
          <span className="text-burgundy">{article.category}</span>
          <span className="text-charcoal/40">{article.date}</span>
        </div>
        <h3 className="mt-3 font-serif text-lg text-charcoal">{article.title}</h3>
        <p className="mt-2 text-sm text-charcoal/60 leading-relaxed line-clamp-3">
          {article.summary}
        </p>
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-burgundy group-hover:text-burgundy-dark">
          Read More →
        </span>
      </div>
    </Link>
  );
}
