import { Ville } from "./villes";
import { Magasin } from "./magasins";

function getFaqItems(villeNom: string) {
  return [
    {
      question: `Combien de temps prend une réparation à ${villeNom} ?`,
      reponse: `La plupart des réparations courantes (écran, batterie) sont réalisées en 30 minutes à 1 heure, directement dans notre magasin le plus proche de ${villeNom}. Pour les cas plus complexes (désoxydation, carte mère), comptez 24 à 48 heures.`,
    },
    {
      question: "Faut-il prendre rendez-vous ?",
      reponse: `Non, vous pouvez vous présenter sans rendez-vous aux horaires d'ouverture. Mais si vous souhaitez être sûr d'un créneau, vous pouvez réserver en ligne — c'est gratuit et ça prend 30 secondes.`,
    },
    {
      question: "La garantie couvre quoi exactement ?",
      reponse: "Notre garantie de 24 mois couvre toutes les pannes techniques liées à la réparation effectuée. Si le problème revient, on reprend en charge gratuitement. La garantie ne couvre pas les dommages physiques ultérieurs (chute, immersion).",
    },
    {
      question: "Mon téléphone est très endommagé, vous pouvez quand même le réparer ?",
      reponse: "Dans la grande majorité des cas, oui. Nos techniciens sont formés pour gérer les réparations complexes : écrans explosés, dégâts des eaux, connecteurs arrachés. Passez en magasin pour un diagnostic gratuit — on vous dit tout de suite si c'est réparable et à quel prix.",
    },
    {
      question: "Puis-je payer en plusieurs fois ?",
      reponse: "Oui, on propose le paiement en 3x ou 4x sans frais avec Alma. La demande se fait en 2 minutes au moment du paiement, avec une réponse instantanée. Aucun dossier à constituer.",
    },
  ];
}

export { getFaqItems };

export function getFaqSchema(villeNom: string) {
  const items = getFaqItems(villeNom);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.reponse,
      },
    })),
  };
}

function getAvisItems(villeNom: string) {
  return [
    {
      prenom: "Marie",
      initiale: "L.",
      ville: villeNom,
      date: "Mars 2025",
      note: 5,
      texte: `Super expérience ! Mon iPhone avait l'écran cassé, réparé en 30 minutes. Le technicien était très pro. Je recommande à tous les habitants de ${villeNom}.`,
    },
    {
      prenom: "Thomas",
      initiale: "B.",
      ville: villeNom,
      date: "Février 2025",
      note: 5,
      texte: `Batterie de mon Samsung changée en moins d'une heure. Prix correct, garantie 2 ans, et l'équipe est vraiment sympa. Je reviendrai sans hésiter.`,
    },
    {
      prenom: "Camille",
      initiale: "R.",
      ville: villeNom,
      date: "Janvier 2025",
      note: 4,
      texte: `Bonne prise en charge pour la réparation du connecteur de charge de mon Xiaomi. Délai respecté et le téléphone fonctionne parfaitement depuis.`,
    },
  ];
}

export { getAvisItems };

export function getAvisSchema(ville: Ville) {
  const avis = getAvisItems(ville.nom);
  return {
    "@type": "LocalBusiness",
    name: "Vigus'B",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "124",
      bestRating: "5",
    },
    review: avis.map((a) => ({
      "@type": "Review",
      author: { "@type": "Person", name: `${a.prenom} ${a.initiale}` },
      datePublished: "2025-03-15",
      reviewBody: a.texte,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(a.note),
        bestRating: "5",
      },
    })),
  };
}
