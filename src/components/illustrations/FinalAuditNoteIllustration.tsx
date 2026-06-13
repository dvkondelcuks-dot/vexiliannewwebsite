import type { SVGProps } from "react";

/**
 * Final audit note. A diagnostic checklist ("Auditā pārbaudām") with five
 * inspection items. A magnifier hovers over the circled "Noplūdes punkti" line,
 * a short note reads "sākam ar noplūdi", and a neon connector leads to the form
 * CTA — framing the form as a diagnostic entry point, not a contact form.
 */
export function FinalAuditNoteIllustration(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  const wrapperClass = ["vx-illu", className].filter(Boolean).join(" ");

  const items = [
    { t: "Avoti", focus: false },
    { t: "Noplūdes punkti", focus: true },
    { t: "Klusie mēneši", focus: false },
    { t: "Iepriekšējie viesi", focus: false },
    { t: "Nākamais solis", focus: false },
  ];

  return (
    <figure className={wrapperClass}>
      {/* ---------------------------- DESKTOP ---------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--desktop vx-svg-language"
        viewBox="0 0 640 520"
        role="img"
        aria-labelledby="audit-d-title audit-d-desc"
        {...rest}
      >
        <title id="audit-d-title">
          Audita piezīme ar piecu punktu pārbaudes sarakstu un neona savienojumu
          uz pieteikšanās pogu
        </title>
        <desc id="audit-d-desc">
          Pārbaudes saraksts: avoti, noplūdes punkti, klusie mēneši, iepriekšējie
          viesi un nākamais solis. Palielināmais stikls izceļ noplūdes punktus, un
          neona līnija ved uz pogu “Pieteikt bezmaksas auditu”.
        </desc>

        {/* base diagnostic page */}
        <rect x="44" y="40" width="412" height="396" rx="18" className="vi-shadow" transform="translate(6 8)" />
        <rect x="44" y="40" width="412" height="396" rx="18" className="vi-paper" />
        <rect x="44" y="40" width="412" height="396" rx="18" className="vi-stroke vi-ink" strokeWidth="2.2" />
        {/* punch holes on the left margin */}
        {[96, 160, 224, 288, 352].map((cy) => (
          <circle key={cy} cx="70" cy={cy} r="4.5" className="vi-stroke vi-ink-faint" strokeWidth="1.6" />
        ))}

        <text x="100" y="86" className="vi-title-text" fontSize="24">
          Auditā pārbaudām
        </text>
        <line x1="100" y1="98" x2="320" y2="98" className="vi-stroke vi-neon" strokeWidth="2.6" />

        {/* checklist */}
        {items.map((it, i) => {
          const y = 138 + i * 56;
          return (
            <g key={it.t}>
              <rect x="100" y={y} width="26" height="26" rx="6" className="vi-card" />
              <rect
                x="100"
                y={y}
                width="26"
                height="26"
                rx="6"
                className={it.focus ? "vi-stroke vi-neon" : "vi-stroke vi-ink"}
                strokeWidth="2.2"
              />
              <path
                d={`M105 ${y + 14} l6 6 l11 -14`}
                className="vi-stroke vi-neon"
                strokeWidth="3"
              />
              <text x="142" y={y + 19} className="vi-label" fontSize="16">
                {it.t}
              </text>
            </g>
          );
        })}

        {/* circle the leakage item */}
        <path
          d="M134 198 c40 -16 168 -14 196 2 c18 14 6 30 -28 34 c-60 8 -150 6 -170 -8 c-12 -10 -8 -22 2 -30 z"
          className="vi-stroke vi-neon"
          strokeWidth="2.4"
          fill="none"
        />

        {/* magnifier over the leakage line */}
        <g transform="translate(338 196)">
          <circle r="30" className="vi-neon-wash" />
          <circle r="30" className="vi-stroke vi-ink" strokeWidth="3" />
          <circle r="30" className="vi-stroke vi-neon" strokeWidth="1.6" opacity="0.7" />
          <line x1="21" y1="21" x2="44" y2="44" className="vi-stroke vi-ink" strokeWidth="6" />
          <line x1="-10" y1="-4" x2="6" y2="-4" className="vi-stroke vi-ink-soft" strokeWidth="2" />
          <line x1="-10" y1="6" x2="2" y2="6" className="vi-stroke vi-ink-soft" strokeWidth="2" />
        </g>
        <text x="392" y="150" className="vi-hand-neon" fontSize="15">
          sākam ar noplūdi
        </text>

        {/* neon connector toward the CTA */}
        <path
          d="M300 416 C 360 452 420 460 470 466"
          className="vi-stroke vi-neon vi-draw"
          strokeWidth="2.8"
          style={{ ["--vi-len" as string]: 220 }}
        />

        {/* form CTA button */}
        <g transform="translate(372 446)">
          <rect width="232" height="50" rx="25" className="vi-neon-fill" />
          <text x="116" y="31" textAnchor="middle" className="vi-text" fontSize="15" fontWeight={760}>
            Pieteikt bezmaksas auditu
          </text>
          <path d="M196 25 l14 0 m-6 -6 l6 6 l-6 6" className="vi-stroke vi-ink" strokeWidth="2.4" />
        </g>
      </svg>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--mobile vx-svg-language"
        viewBox="0 0 360 560"
        role="img"
        aria-labelledby="audit-m-title"
      >
        <title id="audit-m-title">
          Audita pārbaudes saraksts ar pieciem punktiem, palielināmo stiklu uz
          noplūdes punktiem un neona savienojumu uz pieteikšanās pogu.
        </title>

        <rect x="22" y="20" width="316" height="404" rx="18" className="vi-paper" />
        <rect x="22" y="20" width="316" height="404" rx="18" className="vi-stroke vi-ink" strokeWidth="2.2" />

        <text x="48" y="64" className="vi-title-text" fontSize="22">
          Auditā pārbaudām
        </text>
        <line x1="48" y1="76" x2="250" y2="76" className="vi-stroke vi-neon" strokeWidth="2.6" />

        {items.map((it, i) => {
          const y = 108 + i * 56;
          return (
            <g key={it.t}>
              <rect x="48" y={y} width="28" height="28" rx="6" className="vi-card" />
              <rect
                x="48"
                y={y}
                width="28"
                height="28"
                rx="6"
                className={it.focus ? "vi-stroke vi-neon" : "vi-stroke vi-ink"}
                strokeWidth="2.4"
              />
              <path d={`M53 ${y + 15} l7 7 l12 -15`} className="vi-stroke vi-neon" strokeWidth="3.2" />
              <text x="90" y={y + 21} className="vi-label" fontSize="17">
                {it.t}
              </text>
            </g>
          );
        })}

        {/* magnifier over leakage row */}
        <g transform="translate(286 178)">
          <circle r="26" className="vi-neon-wash" />
          <circle r="26" className="vi-stroke vi-ink" strokeWidth="3" />
          <line x1="18" y1="18" x2="38" y2="38" className="vi-stroke vi-ink" strokeWidth="6" />
        </g>
        <text x="60" y="412" className="vi-hand-neon" fontSize="15">
          sākam ar noplūdi
        </text>

        {/* connector + CTA */}
        <path d="M180 424 C 180 444 180 452 180 462" className="vi-stroke vi-neon" strokeWidth="3" />
        <path d="M180 462 l-6 -11 l12 0" className="vi-stroke vi-neon" strokeWidth="3" />
        <g transform="translate(54 470)">
          <rect width="252" height="56" rx="28" className="vi-neon-fill" />
          <text x="126" y="35" textAnchor="middle" className="vi-text" fontSize="16" fontWeight={760}>
            Pieteikt bezmaksas auditu
          </text>
        </g>
      </svg>
    </figure>
  );
}

export default FinalAuditNoteIllustration;
