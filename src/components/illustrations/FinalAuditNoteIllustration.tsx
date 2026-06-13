const checklist = [
  "Avoti",
  "Noplūdes punkti",
  "Klusie mēneši",
  "Iepriekšējie viesi",
  "Nākamais solis",
] as const;

export function FinalAuditNoteIllustration() {
  return (
    <svg
      aria-label="Klientu noplūdes audita pārbaudes piezīme"
      className="vx-svg-language"
      role="img"
      viewBox="0 0 340 300"
    >
      <rect className="home-svg-card" height="236" rx="26" width="250" x="42" y="28" />
      <text className="home-illustration-text" x="72" y="68">
        auditā pārbaudām
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="186"
        y="68"
      >
        kur pazūd?
      </text>

      {checklist.map((item, index) => {
        const y = 104 + index * 30;
        return (
          <g key={item}>
            <circle className="vx-svg-circle vx-svg-line--neon" cx="78" cy={y - 4} r="7" />
            <path
              className="vx-svg-arrow vx-svg-line--neon"
              d={`M74 ${y - 4} L78 ${y} L86 ${y - 10}`}
            />
            <text className="home-illustration-text home-illustration-text--small" x="100" y={y}>
              {item}
            </text>
          </g>
        );
      })}

      <path
        className="vx-svg-line vx-svg-line--neon vx-path-draw"
        d="M206 244 C230 268 268 270 304 246"
      />
      <text
        className="home-illustration-text home-illustration-text--note"
        x="220"
        y="282"
      >
        ko sakārtot?
      </text>
    </svg>
  );
}
