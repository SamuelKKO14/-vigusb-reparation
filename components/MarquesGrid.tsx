import { Ville } from "@/data/villes";

const marques = [
  "Apple", "Samsung", "Xiaomi", "Huawei", "Honor", "Google Pixel",
  "OnePlus", "Oppo", "Realme", "Sony Xperia", "Poco", "Wiko",
];

interface Props {
  ville: Ville;
  tunnelUrl: string;
}

export function MarquesGrid({ ville, tunnelUrl }: Props) {
  return (
    <section className="bg-gray-bg px-4 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          Toutes les marques réparées à {ville.nom}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
          {marques.map((m) => (
            <a
              key={m}
              href={tunnelUrl}
              className="group bg-white rounded-xl border border-border p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:border-violet transition-all"
            >
              {/* Logo placeholder */}
              <div className="w-14 h-14 rounded-lg bg-violet-light flex items-center justify-center">
                <span className="text-violet font-bold text-lg">
                  {m.charAt(0)}
                </span>
              </div>
              <span className="text-xs md:text-sm font-semibold text-foreground text-center group-hover:text-violet transition-colors">
                {m}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
