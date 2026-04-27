import { Ville } from "@/data/villes";
import { Magasin } from "@/data/magasins";

interface Props {
  ville: Ville;
  magasin: Magasin;
}

export function Hero({ ville, magasin }: Props) {
  return (
    <section className="bg-white px-4 pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-3">
          Réparation téléphone &amp; tablette à {ville.nom}
        </h1>
        <p className="text-gray-light text-base md:text-lg mb-6">
          Magasin {magasin.nom} — à {ville.distanceKm} km · ouvert aujourd&apos;hui
          jusqu&apos;à {magasin.horaireFermeture}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href={magasin.tunnelUrl}
            className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-hover text-white font-bold text-base px-6 py-3.5 rounded-lg transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Réserver en ligne
          </a>
          <a
            href={`tel:${magasin.telephone}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-violet text-violet font-bold text-base px-6 py-3.5 rounded-lg hover:bg-violet hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Appeler le magasin
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-light">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span> 4,8/5
          </span>
          <span>·</span>
          <span>Garantie 2 ans</span>
          <span>·</span>
          <span>QualiRepar agréé</span>
          <span>·</span>
          <span>Sans rendez-vous</span>
        </div>
      </div>
    </section>
  );
}
