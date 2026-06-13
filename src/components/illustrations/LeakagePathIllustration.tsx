const stages = [
  { x: 42, y: 88, label: "Redzamība", note: "nav iemesla" },
  { x: 168, y: 62, label: "Pieprasījums", note: "nav vērtības" },
  { x: 294, y: 98, label: "Atbilde", note: "nevirza" },
  { x: 420, y: 70, label: "Nākamais solis", note: "pazūd šeit" },
  { x: 546, y: 108, label: "Rezervācija", note: "nav avota" },
  { x: 672, y: 82, label: "Atkārtots viesis", note: "netiek atgriezts" },
] as const;

export function LeakagePathIllustration() {
  return (
    <svg
      aria-label="Ceļš no redzamības līdz atkārtotam viesim ar noplūdes punktiem"
      className="vx-svg-language"
      role="img"
      viewBox="0 0 820 260"
    >
      <path
        className="vx-svg-line vx-svg-line--ink vx-svg-line--broken"
        d="M72 122 C145 54 215 55 292 128 S437 83 496 116 S625 172 728 118"
      />
      <path
        className="vx-svg-line vx-svg-line--neon vx-path-draw"
        d="M76 174 C178 150 275 154 363 132 C448 112 535 130 622 121"
      />

      {stages.map((stage, index) => (
        <g key={stage.label}>
          <circle
            className={index === 3 ? "vx-svg-circle vx-svg-line--neon" : "vx-svg-circle vx-svg-line--ink"}
            cx={stage.x}
            cy={stage.y}
            r="15"
          />
          <rect
            className="home-svg-card"
            height="58"
            rx="13"
            width="108"
            x={stage.x - 54}
            y={stage.y + 34}
          />
          <text
            className="home-illustration-text home-illustration-text--small"
            textAnchor="middle"
            x={stage.x}
            y={stage.y + 58}
          >
            {stage.label}
          </text>
          <text
            className={
              index === 3
                ? "home-illustration-text home-illustration-text--note"
                : "home-illustration-text home-illustration-text--small"
            }
            textAnchor="middle"
            x={stage.x}
            y={stage.y + 78}
          >
            {stage.note}
          </text>
        </g>
      ))}
    </svg>
  );
}
