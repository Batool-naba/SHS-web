import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import { newsArticles } from "@/lib/data/news";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = newsArticles.find((a) => a.slug === params.slug);
  return { title: article?.title ?? "News" };
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="section-pad bg-charcoal">
        <div className="container-shs">
          <SectionHeading eyebrow={`${article.category} · ${article.date}`} title={article.title} light />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs max-w-3xl">
          {article.image ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-charcoal/10">
              <Image src={article.image} alt={article.title} fill className="object-cover object-top" />
            </div>
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-charcoal/20 bg-ivory">
              <p className="px-6 text-center text-xs italic text-charcoal/40">
                [Photograph to be provided by SHS]
              </p>
            </div>
          )}
          <p className="mt-8 text-base leading-relaxed text-charcoal/70">{article.summary}</p>
          {article.placeholder && (
            <p className="mt-6 text-sm italic text-charcoal/40">
              [Full article content to be provided by SHS]
            </p>
          )}
        </div>
      </section>
    </>
  );
}
