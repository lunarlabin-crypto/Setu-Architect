export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-white">
      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-40">
        <div className="w-px h-full bg-neutral-200" />
        <div className="w-px h-full bg-neutral-200" />
        <div className="w-px h-full bg-neutral-200" />
      </div>

      <div className="relative z-10 flex items-center justify-center tracking-[0.15em] font-display text-2xl md:text-3xl font-medium">
        <span className="text-[#e3dacf]">S</span>
        <span className="text-[#7d7d7d]">E</span>
        <span className="text-[#7d7d7d]">T</span>
        <span className="text-[#e3dacf]">U</span>
      </div>
    </div>
  );
}
