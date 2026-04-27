export interface Magasin {
  slug: string;
  nom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  telephone: string;
  horaires: string;
  horaireFermeture: string;
  coordonnees: { lat: number; lng: number };
  tunnelUrl: string;
  googleMapsUrl: string;
}

export const magasins: Magasin[] = [
  {
    slug: "nantes-centre",
    nom: "Vigus'B Nantes Centre",
    adresse: "19 Rue de la Barillerie",
    codePostal: "44000",
    ville: "Nantes",
    telephone: "+33 2 40 00 00 01",
    horaires: "Lun-Sam : 9h45 - 19h30",
    horaireFermeture: "19h30",
    coordonnees: { lat: 47.2147, lng: -1.5536 },
    tunnelUrl: "https://6prjgd-4j.myshopify.com/pages/reparation",
    googleMapsUrl: "https://maps.google.com/?q=Vigus'B+Nantes+Centre+19+Rue+de+la+Barillerie+44000+Nantes",
  },
  {
    slug: "nantes-paridis",
    nom: "Vigus'B Leclerc Paridis",
    adresse: "Centre Commercial Leclerc Paridis, 10 Route de Paris",
    codePostal: "44300",
    ville: "Nantes",
    telephone: "+33 2 40 00 00 02",
    horaires: "Lun-Sam : 9h00 - 20h00",
    horaireFermeture: "20h00",
    coordonnees: { lat: 47.2403, lng: -1.5081 },
    tunnelUrl: "https://6prjgd-4j.myshopify.com/pages/reparation",
    googleMapsUrl: "https://maps.google.com/?q=Vigus'B+Leclerc+Paridis+10+Route+de+Paris+44300+Nantes",
  },
];

export function getMagasinBySlug(slug: string): Magasin | undefined {
  return magasins.find((m) => m.slug === slug);
}
