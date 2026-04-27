export interface Ville {
  slug: string;
  nom: string;
  codePostal: string;
  habitants: number;
  magasinLeProche: string;
  distanceKm: number;
  tempsTrajetMinutes: number;
  villesAlentours: string[];
}

export const villes: Ville[] = [
  {
    slug: "saint-herblain",
    nom: "Saint-Herblain",
    codePostal: "44800",
    habitants: 47000,
    magasinLeProche: "nantes-centre",
    distanceKm: 5,
    tempsTrajetMinutes: 12,
    villesAlentours: ["Indre", "Couëron", "Sautron", "Orvault"],
  },
  {
    slug: "reze",
    nom: "Rezé",
    codePostal: "44400",
    habitants: 42000,
    magasinLeProche: "nantes-centre",
    distanceKm: 5,
    tempsTrajetMinutes: 13,
    villesAlentours: ["Bouguenais", "Les Sorinières", "Vertou", "Pont-Saint-Martin"],
  },
  {
    slug: "saint-sebastien-sur-loire",
    nom: "Saint-Sébastien-sur-Loire",
    codePostal: "44230",
    habitants: 27000,
    magasinLeProche: "nantes-paridis",
    distanceKm: 5,
    tempsTrajetMinutes: 11,
    villesAlentours: ["Basse-Goulaine", "Vertou", "Rezé", "Nantes"],
  },
  {
    slug: "vertou",
    nom: "Vertou",
    codePostal: "44120",
    habitants: 25000,
    magasinLeProche: "nantes-paridis",
    distanceKm: 7,
    tempsTrajetMinutes: 14,
    villesAlentours: ["Saint-Sébastien-sur-Loire", "Haute-Goulaine", "Les Sorinières", "La Haie-Fouassière"],
  },
  {
    slug: "carquefou",
    nom: "Carquefou",
    codePostal: "44470",
    habitants: 20000,
    magasinLeProche: "nantes-paridis",
    distanceKm: 7,
    tempsTrajetMinutes: 13,
    villesAlentours: ["Sainte-Luce-sur-Loire", "Thouaré-sur-Loire", "La Chapelle-sur-Erdre", "Mauves-sur-Loire"],
  },
];

export function getVilleBySlug(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}

export function getVillesAlentoursSlugs(ville: Ville): string[] {
  return villes
    .filter((v) => v.slug !== ville.slug && ville.villesAlentours.some(
      (nom) => v.nom.toLowerCase().includes(nom.toLowerCase()) || nom.toLowerCase().includes(v.nom.toLowerCase())
    ))
    .map((v) => v.slug);
}
