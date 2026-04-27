const avantages = [
  {
    titre: "Garantie 24 mois",
    texte: "Toutes nos réparations sont garanties 2 ans. Vous repartez l'esprit tranquille.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    titre: "QualiRepar",
    texte: "Réparateur labellisé par l'État. Bonus jusqu'à -25 € sur votre réparation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    ),
  },
  {
    titre: "14 magasins en France",
    texte: "Un réseau de proximité partout dans l'Ouest et le Sud. Toujours un magasin près de chez vous.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    titre: "Paiement 3x ou 4x",
    texte: "Étalez le coût avec Alma. Sans démarche compliquée, réponse instantanée.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ),
  },
];

export function PourquoiCards() {
  return (
    <section className="bg-white px-4 py-10 md:py-14">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          Pourquoi choisir Vigus&apos;B ?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {avantages.map((a) => (
            <div
              key={a.titre}
              className="bg-gray-bg rounded-xl p-6 md:p-8 flex flex-col items-start gap-3"
            >
              <div className="text-violet">{a.icon}</div>
              <h3 className="font-bold text-foreground text-sm md:text-base">{a.titre}</h3>
              <p className="text-gray-text text-xs md:text-sm leading-relaxed">{a.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
