import type { SVGProps } from "react";

/**
 * Off-season planning sheet. A real January calendar grid sits half-empty
 * ("klusais mēnesis"), beside an old-guest list and a seasonal offer note. An
 * arrow runs from the guest list to a single date that flips to a neon
 * "rezervēts" mark — old demand reactivated into a quiet month.
 */
export function OffSeasonCalendarIllustration(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  const wrapperClass = ["vx-illu", className].filter(Boolean).join(" ");

  const weekdays = ["Pr", "O", "Tr", "C", "Pk", "S", "Sv"];
  // day -> mark: "book" small existing booking, "res" reactivated neon date
  const marks: Record<number, "book" | "res"> = { 4: "book", 11: "book", 18: "res", 25: "book" };

  const cellW = 50;
  const cellH = 50;
  const gridX = 48;
  const gridY = 168;

  return (
    <figure className={wrapperClass}>
      {/* ---------------------------- DESKTOP ---------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--desktop vx-svg-language"
        viewBox="0 0 760 520"
        role="img"
        aria-labelledby="cal-d-title cal-d-desc"
        {...rest}
      >
        <title id="cal-d-title">
          Klusā mēneša kalendārs ar tukšiem datumiem, veco viesu sarakstu un
          sezonas piedāvājumu
        </title>
        <desc id="cal-d-desc">
          Janvāra kalendārs ar daudziem tukšiem datumiem. Veco viesu saraksts un
          klusā mēneša piedāvājums. Bulta no veco viesu saraksta atgriež vienu
          datumu ar neona atzīmi “rezervēts”.
        </desc>

        {/* base sheet */}
        <rect x="20" y="22" width="720" height="476" rx="20" className="vi-paper" />
        <rect
          x="20"
          y="22"
          width="720"
          height="476"
          rx="20"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1.4"
        />

        {/* calendar header */}
        <text x="48" y="78" className="vi-title-text" fontSize="34">
          Janvāris
        </text>
        <text x="48" y="104" className="vi-hand" fontSize="16" fill="rgba(10,10,10,0.6)">
          klusais mēnesis · darba dienas
        </text>
        {/* snowflake seasonal marker */}
        <g transform="translate(372 70)" className="vi-stroke vi-ink-soft" strokeWidth="1.8">
          <line x1="0" y1="-16" x2="0" y2="16" />
          <line x1="-14" y1="-8" x2="14" y2="8" />
          <line x1="-14" y1="8" x2="14" y2="-8" />
          <path d="M0 -16 l-4 5 M0 -16 l4 5 M0 16 l-4 -5 M0 16 l4 -5" />
        </g>

        {/* weekday row */}
        {weekdays.map((d, i) => (
          <text
            key={d + i}
            x={gridX + i * cellW + cellW / 2}
            y={gridY - 12}
            textAnchor="middle"
            className="vi-label-quiet"
            fontSize="12"
          >
            {d}
          </text>
        ))}

        {/* calendar cells: 31 days, Jan starts on a Wednesday (offset 2) */}
        {Array.from({ length: 35 }).map((_, idx) => {
          const day = idx - 2;
          const col = idx % 7;
          const row = Math.floor(idx / 7);
          const x = gridX + col * cellW;
          const y = gridY + row * cellH;
          if (day < 1 || day > 31) {
            return (
              <rect
                key={idx}
                x={x + 2}
                y={y + 2}
                width={cellW - 4}
                height={cellH - 4}
                rx="6"
                className="vi-paper-deep"
                opacity="0.4"
              />
            );
          }
          const mark = marks[day];
          return (
            <g key={idx}>
              <rect
                x={x + 2}
                y={y + 2}
                width={cellW - 4}
                height={cellH - 4}
                rx="6"
                className={mark === "res" ? "vi-neon-wash" : "vi-card"}
              />
              <rect
                x={x + 2}
                y={y + 2}
                width={cellW - 4}
                height={cellH - 4}
                rx="6"
                className={mark === "res" ? "vi-stroke vi-neon" : "vi-stroke vi-ink-faint"}
                strokeWidth={mark === "res" ? 2.4 : 1.2}
              />
              <text
                x={x + 10}
                y={y + 20}
                className="vi-label"
                fontSize="12"
                fill={mark ? "var(--vx-color-graphite)" : "rgba(10,10,10,0.55)"}
              >
                {day}
              </text>
              {mark === "book" ? (
                <circle cx={x + cellW - 14} cy={y + cellH - 14} r="4" className="vi-sand-fill" />
              ) : null}
              {mark === "res" ? (
                <path
                  d={`M${x + 12} ${y + 32} l7 7 l13 -16`}
                  className="vi-stroke vi-neon"
                  strokeWidth="3"
                />
              ) : null}
            </g>
          );
        })}
        {/* "tukšs" margin scrawl over an unbooked weekday */}
        <text
          x="173"
          y="356"
          textAnchor="middle"
          className="vi-hand"
          fontSize="13"
          fill="rgba(10,10,10,0.42)"
          transform="rotate(-4 173 356)"
        >
          tukšs
        </text>

        {/* right column: old guest list */}
        <g transform="translate(452 150)">
          <rect width="262" height="150" rx="12" className="vi-card" transform="rotate(-1)" />
          <rect
            width="262"
            height="150"
            rx="12"
            className="vi-stroke vi-ink"
            strokeWidth="2"
            transform="rotate(-1)"
          />
          <text x="18" y="32" className="vi-label" fontSize="14">
            Vecie viesi
          </text>
          <line x1="18" y1="42" x2="160" y2="42" className="vi-stroke vi-neon" strokeWidth="2.2" />
          {[
            { y: 66, t: "vasaras viesis · jūlijs" },
            { y: 96, t: "pirts grupa · sestdiena" },
            { y: 126, t: "kāzu viesis · pagājušgad" },
          ].map((r) => (
            <g key={r.y}>
              <circle cx="26" cy={r.y - 4} r="4.5" className="vi-stroke vi-ink-soft" strokeWidth="1.6" />
              <text x="42" y={r.y} className="vi-text" fontSize="12.5" fill="rgba(10,10,10,0.72)">
                {r.t}
              </text>
            </g>
          ))}
        </g>
        <text x="466" y="142" className="vi-hand-neon" fontSize="13">
          kam rakstīt?
        </text>

        {/* seasonal offer note */}
        <g transform="translate(452 332)">
          <path d="M0 8 a8 8 0 0 1 8 -8 h246 a8 8 0 0 1 8 8 v92 a8 8 0 0 1 -8 8 h-246 a8 8 0 0 1 -8 -8 z" className="vi-card-tint" />
          <path
            d="M0 8 a8 8 0 0 1 8 -8 h246 a8 8 0 0 1 8 8 v92 a8 8 0 0 1 -8 8 h-246 a8 8 0 0 1 -8 -8 z"
            className="vi-stroke vi-ink-soft"
            strokeWidth="1.6"
            strokeDasharray="6 5"
          />
          <text x="18" y="30" className="vi-label" fontSize="13">
            Piedāvājums klusajam mēnesim
          </text>
          <text x="18" y="56" className="vi-text" fontSize="12.5" fill="rgba(10,10,10,0.72)">
            darba dienu pirts vakars
          </text>
          <text x="18" y="78" className="vi-text" fontSize="12.5" fill="rgba(10,10,10,0.72)">
            iemesls rezervēt tieši tagad
          </text>
        </g>

        {/* arrow from guest list to the reserved date (day 18) */}
        <path
          d="M452 232 C 410 250 388 262 364 274"
          className="vi-stroke vi-neon"
          strokeWidth="2.8"
        />
        <path d="M364 274 l17 -3 l-5 16" className="vi-stroke vi-neon" strokeWidth="2.8" />
        <text x="392" y="226" textAnchor="middle" className="vi-hand-neon" fontSize="13">
          rezervācija atgriezta
        </text>
      </svg>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--mobile vx-svg-language"
        viewBox="0 0 360 640"
        role="img"
        aria-labelledby="cal-m-title"
      >
        <title id="cal-m-title">
          Klusā mēneša kalendārs ar tukšiem datumiem, vienu atgrieztu rezervāciju
          un veco viesu sarakstu.
        </title>

        <rect x="12" y="14" width="336" height="612" rx="18" className="vi-paper" />
        <rect
          x="12"
          y="14"
          width="336"
          height="612"
          rx="18"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1.4"
        />

        <text x="30" y="58" className="vi-title-text" fontSize="28">
          Janvāris
        </text>
        <text x="30" y="82" className="vi-hand" fontSize="14" fill="rgba(10,10,10,0.6)">
          klusais mēnesis
        </text>

        {(() => {
          const mCellW = 44;
          const mCellH = 42;
          const mGridX = 30;
          const mGridY = 130;
          return (
            <>
              {weekdays.map((d, i) => (
                <text
                  key={d + i}
                  x={mGridX + i * mCellW + mCellW / 2}
                  y={mGridY - 10}
                  textAnchor="middle"
                  className="vi-label-quiet"
                  fontSize="11"
                >
                  {d}
                </text>
              ))}
              {Array.from({ length: 35 }).map((_, idx) => {
                const day = idx - 2;
                const col = idx % 7;
                const row = Math.floor(idx / 7);
                const x = mGridX + col * mCellW;
                const y = mGridY + row * mCellH;
                if (day < 1 || day > 31) {
                  return (
                    <rect
                      key={idx}
                      x={x + 2}
                      y={y + 2}
                      width={mCellW - 4}
                      height={mCellH - 4}
                      rx="5"
                      className="vi-paper-deep"
                      opacity="0.4"
                    />
                  );
                }
                const mark = marks[day];
                return (
                  <g key={idx}>
                    <rect
                      x={x + 2}
                      y={y + 2}
                      width={mCellW - 4}
                      height={mCellH - 4}
                      rx="5"
                      className={mark === "res" ? "vi-neon-wash" : "vi-card"}
                    />
                    <rect
                      x={x + 2}
                      y={y + 2}
                      width={mCellW - 4}
                      height={mCellH - 4}
                      rx="5"
                      className={mark === "res" ? "vi-stroke vi-neon" : "vi-stroke vi-ink-faint"}
                      strokeWidth={mark === "res" ? 2.4 : 1.1}
                    />
                    <text x={x + 8} y={y + 18} className="vi-label" fontSize="11" fill={mark ? "var(--vx-color-graphite)" : "rgba(10,10,10,0.55)"}>
                      {day}
                    </text>
                    {mark === "res" ? (
                      <path d={`M${x + 9} ${y + 26} l6 6 l11 -13`} className="vi-stroke vi-neon" strokeWidth="3" />
                    ) : null}
                  </g>
                );
              })}
            </>
          );
        })()}

        {/* guest list + offer */}
        <g transform="translate(30 372)">
          <rect width="300" height="104" rx="12" className="vi-card" />
          <rect width="300" height="104" rx="12" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="18" y="32" className="vi-label" fontSize="16">
            Vecie viesi
          </text>
          <line x1="18" y1="42" x2="150" y2="42" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <text x="18" y="66" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.72)">
            vasaras viesis · jūlijs
          </text>
          <text x="18" y="88" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.72)">
            pirts grupa · sestdiena
          </text>
        </g>

        <g transform="translate(30 496)">
          <path d="M0 8 a8 8 0 0 1 8 -8 h284 a8 8 0 0 1 8 8 v84 a8 8 0 0 1 -8 8 h-284 a8 8 0 0 1 -8 -8 z" className="vi-card-tint" />
          <path d="M0 8 a8 8 0 0 1 8 -8 h284 a8 8 0 0 1 8 8 v84 a8 8 0 0 1 -8 8 h-284 a8 8 0 0 1 -8 -8 z" className="vi-stroke vi-ink-soft" strokeWidth="1.6" strokeDasharray="6 5" />
          <text x="18" y="32" className="vi-label" fontSize="15">
            Piedāvājums klusajam mēnesim
          </text>
          <text x="18" y="58" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.72)">
            darba dienu pirts vakars
          </text>
          <text x="18" y="80" className="vi-hand-neon" fontSize="13">
            iemesls rezervēt tagad
          </text>
        </g>

        {/* arrow from guest list up to reserved date */}
        <path d="M150 372 C 170 330 200 300 214 268" className="vi-stroke vi-neon" strokeWidth="3" />
        <path d="M214 268 l-2 16 l-13 -8" className="vi-stroke vi-neon" strokeWidth="3" />
        <text x="232" y="352" className="vi-hand-neon" fontSize="13">
          rezervēts
        </text>
      </svg>
    </figure>
  );
}

export default OffSeasonCalendarIllustration;
