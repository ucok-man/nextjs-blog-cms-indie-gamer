import { Iterate } from "@/components/utility";
import SectionWrapper from "../section-wrapper";

const genres = [
  { name: "Horror", count: 42, color: "#FFB6E1" },
  { name: "Survival", count: 38, color: "#B4FF39" },
  { name: "Simulation", count: 27, color: "#FFE5E5" },
  { name: "Multiplayer", count: 23, color: "#87CEEB" },
  { name: "Narrative", count: 19, color: "#FFA500" },
];

export default function PopularGenre() {
  return (
    <SectionWrapper className="bg-brand-white-100">
      <h2 className="mb-12 font-mono text-4xl font-black">POPULAR_GENRES</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Iterate
          items={genres}
          render={(item, idx) => (
            <button
              key={idx}
              className="group flex items-center justify-between rounded-none border-4 bg-brand-white-100 p-4 shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none"
              style={{ backgroundColor: item.color }}
            >
              <span className="font-mono text-xl font-bold">{item.name}</span>
              <span className="rounded-full bg-brand-white-100 px-3 py-1 font-mono text-sm">
                {item.count}
              </span>
            </button>
          )}
        />
      </div>
    </SectionWrapper>
  );
}
