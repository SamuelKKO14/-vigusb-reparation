import { Metadata } from "next";
import { notFound } from "next/navigation";
import { villes, getVilleBySlug } from "@/data/villes";
import { getMagasinBySlug } from "@/data/magasins";
import { Hero } from "@/components/Hero";
import { MagasinCard } from "@/components/MagasinCard";
import { ReparationsGrid } from "@/components/ReparationsGrid";
import { MarquesGrid } from "@/components/MarquesGrid";
import { PourquoiCards } from "@/components/PourquoiCards";
import { AvisSection } from "@/components/AvisSection";
import { FAQ } from "@/components/FAQ";
import { getFaqSchema, getAvisSchema } from "@/data/schemas";
import { SeoText } from "@/components/SeoText";
import { CtaFinal } from "@/components/CtaFinal";
import { StickyCta } from "@/components/StickyCta";

interface PageProps {
  params: Promise<{ ville: string }>;
}

export async function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) return {};

  const magasin = getMagasinBySlug(ville.magasinLeProche);
  const title = `Réparation téléphone à ${ville.nom} | Vigus'B - Magasin à ${ville.distanceKm} km`;
  const description = `Réparation express téléphone et tablette à ${ville.nom}. Garantie 2 ans, QualiRepar agréé. Magasin Vigus'B ${magasin?.nom ?? ""} à ${ville.distanceKm} km, sans rendez-vous.`;
  const url = `https://vigusb-reparation.vercel.app/reparation/${ville.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Vigus'B",
      type: "website",
      locale: "fr_FR",
    },
  };
}

export default async function VillePage({ params }: PageProps) {
  const { ville: slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) notFound();

  const magasin = getMagasinBySlug(ville.magasinLeProche);
  if (!magasin) notFound();

  const baseUrl = "https://vigusb-reparation.vercel.app";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: magasin.nom,
    address: {
      "@type": "PostalAddress",
      streetAddress: magasin.adresse,
      postalCode: magasin.codePostal,
      addressLocality: magasin.ville,
      addressCountry: "FR",
    },
    telephone: magasin.telephone,
    openingHours: magasin.horaires,
    geo: {
      "@type": "GeoCoordinates",
      latitude: magasin.coordonnees.lat,
      longitude: magasin.coordonnees.lng,
    },
    url: `${baseUrl}/reparation/${ville.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Réparation",
        item: `${baseUrl}/reparation`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ville.nom,
        item: `${baseUrl}/reparation/${ville.slug}`,
      },
    ],
  };

  const faqSchema = getFaqSchema(ville.nom);
  const avisSchema = getAvisSchema(ville);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, faqSchema, avisSchema]),
        }}
      />

      <main className="flex-1">
        <Hero ville={ville} magasin={magasin} />
        <MagasinCard ville={ville} magasin={magasin} />
        <ReparationsGrid ville={ville} tunnelUrl={magasin.tunnelUrl} />
        <MarquesGrid ville={ville} tunnelUrl={magasin.tunnelUrl} />
        <PourquoiCards />
        <AvisSection ville={ville} />
        <FAQ ville={ville} />
        <SeoText ville={ville} magasin={magasin} />
        <CtaFinal ville={ville} tunnelUrl={magasin.tunnelUrl} />
      </main>

      <StickyCta tunnelUrl={magasin.tunnelUrl} />
    </>
  );
}
