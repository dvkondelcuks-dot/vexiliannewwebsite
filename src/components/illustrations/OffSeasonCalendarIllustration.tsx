const cells = Array.from({ length: 20 }, (_, index) => index + 1);
const emptyDays = new Set([2, 3, 7, 8, 12, 13, 17, 18]);
const reservedDay = 15;

export function OffSeasonCalendarIllustration() {
  return (
    <svg
      aria-label="Klusā mēneša kalendārs ar veco viesu atgriešanas piezīmēm"
      className="vx-svg-language home-illustration-svg"
      role="img"
      viewBox="0 0 560 400"
    >
      <title>Klusā mēneša plānošanas kalendārs ar veco viesu atgriešanu</title>
      <rect className="home-svg-dark-sheet" height="370" rx="28" width="530" x="15" y="15" />
      <rect className="home-svg-sheet" height="294" rx="25" width="332" x="44" y="54" />
      <text className="home-illustration-text home-illustration-text--ink" x="70" y="92">
        Klusais mēnesis
      </text>
      <text
        className="home-illustration-text home-illustration-text--muted-ink"
        x="70"
        y="116"
      >
        tukšie datumi nav nejaušība
      </text>

      {cells.map((day) => {
        const col = (day - 1) % 5;
        const correctedRow = Math.floor((day - 1) / 5);
        const x = 72 + col * 54;
        const y = 146 + correctedRow * 42;
        const isEmpty = emptyDays.has(day);
        const isReserved = day === reservedDay;
        return (
          <g key={day}>
            <rect
              fill={
                isReserved
                  ? "rgba(208, 255, 0, 0.22)"
                  : isEmpty
                    ? "rgba(10, 10, 10, 0.045)"
                    : "rgba(255, 255, 255, 0.36)"
              }
              height="30"
              rx="8"
              stroke="rgba(10, 10, 10, 0.14)"
              width="38"
              x={x}
              y={y}
            />
            <text
              className="home-illustration-text home-illustration-text--tiny home-illustration-text--ink"
              textAnchor="middle"
              x={x + 19}
              y={y + 20}
            >
              {isReserved ? "rez." : day}
            </text>
          </g>
        );
      })}

      <path className="home-svg-ink-line home-svg-ink-line--faint" d="M66 134 H344" />
      <rect className="home-svg-sheet" height="92" rx="18" width="148" x="382" y="82" />
      <text className="home-illustration-text home-illustration-text--ink" x="404" y="118">
        vecie viesi
      </text>
      <text className="home-illustration-text home-illustration-text--muted-ink" x="404" y="142">
        kam jāraksta?
      </text>

      <rect className="home-svg-sheet" height="88" rx="18" width="148" x="382" y="218" />
      <text className="home-illustration-text home-illustration-text--ink" x="404" y="252">
        sezonas
      </text>
      <text className="home-illustration-text home-illustration-text--ink" x="404" y="274">
        piedāvājums
      </text>

      <path
        className="home-svg-neon-line vx-path-draw"
        d="M382 130 C330 140 298 174 277 224"
      />
      <path className="home-svg-neon-line" d="M266 212 L276 226 L286 209" />
      <circle className="home-svg-leak" cx="277" cy="224" r="18" />
      <text
        className="home-illustration-text home-illustration-text--note"
        x="232"
        y="288"
      >
        rezervēts
      </text>
    </svg>
  );
}
