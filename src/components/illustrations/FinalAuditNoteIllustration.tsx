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
      className="vx-svg-language home-illustration-svg"
      role="img"
      viewBox="0 0 460 340"
    >
      <title>Audita diagnostikas piezīme ar pārbaudāmajiem punktiem</title>
      <rect className="home-svg-dark-sheet" height="310" rx="28" width="430" x="15" y="15" />
      <rect className="home-svg-sheet" height="254" rx="24" width="270" x="58" y="42" />
      <text className="home-illustration-text home-illustration-text--ink" x="86" y="82">
        Auditā pārbaudām
      </text>
      <text
        className="home-illustration-text home-illustration-text--muted-ink"
        x="86"
        y="106"
      >
        kur pazūd ceļš līdz rezervācijai
      </text>

      {checklist.map((item, index) => {
        const y = 142 + index * 30;
        return (
          <g key={item}>
            <circle className="home-svg-neon-fill" cx="92" cy={y - 5} r="8" />
            <path className="home-svg-neon-line" d={`M88 ${y - 5} L92 ${y} L101 ${y - 11}`} />
            <text className="home-illustration-text home-illustration-text--small home-illustration-text--ink" x="116" y={y}>
              {item}
            </text>
          </g>
        );
      })}

      <path
        className="home-svg-neon-line vx-path-draw"
        d="M328 222 C360 220 380 234 392 258"
      />
      <path className="home-svg-neon-line" d="M381 252 L394 260 L379 269" />
      <rect className="home-svg-sheet-soft" height="54" rx="17" width="120" x="306" y="264" />
      <text className="home-illustration-text home-illustration-text--note" textAnchor="middle" x="366" y="296">
        Pieteikt auditu
      </text>
    </svg>
  );
}
