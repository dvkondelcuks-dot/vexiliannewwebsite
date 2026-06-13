import type { SVGProps } from "react";

/**
 * Reservation leakage map. A hand-drawn route runs through six stops
 * (Redzamība → Atkārtots viesis). The dark route physically breaks in three
 * places with side notes; a single neon overlay shows the corrected continuous
 * route, and the repeat-guest stop loops back into the system.
 */
export function LeakagePathIllustration(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  const wrapperClass = ["vx-illu", className].filter(Boolean).join(" ");

  const stops = [
    { n: 1, x: 92, y: 312, label: "Redzamība" },
    { n: 2, x: 232, y: 220, label: "Pieprasījums" },
    { n: 3, x: 372, y: 318, label: "Atbilde" },
    { n: 4, x: 500, y: 214, label: "Follow-up" },
    { n: 5, x: 624, y: 312, label: "Rezervācija" },
    { n: 6, x: 706, y: 196, label: "Atkārtots viesis" },
  ];

  return (
    <figure className={wrapperClass}>
      {/* ---------------------------- DESKTOP ---------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--desktop vx-svg-language"
        viewBox="0 0 780 470"
        role="img"
        aria-labelledby="leak-d-title leak-d-desc"
        {...rest}
      >
        <title id="leak-d-title">
          Rezervāciju noplūdes karte ar sešām pieturām un trim pārrāvumiem
        </title>
        <desc id="leak-d-desc">
          Ceļš no redzamības līdz atkārtotam viesim. Tumšais ceļš pārtrūkst trīs
          vietās ar piezīmēm par noplūdi; neona ceļš parāda salaboto nepārtraukto
          maršrutu, un atkārtotais viesis atgriežas sistēmā.
        </desc>

        {/* base: map panel */}
        <rect x="20" y="22" width="740" height="426" rx="20" className="vi-paper" />
        <rect
          x="20"
          y="22"
          width="740"
          height="426"
          rx="20"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1.4"
        />
        {/* faint terrain contour lines */}
        <path
          d="M40 120 C 200 96 240 160 420 132 C 560 110 640 150 740 120"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M40 396 C 180 416 300 360 460 388 C 600 412 660 372 740 392"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* compass mark */}
        <g transform="translate(706 64)">
          <circle r="18" className="vi-stroke vi-ink-soft" strokeWidth="1.6" />
          <path d="M0 -14 L5 0 L0 14 L-5 0 Z" className="vi-ink-fill" />
          <text x="0" y="-22" textAnchor="middle" className="vi-label-quiet" fontSize="9">
            Z
          </text>
        </g>
        <text x="44" y="60" className="vi-hand" fontSize="20">
          Klienta ceļš
        </text>

        {/* neon corrected overlay — the continuous fixed route */}
        <path
          d="M92 300 C 150 250 184 224 226 210 C 300 188 322 296 366 304 C 430 316 452 220 498 204 C 560 184 580 296 620 300 C 668 304 686 240 704 198"
          className="vi-stroke vi-neon vi-draw"
          strokeWidth="2.6"
          opacity="0.9"
          style={{ ["--vi-len" as string]: 900 }}
        />

        {/* dark route segments — break in three places */}
        {/* 1 -> 2 : BREAK */}
        <path d="M104 300 C 150 256 176 236 198 226" className="vi-stroke vi-ink" strokeWidth="2.6" />
        {/* 2 -> 3 : intact */}
        <path
          d="M242 234 C 300 270 332 300 358 308"
          className="vi-stroke vi-ink"
          strokeWidth="2.6"
        />
        {/* 3 -> 4 : BREAK */}
        <path d="M386 312 C 420 304 442 270 462 240" className="vi-stroke vi-ink" strokeWidth="2.6" />
        {/* 4 -> 5 : BREAK */}
        <path d="M512 224 C 548 252 566 282 584 296" className="vi-stroke vi-ink" strokeWidth="2.6" />
        {/* 5 -> 6 : intact */}
        <path
          d="M638 302 C 672 296 686 250 698 214"
          className="vi-stroke vi-ink"
          strokeWidth="2.6"
        />

        {/* repeat-guest loop back into the system */}
        <path
          d="M712 188 C 744 150 742 92 680 78 C 520 44 300 56 150 92 C 96 105 78 150 88 290"
          className="vi-stroke vi-neon vi-broken"
          strokeWidth="2.4"
        />
        <path d="M88 290 l-7 -15 l15 4" className="vi-stroke vi-neon" strokeWidth="2.4" />
        <text x="404" y="74" textAnchor="middle" className="vi-hand-neon" fontSize="14">
          vecais viesis atgriežas sistēmā
        </text>

        {/* break markers + side notes */}
        {/* break A near 1->2 */}
        <g transform="translate(168 262)">
          <circle r="9" className="vi-paper" />
          <circle r="9" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <line x1="-4" y1="-4" x2="4" y2="4" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <line x1="4" y1="-4" x2="-4" y2="4" className="vi-stroke vi-neon" strokeWidth="2.4" />
        </g>
        <g transform="translate(96 372)">
          <rect width="150" height="44" rx="8" className="vi-card" />
          <rect width="150" height="44" rx="8" className="vi-stroke vi-ink-soft" strokeWidth="1.4" />
          <text x="12" y="19" className="vi-label" fontSize="11">
            nav nākamā soļa
          </text>
          <text x="12" y="34" className="vi-text" fontSize="10.5" fill="rgba(10,10,10,0.66)">
            kāpēc rezervēt tagad?
          </text>
        </g>
        <line x1="171" y1="271" x2="150" y2="372" className="vi-stroke vi-ink-faint" strokeWidth="1.4" />

        {/* break B near 3->4 */}
        <g transform="translate(430 270)">
          <circle r="9" className="vi-paper" />
          <circle r="9" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <line x1="-4" y1="-4" x2="4" y2="4" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <line x1="4" y1="-4" x2="-4" y2="4" className="vi-stroke vi-neon" strokeWidth="2.4" />
        </g>
        <g transform="translate(356 360)">
          <rect width="160" height="44" rx="8" className="vi-card" />
          <rect width="160" height="44" rx="8" className="vi-stroke vi-ink-soft" strokeWidth="1.4" />
          <text x="12" y="19" className="vi-label" fontSize="11">
            lēna atbilde
          </text>
          <text x="12" y="34" className="vi-text" fontSize="10.5" fill="rgba(10,10,10,0.66)">
            neved uz lēmumu
          </text>
        </g>
        <line x1="432" y1="279" x2="436" y2="360" className="vi-stroke vi-ink-faint" strokeWidth="1.4" />

        {/* break C near 4->5 */}
        <g transform="translate(548 262)">
          <circle r="9" className="vi-paper" />
          <circle r="9" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <line x1="-4" y1="-4" x2="4" y2="4" className="vi-stroke vi-neon" strokeWidth="2.4" />
          <line x1="4" y1="-4" x2="-4" y2="4" className="vi-stroke vi-neon" strokeWidth="2.4" />
        </g>
        <g transform="translate(540 360)">
          <rect width="170" height="44" rx="8" className="vi-card" />
          <rect width="170" height="44" rx="8" className="vi-stroke vi-ink-soft" strokeWidth="1.4" />
          <text x="12" y="19" className="vi-label" fontSize="11">
            nav atgriezts
          </text>
          <text x="12" y="34" className="vi-text" fontSize="10.5" fill="rgba(10,10,10,0.66)">
            kurš kanāls deva?
          </text>
        </g>
        <line x1="552" y1="271" x2="600" y2="360" className="vi-stroke vi-ink-faint" strokeWidth="1.4" />

        {/* stops (map markers) */}
        {stops.map((s) => (
          <g key={s.n} transform={`translate(${s.x} ${s.y})`}>
            <ellipse cx="0" cy="16" rx="13" ry="4" className="vi-shadow" />
            <path
              d="M0 14 C -12 0 -12 -8 0 -18 C 12 -8 12 0 0 14 Z"
              className={s.n === 5 || s.n === 6 ? "vi-neon-wash" : "vi-card"}
            />
            <path
              d="M0 14 C -12 0 -12 -8 0 -18 C 12 -8 12 0 0 14 Z"
              className="vi-stroke vi-ink"
              strokeWidth="2.2"
            />
            <circle cx="0" cy="-6" r="6.5" className="vi-ink-fill" />
            <text x="0" y="-2.4" textAnchor="middle" className="vi-on-ink" fontSize="9" fontWeight={700}>
              {s.n}
            </text>
            <text
              x="0"
              y="36"
              textAnchor="middle"
              className="vi-label"
              fontSize={s.n === 6 ? 11.5 : 12.5}
            >
              {s.label}
            </text>
          </g>
        ))}
      </svg>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--mobile vx-svg-language"
        viewBox="0 0 360 660"
        role="img"
        aria-labelledby="leak-m-title"
      >
        <title id="leak-m-title">
          Vertikāla noplūdes karte: seši posmi, trīs pārrāvumi un atgriešanās
          cilpa.
        </title>

        <rect x="12" y="14" width="336" height="632" rx="18" className="vi-paper" />
        <rect
          x="12"
          y="14"
          width="336"
          height="632"
          rx="18"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1.4"
        />
        <text x="32" y="50" className="vi-hand" fontSize="19">
          Klienta ceļš
        </text>

        {(() => {
          const m = [
            { n: 1, y: 96, label: "Redzamība", note: "" },
            { n: 2, y: 188, label: "Pieprasījums", note: "nav nākamā soļa" },
            { n: 3, y: 290, label: "Atbilde", note: "" },
            { n: 4, y: 392, label: "Follow-up", note: "lēna atbilde" },
            { n: 5, y: 494, label: "Rezervācija", note: "" },
            { n: 6, y: 586, label: "Atkārtots viesis", note: "nav atgriezts" },
          ];
          const x = 96;
          return (
            <>
              {/* neon corrected overlay */}
              <path
                d="M108 96 C 150 150 150 150 108 188 C 70 230 70 250 108 290 C 150 332 150 350 108 392 C 70 440 70 452 108 494 C 150 540 150 548 116 586"
                className="vi-stroke vi-neon"
                strokeWidth="3"
                opacity="0.9"
              />
              {/* dark route */}
              <path
                d="M108 96 C 150 150 150 150 108 188"
                className="vi-stroke vi-ink vi-broken"
                strokeWidth="2.8"
              />
              <path d="M108 188 C 70 230 70 250 108 290" className="vi-stroke vi-ink" strokeWidth="2.8" />
              <path
                d="M108 290 C 150 332 150 350 108 392"
                className="vi-stroke vi-ink vi-broken"
                strokeWidth="2.8"
              />
              <path d="M108 392 C 70 440 70 452 108 494" className="vi-stroke vi-ink" strokeWidth="2.8" />
              <path
                d="M108 494 C 150 540 150 548 116 586"
                className="vi-stroke vi-ink vi-broken"
                strokeWidth="2.8"
              />
              {/* return loop */}
              <path
                d="M150 586 C 250 580 296 470 290 300 C 286 170 250 110 150 100"
                className="vi-stroke vi-neon vi-broken"
                strokeWidth="2.6"
              />
              <path d="M150 100 l16 -3 l-7 14" className="vi-stroke vi-neon" strokeWidth="2.6" />
              <text
                x="304"
                y="330"
                textAnchor="middle"
                className="vi-hand-neon"
                fontSize="13"
                transform="rotate(90 304 330)"
              >
                atgriežas sistēmā
              </text>

              {m.map((s) => (
                <g key={s.n} transform={`translate(${x} ${s.y})`}>
                  <path
                    d="M0 14 C -13 -1 -13 -9 0 -20 C 13 -9 13 -1 0 14 Z"
                    className={s.n >= 5 ? "vi-neon-wash" : "vi-card"}
                  />
                  <path
                    d="M0 14 C -13 -1 -13 -9 0 -20 C 13 -9 13 -1 0 14 Z"
                    className="vi-stroke vi-ink"
                    strokeWidth="2.4"
                  />
                  <circle cx="0" cy="-7" r="7" className="vi-ink-fill" />
                  <text x="0" y="-3" textAnchor="middle" className="vi-on-ink" fontSize="10" fontWeight={700}>
                    {s.n}
                  </text>
                  <text x="26" y="-2" className="vi-label" fontSize="15">
                    {s.label}
                  </text>
                  {s.note ? (
                    <text x="26" y="16" className="vi-hand-neon" fontSize="12.5">
                      {s.note}
                    </text>
                  ) : null}
                </g>
              ))}
            </>
          );
        })()}
      </svg>
    </figure>
  );
}

export default LeakagePathIllustration;
