import Image from "next/image";
import Button from "./Button";
import { siteConfig } from "@/lib/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/gallery/campus/hero-campus.jpg"
          alt="Standard Higher Secondary School campus courtyard"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-dark/95 via-charcoal/85 to-charcoal/70" />

      <div className="container-shs relative grid grid-cols-1 items-center gap-12 py-24 md:py-32 lg:grid-cols-[3fr_2fr]">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
            Mughalabad Road, Rawalpindi
          </span>
          <h1 className="font-serif text-4xl leading-tight text-softwhite sm:text-5xl md:text-6xl">
            Standard Higher
            <br />
            Secondary School
          </h1>
          <p className="mt-6 max-w-lg text-base text-softwhite/75 md:text-lg">
            {siteConfig.slogan}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/admissions/apply" variant="primary">
              Apply Now
            </Button>
            <Button href="/about" variant="ghost">
              Explore SHS
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-gold/40 bg-softwhite/10 p-6 backdrop-blur sm:h-72 sm:w-72">
            <Image
              src="/shs-logo.jpeg"
              alt="Standard Higher Secondary School emblem"
              width={220}
              height={220}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
