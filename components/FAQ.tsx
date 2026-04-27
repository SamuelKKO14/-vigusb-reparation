"use client";

import { useState } from "react";
import { Ville } from "@/data/villes";
import { getFaqItems } from "@/data/schemas";

interface Props {
  ville: Ville;
}

export function FAQ({ ville }: Props) {
  const items = getFaqItems(ville.nom);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-10 md:py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          Questions fréquentes
        </h2>
        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left text-sm md:text-base font-semibold text-foreground hover:text-violet transition-colors"
                aria-expanded={openIndex === i}
              >
                {item.question}
                <svg
                  className={`shrink-0 text-violet transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className={`faq-answer ${openIndex === i ? "is-open" : ""}`}>
                <div>
                  <p className="text-gray-text text-sm leading-relaxed pb-4">
                    {item.reponse}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
