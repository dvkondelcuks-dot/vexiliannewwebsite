import type { SVGProps } from "react";

/**
 * Owner control board. A warm-paper board holds hand-arranged note cards of
 * different shapes (blocks, tags, slips) with status dots and next-action
 * arrows. Hand labels — redzams, jārīkojas, nepazūd — frame the meaning. No
 * charts or dashboard chrome: the owner finally knows what needs action.
 */
export function OwnerControlBoardIllustration(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  const wrapperClass = ["vx-illu", className].filter(Boolean).join(" ");

  return (
    <figure className={wrapperClass}>
      {/* ---------------------------- DESKTOP ---------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--desktop vx-svg-language"
        viewBox="0 0 760 520"
        role="img"
        aria-labelledby="board-d-title board-d-desc"
        {...rest}
      >
        <title id="board-d-title">
          Īpašnieka vadības dēlis ar dažādām piezīmju kartiņām, statusa punktiem
          un nākamā soļa bultām
        </title>
        <desc id="board-d-desc">
          Kartiņas par jauniem pieprasījumiem, kam jāatbild šodien, avotu, statusu,
          nākamo soli, klusā mēneša iespēju un atkārtoto viesi. Neona punkti rāda,
          kur jārīkojas, un bultas rāda nākamo soli.
        </desc>

        {/* board surface */}
        <rect x="20" y="22" width="720" height="476" rx="20" className="vi-paper-deep" />
        <rect x="20" y="22" width="720" height="476" rx="20" className="vi-stroke vi-ink-faint" strokeWidth="1.4" />
        <rect x="32" y="34" width="696" height="452" rx="14" className="vi-paper" />

        <text x="48" y="68" className="vi-hand" fontSize="20">
          Īpašnieka skats
        </text>
        <text x="700" y="68" textAnchor="end" className="vi-hand-neon" fontSize="14">
          redzams
        </text>

        {/* Card A: Jauni pieprasījumi (note block + tape) */}
        <g transform="translate(48 86) rotate(-1)">
          <rect width="208" height="100" rx="12" className="vi-card" />
          <rect width="208" height="100" rx="12" className="vi-stroke vi-ink" strokeWidth="2" />
          <rect x="84" y="-8" width="40" height="16" rx="2" className="vi-neon-wash" transform="rotate(-3 104 0)" />
          <text x="18" y="34" className="vi-label" fontSize="13">
            Jauni pieprasījumi
          </text>
          <text x="18" y="76" className="vi-title-text" fontSize="30">
            4
          </text>
          <text x="58" y="76" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.66)">
            šonedēļ
          </text>
          <circle cx="190" cy="20" r="6" className="vi-neon-fill" />
        </g>

        {/* Card B: Kam jāatbild šodien (note block) */}
        <g transform="translate(284 80) rotate(0.6)">
          <rect width="220" height="104" rx="12" className="vi-card" />
          <rect width="220" height="104" rx="12" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="18" y="34" className="vi-label" fontSize="13">
            Kam jāatbild šodien
          </text>
          <text x="18" y="78" className="vi-title-text" fontSize="30">
            2
          </text>
          <text x="58" y="78" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.66)">
            interesenti
          </text>
          <circle cx="202" cy="20" r="6" className="vi-neon-fill" />
        </g>
        <text x="300" y="70" className="vi-hand-neon" fontSize="13">
          jārīkojas
        </text>

        {/* Card C: Avots (small slip) */}
        <g transform="translate(532 92) rotate(-1.4)">
          <rect width="176" height="94" rx="10" className="vi-card-tint" />
          <rect width="176" height="94" rx="10" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="16" y="30" className="vi-label" fontSize="13">
            Avots
          </text>
          {["Instagram", "Booking", "zvans"].map((t, i) => (
            <g key={t}>
              <circle cx="20" cy={48 + i * 15} r="3.5" className="vi-sand-fill" />
              <text x="34" y={52 + i * 15} className="vi-text" fontSize="11.5" fill="rgba(10,10,10,0.7)">
                {t}
              </text>
            </g>
          ))}
        </g>

        {/* Card D: Statuss (tag with folded corner) */}
        <g transform="translate(48 210) rotate(0.8)">
          <path d="M0 10 a10 10 0 0 1 10 -10 h150 l30 26 v40 a10 10 0 0 1 -10 10 h-170 a10 10 0 0 1 -10 -10 z" className="vi-card" />
          <path d="M0 10 a10 10 0 0 1 10 -10 h150 l30 26 v40 a10 10 0 0 1 -10 10 h-170 a10 10 0 0 1 -10 -10 z" className="vi-stroke vi-ink" strokeWidth="2" />
          <path d="M160 0 v26 h30" className="vi-stroke vi-ink-soft" strokeWidth="1.6" />
          <text x="16" y="30" className="vi-label" fontSize="13">
            Statuss
          </text>
          <text x="16" y="56" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.7)">
            gaida lēmumu
          </text>
          <circle cx="176" cy="58" r="6" className="vi-sand-fill" />
        </g>

        {/* Card E: Nākamais solis (note block) */}
        <g transform="translate(284 204) rotate(-0.8)">
          <rect width="220" height="92" rx="12" className="vi-card" />
          <rect width="220" height="92" rx="12" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="18" y="32" className="vi-label" fontSize="13">
            Nākamais solis
          </text>
          <text x="18" y="64" className="vi-text" fontSize="16" fill="rgba(10,10,10,0.82)">
            rakstīt rīt · WhatsApp
          </text>
          <circle cx="202" cy="20" r="6" className="vi-neon-fill" />
        </g>
        <text x="300" y="316" className="vi-hand-neon" fontSize="13">
          nepazūd
        </text>

        {/* Card F: Potenciālā vērtība (small slip) */}
        <g transform="translate(532 196) rotate(1.4)">
          <rect width="176" height="80" rx="10" className="vi-card-tint" />
          <rect width="176" height="80" rx="10" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="16" y="30" className="vi-label" fontSize="13">
            Potenciālā vērtība
          </text>
          <text x="16" y="60" className="vi-title-text" fontSize="20">
            augsta
          </text>
          <circle cx="152" cy="22" r="6" className="vi-neon-fill" />
        </g>

        {/* Card G: Klusā mēneša iespēja */}
        <g transform="translate(48 322) rotate(-0.6)">
          <rect width="236" height="92" rx="12" className="vi-card" />
          <rect width="236" height="92" rx="12" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="18" y="32" className="vi-label" fontSize="13">
            Klusā mēneša iespēja
          </text>
          <text x="18" y="64" className="vi-text" fontSize="13.5" fill="rgba(10,10,10,0.72)">
            uzrunāt vecos viesus
          </text>
          <circle cx="218" cy="20" r="6" className="vi-sand-fill" />
        </g>

        {/* Card H: Atkārtotais viesis */}
        <g transform="translate(312 330) rotate(0.8)">
          <rect width="192" height="84" rx="12" className="vi-card" />
          <rect width="192" height="84" rx="12" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="18" y="32" className="vi-label" fontSize="13">
            Atkārtotais viesis
          </text>
          <text x="18" y="62" className="vi-text" fontSize="13.5" fill="rgba(10,10,10,0.72)">
            atgriezt nākamsezon
          </text>
          <circle cx="174" cy="20" r="6" className="vi-sand-fill" />
        </g>

        {/* next-action arrows */}
        <path d="M396 184 C 398 192 398 196 398 202" className="vi-stroke vi-neon" strokeWidth="2.6" />
        <path d="M398 202 l-5 -10 l10 0" className="vi-stroke vi-neon" strokeWidth="2.6" />
        <path d="M504 250 C 520 244 524 240 528 236" className="vi-stroke vi-ink-soft" strokeWidth="2" />

        {/* legend */}
        <g transform="translate(532 300)">
          <circle cx="0" cy="0" r="5.5" className="vi-neon-fill" />
          <text x="14" y="4" className="vi-text" fontSize="11.5" fill="rgba(10,10,10,0.7)">
            jārīkojas
          </text>
          <circle cx="0" cy="22" r="5.5" className="vi-sand-fill" />
          <text x="14" y="26" className="vi-text" fontSize="11.5" fill="rgba(10,10,10,0.7)">
            gaida
          </text>
        </g>
      </svg>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--mobile vx-svg-language"
        viewBox="0 0 360 600"
        role="img"
        aria-labelledby="board-m-title"
      >
        <title id="board-m-title">
          Īpašnieka dēlis ar četrām kartiņām, statusa punktiem un nākamā soļa
          atzīmi.
        </title>

        <rect x="12" y="14" width="336" height="572" rx="18" className="vi-paper-deep" />
        <rect x="12" y="14" width="336" height="572" rx="18" className="vi-stroke vi-ink-faint" strokeWidth="1.4" />
        <rect x="22" y="24" width="316" height="552" rx="14" className="vi-paper" />

        <text x="36" y="58" className="vi-hand" fontSize="18">
          Īpašnieka skats
        </text>

        {(() => {
          const cards = [
            { y: 78, t: "Jauni pieprasījumi", v: "4 šonedēļ", dot: "neon", note: "redzams" },
            { y: 196, t: "Kam jāatbild šodien", v: "2 interesenti", dot: "neon", note: "jārīkojas" },
            { y: 314, t: "Nākamais solis", v: "rakstīt rīt · WhatsApp", dot: "neon", note: "nepazūd" },
            { y: 432, t: "Atkārtotais viesis", v: "atgriezt nākamsezon", dot: "sand", note: "" },
          ];
          return cards.map((c, i) => (
            <g key={c.t}>
              <g transform={`translate(36 ${c.y}) rotate(${i % 2 === 0 ? -0.8 : 0.8})`}>
                <rect width="288" height="94" rx="12" className="vi-card" />
                <rect width="288" height="94" rx="12" className="vi-stroke vi-ink" strokeWidth="2.2" />
                <text x="18" y="34" className="vi-label" fontSize="15">
                  {c.t}
                </text>
                <text x="18" y="66" className="vi-text" fontSize="16" fill="rgba(10,10,10,0.78)">
                  {c.v}
                </text>
                <circle cx="266" cy="22" r="7" className={c.dot === "neon" ? "vi-neon-fill" : "vi-sand-fill"} />
              </g>
              {c.note ? (
                <text x="300" y={c.y + 22} textAnchor="end" className="vi-hand-neon" fontSize="13">
                  {c.note}
                </text>
              ) : null}
              {i < cards.length - 1 ? (
                <g>
                  <path
                    d={`M180 ${c.y + 96} l0 18`}
                    className="vi-stroke vi-neon"
                    strokeWidth="2.6"
                  />
                  <path d={`M180 ${c.y + 114} l-5 -10 l10 0`} className="vi-stroke vi-neon" strokeWidth="2.6" />
                </g>
              ) : null}
            </g>
          ));
        })()}
      </svg>
    </figure>
  );
}

export default OwnerControlBoardIllustration;
