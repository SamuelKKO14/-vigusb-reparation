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
    <section className="bg-gray-bg px-4 py-8 md:py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-5">
          Marques réparées
        </h2>
        <div className="flex gap-5 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-start">
          {marques.map((m) => (
            <a
              key={m}
              href="https://6prjgd-4j.myshopify.com/pages/reparation"
              className="group flex flex-col items-center gap-2 shrink-0"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-violet-light flex items-center justify-center group-hover:shadow-[0_2px_8px_rgba(123,45,139,0.15)] transition-shadow">
                <span className="text-violet font-bold text-lg">
                  {m.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium text-gray-text text-center whitespace-nowrap group-hover:text-violet transition-colors">
                {m}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
