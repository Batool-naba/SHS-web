import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news and announcements from Standard Higher Secondary School, Rawalpindi.",
};

export default function NewsPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="News & Events"
            title="News & Announcements"
            description="Updates, achievements and announcements from Standard Higher Secondary School."
            align="center"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
