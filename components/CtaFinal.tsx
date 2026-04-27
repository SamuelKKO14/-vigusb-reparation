import { Ville } from "@/data/villes";

interface Props {
  ville: Ville;
  tunnelUrl: string;
}

export function CtaFinal({ ville, tunnelUrl }: Props) {
  return (
    <section className="bg-violet-light px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Besoin d&apos;une réparation à {ville.nom} ?
        </h2>
        <a
          href={tunnelUrl}
          className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-hover text-white font-bold text-base px-8 py-4 rounded-lg transition-colors"
        >
          Réserver en ligne maintenant
        </a>
      </div>
    </section>
  );
}
