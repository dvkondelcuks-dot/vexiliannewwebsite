const days = Array.from({ length: 28 }, (_, index) => index + 1);
const emptyDays = new Set([3, 4, 10, 11, 17, 18, 24, 25]);
const markedDays = new Set([7, 15, 22]);

export function OffSeasonCalendarIllustration() {
  return (
    <svg
      aria-label="Klusā mēneša kalendārs ar veco viesu atgriešanas piezīmēm"
      className="vx-svg-language"
      role="img"
      viewBox="0 0 420 320"
    >
      <rect className="home-svg-card" height="240" rx="24" width="260" x="28" y="34" />
      <text className="home-illustration-text" x="52" y="70">
        Janvāris?
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="178"
        y="70"
      >
        klusais mēnesis
      </text>

      {days.map((day) => {
        const col = (day - 1) % 7;
        const row = Math.floor((day - 1) / 7);
        const x = 52 + col * 30;
        const y = 96 + row * 36;
        return (
          <g key={day}>
            <rect
              fill={
                markedDays.has(day)
                  ? "rgba(208, 255, 0, 0.2)"
                  : emptyDays.has(day)
                    ? "rgba(10, 10, 10, 0.06)"
                    : "rgba(255, 255, 255, 0.32)"
              }
              height="24"
              rx="7"
              stroke="rgba(10, 10, 10, 0.14)"
              width="24"
              x={x}
              y={y}
            />
            <text
              className="home-illustration-text home-illustration-text--small"
              textAnchor="middle"
              x={x + 12}
              y={y + 16}
            >
              {day}
            </text>
          </g>
        );
      })}

      <rect className="home-svg-card" height="92" rx="18" width="132" x="250" y="174" />
      <text className="home-illustration-text" x="270" y="206">
        vecie viesi
      </text>
      <text className="home-illustration-text home-illustration-text--small" x="270" y="228">
        kam rakstīt?
      </text>
      <text className="home-illustration-text home-illustration-text--note" x="270" y="250">
        rezervācija atgriezta
      </text>

      <path
        className="vx-svg-line vx-svg-line--neon vx-path-draw"
        d="M250 218 C218 214 204 190 202 168"
      />
      <path className="vx-svg-arrow vx-svg-line--neon" d="M194 181 L202 166 L211 181" />

      <rect className="home-svg-card--dark" height="58" rx="16" width="132" x="250" y="78" />
      <text
        className="home-illustration-text home-illustration-text--small"
        x="270"
        y="110"
      >
        piedāvājums klusajam
      </text>
      <text
        className="home-illustration-text home-illustration-text--small"
        x="270"
        y="126"
      >
        mēnesim
      </text>
    </svg>
  );
}
