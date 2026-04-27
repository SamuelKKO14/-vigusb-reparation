import Link from "next/link";
import { villes } from "@/data/villes";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Vigus&apos;B — Réparation téléphone
      </h1>
      <p className="text-gray-text mb-8">
        Trouvez votre magasin le plus proche pour une réparation express.
      </p>
      <ul className="space-y-3">
        {villes.map((v) => (
          <li key={v.slug}>
            <Link
              href={`/reparation/${v.slug}`}
              className="block p-4 rounded-xl border border-border hover:border-violet hover:bg-violet-light transition-colors"
            >
              <span className="font-semibold text-foreground">{v.nom}</span>
              <span className="text-gray-light ml-2 text-sm">({v.codePostal})</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
