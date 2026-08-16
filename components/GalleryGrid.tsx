"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/lib/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
              active === cat
                ? "bg-burgundy text-softwhite border-burgundy"
                : "bg-transparent text-charcoal/70 border-charcoal/20 hover:border-burgundy hover:text-burgundy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => item.src && setLightbox(item)}
            className="group relative flex aspect-square items-center justify-center overflow-hidden border border-charcoal/10 bg-ivory text-left"
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <p className="px-4 text-center text-xs italic text-charcoal/40">{item.caption}</p>
            )}
            <span className="absolute top-2 left-2 bg-charcoal/80 px-2 py-1 text-[10px] uppercase tracking-wide text-softwhite">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[85vh] w-full max-w-3xl">
            <div className="relative aspect-[4/3] w-full">
              {lightbox.src && (
                <Image src={lightbox.src} alt={lightbox.caption} fill className="object-contain" />
              )}
            </div>
            <p className="mt-4 text-center text-sm text-softwhite/80">{lightbox.caption}</p>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute -top-10 right-0 text-2xl text-softwhite/80 hover:text-softwhite"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
