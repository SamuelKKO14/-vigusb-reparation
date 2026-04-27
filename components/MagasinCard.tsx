import { Ville } from "@/data/villes";
import { Magasin } from "@/data/magasins";

interface Props {
  ville: Ville;
  magasin: Magasin;
}

export function MagasinCard({ ville, magasin }: Props) {
  return (
    <section className="bg-gray-bg px-4 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          Votre magasin le plus proche
        </h2>
        <div className="bg-white rounded-2xl border border-border overflow-hidden md:flex">
          {/* Photo placeholder */}
          <div className="md:w-80 h-48 md:h-auto bg-gradient-to-br from-violet-light to-gray-bg flex items-center justify-center shrink-0">
            <div className="text-center">
              <svg className="mx-auto mb-2 text-violet" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="text-sm text-gray-light">Photo à venir</span>
            </div>
          </div>

          {/* Infos */}
          <div className="p-5 md:p-6 flex-1">
            <h3 className="text-lg font-bold text-foreground mb-3">{magasin.nom}</h3>
            <div className="space-y-2 text-sm text-gray-text mb-5">
              <p className="flex items-start gap-2">
                <svg className="mt-0.5 text-violet shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {magasin.adresse}, {magasin.codePostal} {magasin.ville}
              </p>
              <p className="flex items-center gap-2">
                <svg className="text-violet shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {magasin.horaires}
              </p>
              <p className="flex items-center gap-2">
                <svg className="text-violet shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {magasin.telephone}
              </p>
              <p className="flex items-center gap-2">
                <svg className="text-green shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-green font-semibold">
                  À {ville.distanceKm} km · {ville.tempsTrajetMinutes} min en voiture depuis {ville.nom}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={magasin.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border text-gray-text font-semibold text-sm px-4 py-2.5 rounded-lg hover:border-violet hover:text-violet transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Itinéraire Google Maps
              </a>
              <a
                href={magasin.tunnelUrl}
                className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-hover text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                Réserver dans ce magasin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
