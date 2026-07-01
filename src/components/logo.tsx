export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-bold text-white shadow-lg">
        EL
      </div>
      <span className="text-lg font-semibold tracking-tight text-theme">
        Ether<span className="text-accent">Labs</span>
      </span>
    </div>
  );
}
