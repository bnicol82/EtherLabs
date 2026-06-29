export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 opacity-90" />
        <div className="absolute inset-[1px] rounded-[10px] bg-[#0a0a12]" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M12 3L4 8v8l8 5 8-5V8l-8-5z"
            stroke="url(#logo-gradient)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 12l8-5M12 12L4 7M12 12v9"
            stroke="url(#logo-gradient)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logo-gradient" x1="4" y1="3" x2="20" y2="21">
              <stop stopColor="#a78bfa" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">
        Ether<span className="text-violet-400">Labs</span>
      </span>
    </div>
  );
}
