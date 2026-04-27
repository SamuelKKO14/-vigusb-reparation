import { Ville } from "@/data/villes";
import { getAvisItems } from "@/data/schemas";

interface Props {
  ville: Ville;
}

export function AvisSection({ ville }: Props) {
  const avis = getAvisItems(ville.nom);

  return (
    <section className="bg-gray-bg px-4 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Ce que disent nos clients de {ville.nom} et alentours
          </h2>
          <p className="text-sm text-gray-light">
            <span className="text-yellow-500">★</span> 4,8/5 · 124 avis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {avis.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border p-5 flex flex-col gap-3"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg
                    key={si}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={si < a.note ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={si < a.note ? "text-green" : "text-border"}
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-text text-sm leading-relaxed">&ldquo;{a.texte}&rdquo;</p>
              <p className="text-xs text-gray-light mt-auto">
                <span className="font-semibold text-foreground">{a.prenom} {a.initiale}</span>
                {" "}— {a.ville} · {a.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
