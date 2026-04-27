import Link from "next/link";
import { Ville, villes } from "@/data/villes";
import { Magasin } from "@/data/magasins";

interface Props {
  ville: Ville;
  magasin: Magasin;
}

export function SeoText({ ville, magasin }: Props) {
  const villesVoisinesLinks = ville.villesAlentours
    .map((nom) => {
      const found = villes.find(
        (v) =>
          v.nom.toLowerCase() === nom.toLowerCase() ||
          nom.toLowerCase().includes(v.nom.toLowerCase())
      );
      return { nom, slug: found?.slug };
    });

  return (
    <section className="bg-gray-bg px-4 py-10 md:py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Réparation téléphone à {ville.nom} : pourquoi choisir Vigus&apos;B
        </h2>
        <div className="text-gray-text text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Vous habitez à {ville.nom} ({ville.codePostal}) et votre téléphone a besoin d&apos;une
            réparation ? Le magasin <strong>{magasin.nom}</strong>, situé au{" "}
            {magasin.adresse} à {magasin.ville}, est votre point de service le plus proche.
            À seulement {ville.distanceKm} km de {ville.nom}, soit environ{" "}
            {ville.tempsTrajetMinutes} minutes en voiture, vous pouvez faire réparer votre
            smartphone rapidement et sans rendez-vous.
          </p>
          <p>
            Nos techniciens certifiés prennent en charge toutes les marques : réparation
            iPhone à {ville.nom}, réparation écran Samsung à {ville.nom}, mais aussi
            Xiaomi, Huawei, OnePlus et bien d&apos;autres. Chaque intervention est couverte
            par notre garantie de 24 mois — la plus longue du marché du reconditionné et de
            la réparation.
          </p>
          <p>
            En tant que réparateur agréé <strong>QualiRepar</strong>, Vigus&apos;B vous fait
            bénéficier du bonus réparation de l&apos;État, soit jusqu&apos;à 25 € de réduction
            sur votre facture. Ce label garantit la qualité de nos interventions et le respect
            des normes environnementales.
          </p>
          <p>
            {ville.nom} et ses {ville.habitants?.toLocaleString("fr-FR")} habitants font
            partie du bassin de chalandise naturel de notre magasin de {magasin.ville}.
            Les villes voisines de {ville.villesAlentours.join(", ")} sont
            également desservies. Que vous ayez besoin d&apos;un changement d&apos;écran,
            d&apos;une batterie neuve ou d&apos;une désoxydation, passez nous voir —
            le diagnostic est toujours gratuit.
          </p>
          <p>
            Horaires d&apos;ouverture : {magasin.horaires}. Pas besoin de rendez-vous,
            mais vous pouvez aussi réserver en ligne pour garantir votre créneau.
          </p>
        </div>

        {villesVoisinesLinks.length > 0 && (
          <p className="mt-6 text-sm text-gray-light">
            Vous êtes proche de :{" "}
            {villesVoisinesLinks.map((v, i) => (
              <span key={v.nom}>
                {i > 0 && " · "}
                {v.slug ? (
                  <Link
                    href={`/reparation/${v.slug}`}
                    className="text-violet hover:underline"
                  >
                    {v.nom}
                  </Link>
                ) : (
                  v.nom
                )}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
