import scopeStages from "@/lib/data/scopeStages";

export default function ScopeOfWork() {
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="uppercase text-xs tracking-[0.2em] text-neutral-500 text-center mb-2 font-bold">
          Process
        </p>
        <h2 className="text-3xl text-center mb-14 font-display font-bold text-neutral-900 tracking-wide uppercase">Scope of Work in Structural Design</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {scopeStages.map((stage, i) => (
            <div key={stage.title} className="bg-white border border-neutral-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#8b5e1c] text-white text-sm font-display font-bold shrink-0">
                  {i + 1}
                </span>
                <h3 className="text-lg uppercase tracking-wide font-display font-semibold text-neutral-900">{stage.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {stage.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-600 leading-relaxed flex gap-2">
                    <span className="text-[#8b5e1c] shrink-0 font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
