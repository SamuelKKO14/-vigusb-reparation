import { Ville } from "@/data/villes";

const reparations = [
  {
    titre: "Écran iPhone",
    prix: "À partir de 79 €",
    duree: "30 min",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
  },
  {
    titre: "Batterie iPhone",
    prix: "À partir de 49 €",
    duree: "30 min",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>
    ),
  },
  {
    titre: "Écran Samsung",
    prix: "À partir de 89 €",
    duree: "1h",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
  },
  {
    titre: "Batterie Samsung",
    prix: "À partir de 59 €",
    duree: "30 min",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>
    ),
  },
];

interface Props {
  ville: Ville;
  tunnelUrl: string;
}

export function ReparationsGrid({ ville, tunnelUrl }: Props) {
  return (
    <section className="bg-white px-4 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          Les réparations les plus demandées à {ville.nom}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {reparations.map((r) => (
            <a
              key={r.titre}
              href="https://6prjgd-4j.myshopify.com/pages/reparation"
              className="group bg-white border border-border rounded-xl p-4 md:p-5 hover:border-violet hover:shadow-[0_4px_16px_rgba(123,45,139,0.10)] transition-all"
            >
              <div className="text-violet mb-3">{r.icon}</div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 group-hover:text-violet transition-colors">
                {r.titre}
              </h3>
              <p className="text-green font-bold text-sm">{r.prix}</p>
              <p className="text-gray-light text-xs mt-1">{r.duree}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
