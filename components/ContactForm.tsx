"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-burgundy bg-ivory p-8 text-center">
        <p className="font-serif text-lg text-charcoal">
          Thank you. Your message has been received.
        </p>
        <p className="mt-2 text-sm text-charcoal/60">
          Note: online delivery to the school office is not yet connected — please also call{" "}
          <span className="font-medium">051-5525585</span> for urgent inquiries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
            Name
          </label>
          <input
            required
            type="text"
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
            className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Phone
        </label>
        <input
          type="tel"
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Subject
        </label>
        <input
          required
          type="text"
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/70 mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-burgundy px-7 py-3 text-sm font-semibold uppercase tracking-wide text-softwhite hover:bg-burgundy-dark transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
