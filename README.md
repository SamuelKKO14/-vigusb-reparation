# Vigus'B — Pages SEO local (réparation téléphone)

Pages programmatiques SEO local pour les villes du bassin de chalandise Vigus'B.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + Poppins (Google Fonts)
- Static Site Generation (SSG)
- Hébergement : Vercel

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000/reparation/saint-herblain

## Pages générées

- `/reparation/saint-herblain`
- `/reparation/reze`
- `/reparation/saint-sebastien-sur-loire`
- `/reparation/vertou`
- `/reparation/carquefou`

## Ajouter une nouvelle ville

1. Ouvrir `data/villes.ts`
2. Ajouter un objet dans le tableau `villes` :

```typescript
{
  slug: "orvault",
  nom: "Orvault",
  codePostal: "44700",
  habitants: 27000,
  magasinLeProche: "nantes-centre", // slug du magasin dans magasins.ts
  distanceKm: 6,
  tempsTrajetMinutes: 15,
  villesAlentours: ["Saint-Herblain", "Sautron", "La Chapelle-sur-Erdre", "Nantes"],
}
```

3. `npm run build` — la page `/reparation/orvault` est automatiquement générée.

## Ajouter un nouveau magasin

Ouvrir `data/magasins.ts` et ajouter un objet dans le tableau `magasins`.

## Structure

```
app/
  reparation/[ville]/page.tsx   — Template unique (SSG)
  sitemap.ts                     — Sitemap XML auto
  robots.ts                      — robots.txt
components/                      — Composants réutilisables
data/
  villes.ts                      — Données des villes
  magasins.ts                    — Données des magasins
  schemas.ts                     — Schémas JSON-LD
```
