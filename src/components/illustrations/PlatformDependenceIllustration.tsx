export function PlatformDependenceIllustration() {
  return (
    <svg
      aria-label="Platformu redzamība pāriet īpašnieka klientu ceļā"
      className="vx-svg-language home-illustration-svg"
      role="img"
      viewBox="0 0 620 410"
    >
      <title>Platformu redzamība un īpašnieka klientu ceļa turpinājums</title>
      <rect className="home-svg-dark-sheet" height="380" rx="28" width="590" x="15" y="15" />

      <rect className="home-svg-sheet" height="292" rx="24" width="250" x="42" y="66" />
      <rect className="home-svg-sheet" height="292" rx="24" width="270" x="318" y="66" />

      <text className="home-illustration-text home-illustration-text--ink" x="70" y="105">
        Platformu redzamība
      </text>
      <text className="home-illustration-text home-illustration-text--muted-ink" x="70" y="130">
        palīdz jūs atrast
      </text>

      <text className="home-illustration-text home-illustration-text--ink" x="346" y="105">
        Jūsu klientu ceļš
      </text>
      <text className="home-illustration-text home-illustration-text--muted-ink" x="346" y="130">
        turpina saziņu
      </text>

      <SourcePill label="Booking" x={76} y={168} />
      <SourcePill label="Airbnb" x={76} y={232} />

      <circle className="home-svg-sheet-soft" cx="204" cy="206" r="31" />
      <text
        className="home-illustration-text home-illustration-text--tiny home-illustration-text--ink"
        textAnchor="middle"
        x="204"
        y="211"
      >
        Interese
      </text>

      <path
        className="home-svg-ink-line home-svg-route-broken"
        d="M144 190 C166 185 182 192 204 206"
      />
      <path
        className="home-svg-ink-line home-svg-route-broken"
        d="M138 254 C166 246 184 230 204 206"
      />
      <path className="home-svg-ink-line home-svg-route-broken" d="M204 238 C214 277 242 292 276 292" />
      <text className="home-illustration-text home-illustration-text--muted-ink" x="134" y="321">
        bez turpinājuma ceļš izdziest
      </text>

      <path className="home-svg-neon-line vx-path-draw" d="M346 206 H410 C435 206 446 235 466 246 H538" />
      <OwnerStep label="Interese" x={344} y={178} />
      <OwnerStep label="Pieprasījums" x={410} y={178} />
      <OwnerStep label="Nākamais solis" wide x={466} y={218} />
      <OwnerStep label="Atkārtots viesis" wide x={538} y={218} />

      <text className="home-illustration-text home-illustration-text--note" x="366" y="318">
        platformas nav pretinieks — tās nav jūsu sistēma
      </text>
    </svg>
  );
}

function SourcePill({ label, x, y }: { label: string; x: number; y: number }) {
  return (
    <g>
      <rect
        fill="rgba(10, 10, 10, 0.07)"
        height="38"
        rx="13"
        stroke="rgba(10, 10, 10, 0.16)"
        width="96"
        x={x}
        y={y}
      />
      <text
        className="home-illustration-text home-illustration-text--small home-illustration-text--ink"
        textAnchor="middle"
        x={x + 48}
        y={y + 25}
      >
        {label}
      </text>
    </g>
  );
}

function OwnerStep({
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
  const width = wide ? 112 : 92;

  return (
    <g>
      <circle className="home-svg-neon-fill" cx={x} cy={y + 28} r="12" />
      <rect
        className="home-svg-sheet-soft"
        height="38"
        rx="12"
        width={width}
        x={x - width / 2}
        y={y + 50}
      />
      <text
        className="home-illustration-text home-illustration-text--tiny home-illustration-text--ink"
        textAnchor="middle"
        x={x}
        y={y + 74}
      >
        {label}
      </text>
    </g>
  );
}
