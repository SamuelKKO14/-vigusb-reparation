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

  if (villesVoisinesLinks.length === 0) return null;

  return (
    <div className="bg-gray-bg px-4 py-6">
      <p className="max-w-3xl mx-auto text-sm text-gray-light text-center">
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
    </div>
  );
}
