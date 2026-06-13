const stages = [
  { x: 64, y: 160, label: "Redzamība" },
  { x: 154, y: 96, label: "Pieprasījums" },
  { x: 250, y: 152, label: "Atbilde" },
  { x: 346, y: 102, label: "Nākamais solis" },
  { x: 444, y: 160, label: "Rezervācija" },
  { x: 530, y: 98, label: "Atkārtots viesis" },
] as const;

export function LeakagePathIllustration() {
  return (
    <svg
      aria-label="Ceļš no redzamības līdz atkārtotam viesim ar noplūdes punktiem"
      className="vx-svg-language home-illustration-svg"
      role="img"
      viewBox="0 0 610 360"
    >
      <title>Rezervāciju noplūdes ceļš ar trim noplūdes punktiem</title>
      <rect className="home-svg-dark-sheet" height="330" rx="28" width="580" x="15" y="15" />
      <text className="home-illustration-text home-illustration-text--light" x="42" y="55">
        Ceļš no intereses līdz rezervācijai
      </text>

      <path
        className="home-svg-ink-line home-svg-ink-line--light home-svg-route-broken"
        d="M64 160 C112 88 162 68 214 118 C258 160 284 178 324 128 C366 77 420 98 444 160 C466 215 520 176 530 98"
      />
      <path
        className="home-svg-neon-line vx-path-draw"
        d="M64 214 C134 194 198 202 250 176 C314 144 372 151 432 184 C478 208 512 178 544 138"
      />

      {stages.map((stage) => (
        <g key={stage.label}>
          <circle className="home-svg-sheet-soft" cx={stage.x} cy={stage.y} r="18" />
          <rect className="home-svg-sheet" height="48" rx="13" width="104" x={stage.x - 52} y={stage.y + 30} />
          <text
            className="home-illustration-text home-illustration-text--tiny home-illustration-text--ink"
            textAnchor="middle"
            x={stage.x}
            y={stage.y + 60}
          >
            {stage.label}
          </text>
        </g>
      ))}

      <LeakMark label="lēna atbilde" x={250} y={112} />
      <LeakMark label="nav nākamā soļa" x={346} y={64} />
      <LeakMark label="vecais viesis netiek atgriezts" x={506} y={54} wide />

      <text className="home-illustration-text home-illustration-text--note" x="78" y="252">
        Vexilian precizē ceļu
      </text>
    </svg>
  );
}

function LeakMark({
  label,
  wide = false,
  x,
  y,
}: {
  label: string;
  wide?: boolean;
  x: number;
  y: number;
}) {
  return (
    <g>
      <circle className="home-svg-leak" cx={x} cy={y + 20} r="18" />
      <rect
        fill="rgba(208, 255, 0, 0.1)"
        height="34"
        rx="12"
        stroke="rgba(208, 255, 0, 0.55)"
        width={wide ? 164 : 124}
        x={x - (wide ? 82 : 62)}
        y={y + 34}
      />
      <text
        className="home-illustration-text home-illustration-text--note"
        textAnchor="middle"
        x={x}
        y={y + 56}
      >
        {label}
      </text>
    </g>
  );
}
